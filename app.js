const express = require("express");
const ejs = require("ejs");
const bodyparser = require("body-parser");

const app = express();
const nodemailer = require('nodemailer');
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended: true}));
app.set('view engine', 'ejs');


app.route("/")
.get((req, res)=>{

    res.render("home", {title: "Home Page"})
})
.post((req, res)=>{
        // const email = req.body.email;
        // const fullName = req.body.name;
        // const subject = req.body.subject;
        // const message = req.body.message;

        // const mObject = [email, fullName, subject, message];

        // console.log(mObject);

        // const transporter = nodemailer.createTransport({
        //   port: 465,
        //   host: "smtp.gmail.com",
        //   auth: {
        //     user: "getushahd@gmail.com",
        //     pass: "getabalew"
        //   },
        //   secure: true
        // });

        // const mailData = {
        //     from: 'getushahd@gmail.com',
        //     to: 'getushahd@gmail.com',
        //     subject: fullName+ " : "+ subject + " " + " from " + email,
        //     text: message
        // }

        // transporter.sendMail(mailData, (err, result)=>{
        //     if(err){
        //         console.log(err);
        //     } else{
        //         res.redirect("/");
        //     }
        // });
})
const PORT = process.env.PORT;

app.listen(process.env.PORT)