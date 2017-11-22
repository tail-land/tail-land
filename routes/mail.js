const express = require("express");
const path = require('path');
const router = express.Router();
const User = require('../models/User');
const nodemailer = require('nodemailer');
const notification = require('../models/Notification');
    
router.post('/sendEmail', (req, res, next) => {
    
    console.log('EMAILLLL')
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service:"Gmail",
            auth: {
                user: 'taillandproject@gmail.com', // generated ethereal user
                pass: 'tailland1111'  // generated ethereal password
            }
        });
    

            let mailOptions = {
                from: 'taillandproject@gmail.com', // sender address
                to: 'angelsirodey@gmail.com', // list of receivers
                subject: 'Hello ✔', // Subject line
                text: 'Hello world?', // plain text body
                html: '<b>Hello world?</b>' // html body
            };
            console.log(mailOptions)
            

            transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                  console.log(error);
                } else {
                  console.log('Message sent: ' + info.response);
                  res.redirect("/users/profile")
                }
              });

        })

    module.exports = router;