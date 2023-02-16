const express = require('express')
const bodyParser = require('body-parser')

const {PORT} = require('./config/serverConfig')

const {EMAIL_PASS,EMAIL_ID} = require('./config/serverConfig')

console.log(EMAIL_ID,EMAIL_PASS)

const setupAndStartServer = () =>{
    const app = express();
     
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))
   
    app.listen(PORT,()=>{
        console.log(`Server started successfully ${PORT}`);
    });

}

setupAndStartServer();