____# Diplomska naloga 

For demos please see https://diplomska-angular2.herokuapp.com/ (not working yet).

## Installation

First you will need to have Node and npm installed on your computer
```
https://nodejs.org/en/download/
```

Once thats done clone or download this repository.

Next navigate to this project via terminal and run.

```
npm install
```

After all the dependencies are installed you will need to install mongoDb from

###Mongo
```
https://www.mongodb.com/download-center#community
```
If you dont want to have mongo instaled on you local machine you could use services like mongoLab or something similar.
If tou chose the cloud based option tou will need to change 
```
mongoose.connect('localhost:27017/diploma'); (diploma = database name)
```
to
```
mongoose.connect('your service');
```

after everything is installed run 
```
mongoose.connect('your service');
```
if you instaled mongo localy navigate to
```
<PATH>/mongo/bin and run mongod (server)
```
if you used a service you can skip this step.

### Node server, Webpack and gulp
Open 3 new terminal windows and run
start node server
```
npm start
```
or
```
npm run dev
```
to run node in watch mode

compiles .scss files to .css
```
npm run scss
```
runs webpack in watch mode
```
npm run build
```

runs the script for view page (where you can see finished solution)
```
npm run view
```
