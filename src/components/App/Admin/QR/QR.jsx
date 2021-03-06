// Code was implemented from https://github.com/JodusNodus/react-qr-reader

import React, { Component, PropTypes } from 'react';
import jsQR from 'jsqr';
import 'md-gum-polyfill';
import 'webrtc-adapter';

const getDeviceId = require('./getDeviceId');

export default class QR extends Component {
  // static PropTypes: {
  //   handleScan: PropTypes.func.isRequired,
  //   handleError: PropTypes.func.isRequired,
  //   handleImageNotRecognized: PropTypes.func,
  //   interval: PropTypes.oneOfType)[
  //     PropTypes.number,
  //     PropTypes.bool,
  //   ]),
  //   previewStyle: PropTypes.object,
  //   inputStyle: PropTypes.object,
  //   facingMode: PropTypes.string,
  //   legacyMode: PropTypes.bool,
  //   maxImageSize: PropTypes.number,
  // }
  // static defaultProps = {
  //   interval: 500,
  //   previewStyle: {},
  //   inputStyle: {},
  //   maxImageSize: 1500,
  // }

  constructor(props){
    super(props)

    this.initiate = this.initiate.bind(this)
    // this.initiateLegacyMode = this.initiateLegacyMode.bind(this)
    this.check = this.check.bind(this)
    this.handleVideo = this.handleVideo.bind(this)
    this.handleLoadStart = this.handleLoadStart.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.clearComponent = this.clearComponent.bind(this)
    this.handleReaderLoad = this.handleReaderLoad.bind(this)
    this.openImageDialog = this.openImageDialog.bind(this)
    this.setInterval = this.setInterval.bind(this)

    this.componentWillUnmount = this.clearComponent
  }
  componentDidMount(){
    if(!this.props.legacyMode){
      this.initiate()
    }else{
      this.initiateLegacyMode()
    }
  }
  componentWillReceiveProps(newProps){
    if(!newProps.legacyMode && this.props.facingMode != newProps.facingMode){
      this.clearComponent()
      this.initiate()
    }else if(this.props.interval != newProps.interval){
      this.setInterval(newProps.interval)
    }else if(!this.props.legacyMode && newProps.legacyMode){
      this.clearComponent()
      this.componentDidUpdate = this.initiateLegacyMode
    }else if(this.props.legacyMode && !newProps.legacyMode){
      this.clearComponent()
      this.initiate()
    }
  }
  clearComponent(){
    if (this._interval) clearInterval(this._interval)

    if (typeof this.stopCamera === 'function') this.stopCamera()

    if(this.reader){
      this.reader.removeEventListener('load', this.handleReaderLoad)
      this.reader = undefined
    }

    if(this.refs.img){
      this.refs.img.removeEventListener('load', this.check)
    }
  }
  initiate(){
    const { handleError, facingMode } = this.props

    getDeviceId(facingMode)
    .then((deviceId) => {
      return navigator.mediaDevices.getUserMedia({
        video: {
          deviceId,
          facingMode: facingMode == 'rear' ? 'environment' : 'user',
          width: { min: 360, ideal: 560, max: 660 },
          height: { min: 240, ideal: 340, max: 440 },
        },
      })
    })
    .then(this.handleVideo)
    .catch(e => handleError(e.name))
  }
  handleVideo(stream) {
    const { preview } = this.refs

    if(window.URL.createObjectURL){
      preview.src = window.URL.createObjectURL(stream)
    }else if (window.webkitURL) {
      preview.src = window.webkitURL.createObjectURL(stream)
    } else if (preview.mozSrcObject !== undefined) {
      preview.mozSrcObject = stream
    } else {
      preview.src = stream
    }

    const streamTrack = stream.getTracks()[0]
    this.stopCamera = streamTrack.stop.bind(streamTrack)

    preview.addEventListener('loadstart', this.handleLoadStart)
  }
  setInterval(interval){
    if (this._interval){
      clearInterval(this._interval)
    }
    if(interval !== false){
      this._interval = setInterval(this.check, interval)
    }
  }
  handleLoadStart(){
    const preview = this.refs.preview
    preview.play()
    this.setInterval(this.props.interval)

    preview.removeEventListener('loadstart', this.handleLoadStart)
  }
  check() {
    const { interval, handleScan, legacyMode, maxImageSize, handleImageNotRecognized } = this.props
    const { preview, canvas, img } = this.refs
    let width = Math.floor(legacyMode ? img.naturalWidth : preview.videoWidth)
    let height = Math.floor(legacyMode ? img.naturalHeight : preview.videoHeight)

    if(legacyMode){
      const ratio = 1.1
      while ((width > height ? width : height) > maxImageSize) {
        width = Math.floor(width / ratio)
        height = Math.floor(height / ratio)
      }
    }

    canvas.width = width
    canvas.height = height

    if (legacyMode || (preview && preview.readyState === preview.HAVE_ENOUGH_DATA)){
      const ctx = canvas.getContext('2d')
      ctx.drawImage(legacyMode ? img : preview, 0, 0, width, height)

      const imageData = ctx.getImageData(0, 0, width, height)
      const decoded = jsQR.decodeQRFromImage(imageData.data, width, height)

      if(decoded){
        handleScan(decoded)
      }else if (legacyMode && handleImageNotRecognized) {
        handleImageNotRecognized()
      }
    }
  }
  initiateLegacyMode(){
    this.reader = new FileReader()

    this.reader.addEventListener('load', this.handleReaderLoad)

    this.refs.img.addEventListener('load', this.check, false)

    this.componentDidUpdate = undefined
  }
  handleInputChange(e){
    this.reader.readAsDataURL(e.target.files[0])
  }
  handleReaderLoad(e){
    this.refs.img.src = e.target.result
  }
  openImageDialog(){
    this.refs.input.click()
  }
  render(){
    const previewStyle = {
      display: 'block',
      objectFit: 'contain',
    };
    const canvasStyle = {
      display: 'none',
    };
    const inputStyle = {
    };

    return (
      <section>
        <button onClick={this.props.hideQR}>X</button>
        {this.props.legacyMode ? (
          <div>
            <input style={inputStyle} id="react-qr-reader-input" type="file" accept="image/*" ref="input" onChange={this.handleInputChange} />
            <img style={{previewStyle, display: 'none'}} ref="img" />
          </div>
        ) : (
          <video style={previewStyle} ref="preview" />
        )}
        <canvas style={canvasStyle} ref="canvas" />
      </section>
    )
  }
}
