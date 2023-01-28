---
title: Connect MongoDB with Node js
description: This article on scaler topics is about how to Connect MongoDB with Node js.
canonicalURL: https://www.quedemy.com/blogs/connect-mongodb-with-node-js/
coverImage: ../blog-images/blog-cover-default.png
slug: connect-mongodb-with-node-js0
date: hee
category:
 - nodejs
 - mongodb
author: Arun Pratap Singh
---

## Overview
**`MongoDB`** is a NoSQL database for nodejs. We will use MongoDB driver for nodejs to manage MongoDB database. MongoDB uses binary JSON to store data. We will also use the **`mongoose tool`** to connect MongoDB with Node js and manage the database (i.e. create, read, update, and delete documents). Alike traditional databases, MongoDB is easy to use and saves time.

## Scope
In this article we’ll learn:
- What is MongoDB and how to install the **`mongodb`** nodejs driver?
- How to connect MongoDB with node js application using the **`mongodb`** nodejs driver?
- How to add and update documents in the MongoDB database?
- How to connect with the MongoDB database and save a document in the MongoDB database using mongoose?

## Pre-requisites
- Basic understanding of relational databases like SQL.
- Good understanding of javascript, objects, and data-types.
- Nodejs and MongoDB database must be installed on your system.
- Path for nodejs and MongoDB must be added to the **`PATH`** environment variable.

## Introduction
Consider, We have a table schema defined in a relational database as shown below. We can not insert new data into the table that contains the new field **`phoneNumber`**. Because Field **`phoneNumber`** is not defined in the table schema.

```sql
+---------------+--------------+------+-----+---------+
| Field         | Type         | Null | Key | Default |
+---------------+--------------+------+-----+---------+
| id            | int          | NO   | PRI | NULL    |
| firstName     | varchar(255) | YES  |     | NULL    |
| lastName      | varchar(255) | YES  |     | NULL    |
+---------------+--------------+------+-----+---------+
```

But, MongoDB doesn't need a pre-defined schema. We can insert new data in the object format with any additional fields. MongoDB store data as a document shown below:  

```json
// document 1
{
    id:'1',
    firstName:'Suhani',
    lastName:'Singh'
}

// document 2
{
    id:'2',
    firstName:'Modi',
    lastName:'Kumar',
    phoneNumber:'+91999999'
}

// document 3
{
    id:'3',
    email:'ambesh@example.com',
    firstName:'Ambesh',
    lastName:'Yadav',
    phoneNumber:['+9199999999','+9199999999'],
}
```

Therefore, MongoDB is different from relational databases. It comes in the category of NoSQL databases that uses **`JSON-like format`** to store documents. Relational database use table, raw, and column to store the data while NoSql Databases uses collection, and documents to store the data. the collection contains documents and documents store the data in object format.

## Install the MongoDB Node.js Driver
- Create a new file named **`mongodb-nodejs`** and go to the current folder **`mongodb-nodejs`** with CLI (Command Line Interface) as shown below:

```bash
mkdir mongodb-nodejs
cd mongodb-nodejs
```

- Create a new node project with npm that add the **`package.json`** file inside **`mongodb-nodejs`** folder 

```bash
npm init -y
```
- Install the **`mongodb`** driver for nodejs to use the MongoDB database with nodejs

```bash
npm install mongodb --save
```

- **`mongodb`** driver helps us to connect and easily manage queries in MongoDB with nodejs.
*Note:** In this article, We are using Nodejs version **`16.17.0`** and mongodb nodejs driver version **`6.0.2`**. We can check the current version of nodejs using the command mongod --version and MongoDB nodejs driver using the command node --version.

## Connecting to The Local MongoDB Database

- We will define a path to store data for MongoDB on the local machine. We will add the path **`C:\Program Files\MongoDB\data\db`**. Also, We make sure that the specified path/folder exists.

```bash
mongod --dbpath 'C:\Program Files\MongoDB\data\db'
```

- In the above code block, We are using **`--dbpath`** to add a path for the MongoDB database and start the server locally.

### Configuring The MongoDB Node.js Connection

- Create a file named **`server.js`** and add the following code to the **`server.js`** file

