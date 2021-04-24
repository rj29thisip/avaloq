# avaloq
Frontend: Apache2 (HTML+CSS)
   - version: v1.0
Backend: NodeJS (JavaScript)
   - version: v1.0
OS: Ubuntu 16.04

## Running Backend
1. Run nodejs app
   $npm start server.js
   > avaloq@1.0.0 start /opt/webui/avaloq
   > node server.js "server.js"
   DateInfo API version: v1.0 3000
   
2. Validate by checking running ports (should include 3000 - node)
   $netstat -apnut | grep LISTEN
   --OR--
   Curl nodejs app (should return JSON file w/ date info content)
   $curl http://localhost:3000/dateInfo

## Running Frontend
1. Place /public dir in the default apache2 document root or change your document to this path
2. Access in the browser 
   --OR--
   Curl frontend app (should return HTML xml)
   $curl http://localhost

## Frontend Results
1. Date, time, and timezone of the backend server will be displayed
2. Information will be updated real-time on each load / reload

