const express = require("express");
const path = require('path');
const router = express.Router();
const User = require('../models/User');
const nodemailer = require('nodemailer');
const notification = require('../models/Notification');

router.post('/sendEmail', (req, res, next) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: 'taillandproject@gmail.com', // generated ethereal user
            pass: 'tailland1111'  // generated ethereal password
        }
    });

    let mailOptions = {
        from: 'taillandproject@gmail.com', // sender address
        to: 'angelsirodey@gmail.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Is your turn', // plain text body
        html: 'Is your turn</b>' // html body
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Message sent: ' + info.response);
            res.redirect("/users/profile");
        }
    });

});

module.exports = router;
