const mailer = require("nodemailer")

const transport = mailer.createTransport({
    service: "gmail",
    auth: {
        user: "vchangani156@rku.ac.in",
        pass: "dlchgjenaoyufsmh"
    }
});

module.exports.sendOtp = (to, otp) => {
    let mailOptn = {
        from: "vchangani156@rku.ac.in",
        to: to,
        subject: "Verification OPT",
        text: `Your verification OTP is ${otp}`
    }
    transport.sendMail(mailOptn, (err) => {
        console.log(err ? err : 'OTP send successfully')
    })
}

