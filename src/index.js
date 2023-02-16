const express = require('express')
const bodyParser = require('body-parser')

const {PORT} = require('./config/serverConfig')

const {EMAIL_PASS,EMAIL_ID} = require('./config/serverConfig')

const {sendBasicEmail} = require('./services/email-service')

console.log(EMAIL_ID,EMAIL_PASS)

const setupAndStartServer = () =>{
    const app = express();
     
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))
   
    app.listen(PORT,()=>{
        console.log(`Server started successfully ${PORT}`);
        //myselfpankajsuryavanshi@gmail.com

        sendBasicEmail(
            'myselfpankajsuryavanshi@gmail.com',
            'moviebookingappservice@gmail.com',
            'This is a testing email',
            'Hey, how are you, I hope you like the support'
        )
   
    });

}

setupAndStartServer();