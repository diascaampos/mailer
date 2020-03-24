const app               = require('express')();
const mailer            = require('express-mailer');
const bodyParser        = require('body-parser');

const port = 3005;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
 
mailer.extend(app, {
  from: process.env.MAILER_FROM,
  host: process.env.MAILER_HOST, // hostname
  secureConnection: process.env.MAILER_SECURE_CONNECTION === 'true', // use SSL
  port: process.env.MAILER_PORT, // port for secure SMTP
  transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
  auth: {
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASSWORD
  }
});

app.post('/', (req, res, next) => {
    app.mailer.send('email', {
      to: 'gleisson.assis@gmail.com', // REQUIRED. This can be a comma delimited string just like a normal email to field. 
      subject: req.body.subject, // REQUIRED.
      body: req.body.body // All additional properties are also passed to the template as local variables.
    }, function (err) {
      if (err) {
        // handle error
        console.log(err);
        res.send('There was an error sending the email');
        return;
      }
      res.send('Email Sent');
    });
  });

  app.listen(port, () => console.log(`Example app listening on port ${port}!`))
 