πππππππππβ€οΈβ€οΈππππππππππππππππππππππππππππππβ½β½πππΏπΏππ΄π΄π π π‘π‘π’π’π΅π΅π£π£π€π€β«β«βͺβͺπ₯π₯π§π§π¨π¨π©π©π¦π¦π¦πͺπͺπΆπΆπ·π·π²π²π

# LEC 13 : REMINDER SERVICE

## π΄ **Configuration**
1. created project - 
`npm init -y`
2. `npm i all + nodemailer` respective pavkage
3. created folder structure and start the server
4. create migrations and seeder
`npx sequelize init`
5. Model & Migration creation*
`npx sequelize model:generate --name Booking --attributes flightId:integer,userId:integer,status:enum`
6. Do Changes in Model & Migration
`npx sequelize db:migrate`
7. Check the DB -  ` show tables
desc tablename(us)`

## π΄ **SETUP**
1. Inside main index.js setup server
2. PORT set in serverConfig
3. script : start
4. setup git
5. install nodemailer / sandGrid / Twillo
6. Gmail β‘οΈ `https://myaccount.google.com/` β‘οΈ Two step Verfication below App Password select β‘οΈ 
7. Select Mail , ReminderService and click Generate
8. Copy app Password
9. env β‘οΈ EMAIL_PASS = password
10. nodemailer.createTransport()

Config 

``` javascript
const { EMAIL_ID, EMAIL_PASS } = require('./serverConfig');
console.log(EMAIL_ID, EMAIL_PASS);
const sender = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: EMAIL_ID,
        pass: EMAIL_PASS
    }
}); 
```
</br>



### **Node CRON**
- Schedule a job 


## β€οΈ **Requirement** :
Send email before 48 hours of flight 
Ex : 14 jan flight β‘οΈ send email 12 jan 


## β­ **Sequelize Setup**
1. `npx sequelize init`

2. `npx sequelize db:create`

3. ``` npx sequelize model:generate --name   NotificationTicket --attributes subject:string,
content:string,recipientEmail:string,status:enum,
notifcationTime:data ```
4.`npx sequelize db:migrate`
<style>
red { color: red }
yellow { color: yellow }
blue { color: blue }
</style>

<red> red color markdown text</red>
<yellow> red color markdown text</yellow>









