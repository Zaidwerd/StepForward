# StepForward
## Volunteer Check-In application for non-profit events

### Concept:

I am looking to create a volunteer check in react application. I have worked for non-profits that hold events centered around volunteer work. One of the biggest downfalls to the process has always been checking and managing volunteer data. I would like to ease this process with a check in that allows volunteers to register, be assigned a QR code with simple check in data such as name and event, that can be easily scanned on the day of the event.  That is my first priority but if possible I would also like to apply a chat/announcement system using socket io as a second priority. 

### Tech:

* HTML/CSS
* JavaScript
* Node.js
* Express.js
* React.js
* PSQL
* QR Code Generator - http://goqr.me/api/
* React QR Reader - https://www.npmjs.com/package/react-qr-reader
* Socket IO - http://socket.io/

### User Stories:

#### Admin:
Non-profit is looking to run an event to raise money for a cause and is looking manage and check in volunteers on the day of the event. 

The admin will be welcomed by a login/register page 

When the Admin opens the page they will find a list of volunteers that have resisted for the event on a right sidebar. 

to the left there are two buttons. The top right button will open the qr scanner/webcam for check in that will grab the volunteers name and volunteer ID that will then switch that use to being checked in on the list. while the lower button will open the announcement/chat section that will allow for instant communication to other admin/volunteers on the application at that moment. 

#### Volunteer:
Volunteer has been sent to this application to register for the non-profit’s event. After registering, the volunteer will be assigned a QR with their information for check-in. On the day of check in the volunteer will display OR to Admin for quick check-in

in the volunteer page will display the assigned QR code and a chat/announce section for communication with the team.

### Wireframes:
![login](https://github.com/Zaidwerd/StepForward/blob/master/screenshots/Screen%20Shot%202016-12-06%20at%2011.09.00%20AM.png)

![Admin App](https://github.com/Zaidwerd/StepForward/blob/master/screenshots/Screen%20Shot%202016-12-06%20at%2010.57.05%20AM.png)

![Volunteer App Web](https://github.com/Zaidwerd/StepForward/blob/master/screenshots/Screen%20Shot%202016-12-06%20at%2011.01.46%20AM.png)

![Volunteer App Mobile](https://github.com/Zaidwerd/StepForward/blob/master/screenshots/Screen%20Shot%202016-12-06%20at%2011.58.22%20AM.png)

### Time Table:

![TimeTable](https://github.com/Zaidwerd/StepForward/blob/master/screenshots/Screen%20Shot%202016-12-06%20at%2012.16.31%20PM.png)

### Key Challenges: 
* User Auth
  Still not comfortable with the idea of tokens and how they are passed and fetched
* Socket io
  This is new technology I am unfamiliar with and will take some time to understand and implement
* Webcam QR scan
  Getting Webcam QR scan to work properly. Again new tech

### Special Thanks:
* JodusNodus at https://github.com/JodusNodus/react-qr-reader for the qr scan implimentation code.
* Donald Highe, Sang Min, Synclair Wang and Nico Cucciniello at https://github.com/ga-diamonds-project3/project-3 for helping understand and impliment Socket IO
