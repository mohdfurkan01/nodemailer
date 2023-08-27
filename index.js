const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const ejs = require("ejs")
const path = require("path")

const port = process.env.port || 3000;

const app = express();
app.use(express.urlencoded({ extended: false }))
//set path
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'view'))

app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.render('index');
})

//app.post('/mail', async (req, res) => {
// app.post('/mail', async(to, subject, text) =>{
app.post('/scan',(req, res, from) => {
    let transpoter = nodemailer.createTransport({
  
            service: 'gmail',
        auth: {
            user: "ahsanraza991100@gmail.com",
            pass: "skdgdqolfclshvck"
        }
    })
res.render("scan",{
        id:form
    })    

    // let info = transpoter.sendMail({
    //     from:"ahsanraza991100@gmail.com",
    //     to:"ahsanraza991100@gmail.com",
    //     subject:"Just for check1",
    //     text:"Hello this is my message1"
    // })
    let info = transpoter.sendMail({
        from: "ahsanraza991100@gmail.com",
       // from: req.body.from,
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.text
    })
    // res.render("scan",{
    //     form
    // })
    
    //     console.log(info);
    // if (info) {
    //     res.render("message sent success");
    // } else {
    //     res.render('error occured')
    // }
    
        
    
    // if (info) {
    //     res.send("message sent success");
    // } else {
    //     res.send('error occured')
    // }

})
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