```js
const { MongoClient } = require('mongodb')

// Create Instance of MongoClient for mongodb
const client = new MongoClient('mongodb://localhost:27017')

// Connect to database
client.connect()
    .then(() => console.log('Connected Successfully'))
    .catch(error => console.log('Failed to connect', error))

```
- Run the **`node server.js`** command and We will see the following output
```bash
$ node server.js
Connected Successfully!
```

### Closing The Connection
- We will replace the previous code of the **`server.js`** file with the following code:
```javascript
const { MongoClient } = require('mongodb')

// Create Instance of MongoClient for mongodb
const client = new MongoClient('mongodb://localhost:27017')

// Connect to database
client.connect()
    .then(() => {
        console.log('Connected Successfully!')
        
        //Close the database connection
        console.log('Exiting..')
        client.close()
    })
    .catch(error => console.log('Failed to connect!', error))
```
- In the above code block, We are using the **`close()`** method to disconnect the database from the node app.
- Node app will exit from the MongoDB instance after connecting the node to the database.
- Run node **`server.js`**

```bash
$ node server.js
Connected Successfully!
Exiting..
```

## Example
- First, We will install the following npm packages:
    - **Nodemon:** It watches file changes in nodejs and restarts the node app if any changes happen to files. We will install nodemon using the command **`npm install nodemon --save-dev`**.
    - **Express:** It is a nodejs framework that helps to build node APIs. We will install express using the command **`npm install express --save`**.
    - **Mongoose:** It is a Tool for the MongoDB database. It helps to create schema, model, and manage database queries for MongoDB. We will install mongoose using the command **`npm install mongoose --save`**.
    - **Bodyparser:** It will parse the data that is coming from the HTML body. We will install body-parser using the command **`npm install body-parser --save`**.

- We will follow the file structure to create files and folders as shown below:
```json
mongodb-nodejs/
├─ public/
│  ├─ index.html
├─ index.js
├─ package.json
└─ server.js
``` 
- In **`package.json`**, We will add the **`start`** property to **`scripts`**.

```json
"scripts": {
    "start": "nodemon index.js",
  }
```
- We will require all modules to **`index.js`** file as shown below:

```javascript
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
```

- We will listen to the express app at local port **`4000`** and add the following code to the index.js file
```javascript
const app = express()
app.listen(4000, (res) => {
    console.log('Listening on port 4000')
})
```

- We will add the following code to **`index.html`**. It is a simple student form that will get the data from the web and store the data in the local MongoDB database.

```pug
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content=
			"width=device-width, initial-scale=1.0">
	<title>Student Form</title>
</head>
<body>
	<form action="/student" method="post">
		<input type="text" placeholder="Enter Your Name" name="name">
		<input type="text" placeholder="Enter Your Email" name="email">
		<button type="submit">Submit</button>
	</form>
</body>
</html>
```
- In the above code block, We are using the action and method attribute in the form tag. action attribute sends the data to the server and the method attribute tells whether it is a POST request or GET request.
- We will tell express to serve the **`index.html`** on local port **`4000`** and use the body-parser to get the data from the HTTP request in a proper format. 

```javascript
app.use(express.static(`${__dirname}/public`))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
})) 
```

- In the above code block, We are enabling middlewares with the help of the **`use()`** method of the express app. We are using the **`static()`** method to add a path for static files.
- We need a database to store the data. Hence, We will connect the local MongoDB database using the **`connect()`** method of mongoose.

```javascript
mongoose.connect('mongodb://localhost:27017/students')
```

- In the above code block, We pass the database URL that creates the collection name students if it doesn't exist.
- We will create and validate the schema using the **`Schema()`** method of mongoose. We will also create a model using the **`model()`** method of mongoose. 

```javascript
const studentSchema = new mongoose.Schema({
    name: String,
    email: String
})
const Student = mongoose.model('Student', studentSchema)
```
- We will use the **`post()`** method of the express app to serve the HTTP request POST to the /student route.

```javascript
app.post('/student', (req, res) => {
    let student = new Student(req.body);
    student.save()
        .then(doc => {
            res.send(doc)
            console.log(doc)
        })
        .catch(err => console.log(err))
})
```
- Now, We will go to the URL **`http://localhost:4000/`** and fill out the student form.

