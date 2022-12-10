# A Complete Guide To Get Started With Node - Node.js Essentials - part 1

## Prerequisites
<hr>

Basic understanding of Web Pages, API, DOM, JS Engine, and visual studio code


## What is Node.js?
<hr>

Before understanding Node.js, Let's take a quick review of javascript.

Javascript is a high-level programming language used by web browsers. Every web browsers use a js engine to execute javascript. For example, Chrome uses a V8 engine. These browsers use Web APIs to interact with web pages. But they are only limited to the browser. So, to overcome this problem Node.js comes into the picture.

Node.js uses the V8 engine provided by google and creates a runtime environment to execute javascript outside the browser. Therefore, you can use javascript on the client-side as well as server-side The following image shows the general difference between node.js and a typical browser


It doesn't end here. There are a number of modules available to help you complete the complex task. For example:

- **File APIs** to perform open, read and write on the file system.
- **HTTP requests** to request data from server.
- **Crypto** to secure data while saving it into the database.
- **Operating System Module** to get more information about the system.
- **External Libraries** 

So, Node.js is a program that creates an environment to execute javascript on any system that makes it more powerful.

## What Will You Learn?
<hr>

1. Setting Up Node.js
2. Node Core Modules
3. NPM Modules
4. Creating Web Apps (Express)
5. Deploy Code



### Setting Up Node.js
<hr>

- #### Write Your First Nodejs Program

Open the command-line tool and use the following command 👇

```
mkdir nodejs-app

cd nodejs-app

touch app.js

code .
``` 

Alternatively, you can create a folder `/nodejs-app` and open it with visual studio code. and create a `app.js` file inside `/nodejs-app` folder. See the image below for reference 👇

![Screenshot (298).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1647180417194/j-VyeGAO3.png)

Open app.js and write some code 👇

```
console.log("Hello Arun")
```
 
Open visual studio code terminal and run the following command 👇

```
node app.js
```

Voila! You did it 🏆

![Screenshot (300).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1647182955887/BMlKM_uFm.png)


- #### Command Line Arguments

Run the following command 👇

```
echo Hello Arun
```

In the above code, `echo` is used to print the string `Hello Arun`, and these strings are called arguments.

Node uses `process` API to collect these arguments. Write the following code in the app.js 👇

```
console.log(process.argv)
```

Now run command `node app.js`. and see what you got 👇
- Location of the node.exe file
- Location of the current file 


![Screenshot (301).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1647187361916/GM0lo83cw.png)

Again run command `node app.js value1 value2 value3` and you will get another 3 arguments i.e. value1, value2 and value3 👇

![Screenshot (302).png](https://cdn.hashnode.com/res/hashnode/image/upload/v1647189871656/CFkHMOV8r.png)

Now get your hands dirty. Write a program to add two numbers with the help of process.argv

[Click here to request for the solution](https://www.linkedin.com/in/ap-singh/)

// Modules

### OS Module and Environment
Create a file `/system.js` and add the following lines 

```
const os = require('os')
console.log(os.userInfo())
```

```
console.log(os.platform())
console.log(os.release())
console.log(os.cpus())

console.log(__dirname)
console.log(__filename)

console.log(process.env)
```
In command line tool, set environment variable

`export DATABASE_PASSWORD=password123`

console.log(process.env.DATABASE_PASSWORD)


### File System

Create a file `/file.js` and add the following lines 

```
const fs= require('fs')
```

```
const data =fs.readFileSync('system.js')
console.log(data.toString())

fs.writeFileSync('fine name', 'add file content')
fs.appendFileSync('fine name', 'add file content')

fs.copyFileSync('this file','into this file')

fs.copyFileSync('this file','into this file')

fs.renameSync('this file','into this file')

fs.unlinkSync('this file')

const dir= fs.readdirSync(__dirname)
console.log(dir)

fs.mkdirSync('file-system')
fs.renameSync('this file','file-system/into this file')

fs.watchFile('file-system/data.txt', callback)

```




### Events

const events = require('events')

let userLoggedIn =0 

const eventEmitter = new events.EventEmitter()

eventEmitter.on('userLoggedIn'.()=> {
//do something
})

### Net and HTTP Module

inside server.js
```
const net = require ('net')

const server = net.createServer()

server.listen({
host:'localhost',
port :8080,
})

server.on('connection',(client) =>{
console.log('Client connected')
})
```

inside client.js

```
const net= require('net')

const client = net.createConnection({
port:8080,
})
```

if you want to do simple task then node js http module is enough 
create `/web-server.js`

const http = require('http')

const server = http.createServer(
( request,result) => {
request.push()
result.writeHead(200,{'Content-Type':'text/html'})
result.end('<h1>Hello World</h1>')
})

server.listen(8080,'localhost')
### DNS Module

### Handling Errors

### Streams

### Crypto

### zlib Module

### Command Line Blog Project

### Introduction to NPM

### NPM Projects and package.json

### Semantic Versioning

### Common packages

### Creating Modules

### CLI Blog Revisited

### Introduction to ExpressJS

### Express Generator

### Express Basic Routing

### Express Additional Routing

### EJS templating

### Handlbars Templting

### Using Static Content

### Express Custom 404 Pages

### Express Blog

### Express Sessions

### MongoDB Setup

### Connect to MongoDB

### MongoDB Crud

### Passport Authentication

### Flash Messages

### Final Project 
-Setup
- Routes
- Templates
- Styling 
- Security
- Deployment


Reference: 
https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/