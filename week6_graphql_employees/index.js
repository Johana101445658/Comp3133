const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8081

//Store sensetive information to env variables
const dotenv = require('dotenv');
dotenv.config();

/*
Install required dependencies:

dotenv
npm install dotenv

Apollo server
npm install apollo-server-express
*/

//import CORS, body parser and Apollo server for express
const bodyParser = require('body-parser');
const cors = require('cors');


//import GraphQL Schema and Resolvers

//create an instance of ApolloServer


//configure Express Server with CORS and body parser
app.use(bodyParser.json());
app.use('*', cors());

//TODO - Replace you Connection String here
//helper function to connect to MongoDB asychronously
const connectDB = async() => {
    try{
        console.log(`Attempting to connect to DB`);

        mongoose.connect(process.env.Mongo_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then( () => {
            console.log(`MongoDB connected`)
        }).catch( (err) => {
            console.log(`Error while connecting to MongoDB : ${JSON.stringify(err)}`)
        });
    }catch(error){
        console.log(`Unable to connect to DB : ${error.message}`);
        
    }
}

const startExpressServer = async() => {

    //connect to database
    connectDB()

    // Start the server before applying middleware
    

    //configure ApolloServer to use Express app middleware
    

    app.listen(PORT, () => {
        console.log(`The server started running at http://localhost:${PORT}`);
        
        console.log(`Press Ctrl+c to stop`);
    })
}

startExpressServer()