![URL](https://scaler.com/topics/images/url.webp) 

- When we hit submit button, It will store the student data in the local MongoDB database and navigate to the **`http://localhost:4000/student`** URL and display the output as shown below:

```json
{
  "name": "abc",
  "email": "abc@example.com",
  "_id": "635a46cf9e89ce7cd5e1473f",
  "__v": 0
}
```

- We will use the **`get()`** method to fetch all the students from the local MongoDB database.
```javascript
// Get all students
app.get('/students', (req, res) => {
    Student.find({})
        .then(docs => {
            console.log(docs)
            res.json(docs)
        })
        .catch(err => console.log(err))
})
```


- In the above code block, We are using the **`find()`** method to retrieve students' data. When we hit the URL **`http://localhost:4000/students`**, It will display the output as shown below:

```json
[
  {
    "_id": "635a4a55b9e33f7ab6e09ed4",
    "name": "abc",
    "email": "abc@example.com",
    "__v": 0
  },
  {
    "_id": "635a4a8dc7824ed2d957b882",
    "name": "xyz",
    "email": "xyz@example.com",
    "__v": 0
  },
  {
    "_id": "635a4b2e0c67336d6d866ca1",
    "name": "hi",
    "email": "hi@example.com",
    "__v": 0
  }
]
```

## Insert Documents
```javascript
const { MongoClient } = require('mongodb')

// Create Instance of MongoClient for mongodb
const client = new MongoClient('mongodb://localhost:27017')

// Insert to database
client.db('students').collection('students').insertOne({
    name: 'Amyport',
    email: 'Amyport@example.com'
})
    .then((res) => {
        console.log(res)
        client.close()
    })
    .catch((err) => console.log(err))
```

## Update/Delete Documents

```javascript
const { MongoClient } = require('mongodb')

// Create Instance of MongoClient for mongodb
const client = new MongoClient('mongodb://localhost:27017')

// Insert to database
client.db('students').collection('students')
    .updateOne({ name: 'Amyporter' },
        {
            $set:
                { email: 'Amyporter12@example.com' }
        })
    .then((res) => {
        console.log(res)
        client.close()
    })
    .catch((err) => console.log(err))

```
- In the above code block, We are using the **`updateOne()`** method to select the student using name or email and update it with the **`$set`** variable 

```javascript
const { MongoClient } = require('mongodb')

// Create Instance of MongoClient for mongodb
const client = new MongoClient('mongodb://localhost:27017')

// Insert to database
client.db('students').collection('students')
    .deleteOne({ name: 'Amyporter' })
    .then((res) => {
        console.log(res)
        client.close()
    })
    .catch((err) => console.log(err))

```
- In the above code block, We are using the **`deleteOne()`** method to select the student using name or email and delete it. 

## Mongoose
- Mongoose is an **`ODM(Object Data Modeling)`** tool that helps to define the model based on the schema. A schema is a kind of structure that defines how we can store data in the database. It helps us to validate types like objects, strings, booleans, numbers, etc.
- Consider, We want to make a list of npm libraries, then we will use the following format to store information in the database.

```javascript
const npmSchema = {
    id:'',
    packageName:'',
    homePage:'',
    repository:''
}
```

- In this way, We can store data in the MongoDB database but it is not validated. Hence, We use **`mongoose`** to define a schema, validate data and create a model as shown below

```javascript
// Define schema and validate using mongoose
const npmList = new mongoose.Schema({
    id: { type: Number },
    packageName: { type: String },
    homePage: { type: String },
    repository: { type: String }
})

// Create model for schema `npmList` using mongoose
const NpmList = mongoose.model('NpmList', npmList)
``` 

- **`mongoose`** map our JSON data with the mongoose model, validate the data with a defined schema, and interacts with the MongoDB database with available methods in **`mongoose`**.

## Conclusion
- MongoDB is a NoSQL database that uses collection and documents to store data.
- mongodb driver for nodejs helps to connect and interact with the MongoDB database for nodejs.
- We can install the mongodb driver for nodejs using the npm library.
- We use **`MongoClient()`** to create a new instance of MongoDB.
- We use the **`connect()`** method of MongoClient to connect with the database.
- We can create, read, update and delete single/multiple documents in MongoDB.
- Mongoose use the **`Schema()`** method to define a schema, the type property to validate data-types, and the **`model()`** method to create a model.
- We can also manage documents in the MongoDB database using mongoose.
