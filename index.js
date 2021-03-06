var express = require('express');
var app = express();
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));


app.post('/nodemail', function (req, res, next) {

    var nome = (req.body.nome);
    var email = (req.body.email);
    var empresa = (req.body.empresa);
    var intencao = (req.body.intencao);

    var transporter = nodemailer.createTransport(smtpTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: 'info@criptonomia.com',
            pass: '!InfoCriptonomia20'
        },
        tls: {
            rejectUnauthorized: false
        }
    }));
   
    transporter.sendMail({
        from: 'info@criptonomia.com',
        to: email,
        subject: "EVO Trading - Prospecção de clientes" , 
        text: "",
        html: "Olá, Antônio! <br><br> Tivemos uma intenção na pagina da EVO, segue informações: <br><br>Nome: " + nome +"<br>Email: " + email +"<br>Empresa: " + empresa +"<br>Intenção: " + intencao + "<br><br>Evo.trading"
    }, function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        console.log("Mail sent successfully");
        res.write("Mail sent successfully");
    });
});

app.listen(8080, function () {
    console.log("port listening");
    console.log('Server running at https://criptonomia-mailer:8080/');
});
