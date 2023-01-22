const bodyParser = require('body-parser');
const request = require('request');
const express = require('express');
const app = express();
const https = require('node:https');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/signup.html');
});

app.post('/', (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        },
      }
    ]
  }

  const jsonData = JSON.stringify(data);
  
  const url = 'https://us21.api.mailchimp.com/3.0/lists/05b7a2466f';
  const options = {
    method: 'POST',
    auth: 'adam1:071c01e18d081ebd8e6f62428de36ac-us21'
  }

  const request = https.request(url, options, (response) => {
    response.statusCode === 200 ? res.sendFile(__dirname + '/success.html') : res.sendFile(__dirname + '/failure.html');
    response.on('data', (data) => {
      console.log(JSON.parse(data));
    });
  });
  request.write(jsonData);
  request.end();
})

app.post('/failure', (req, res) => {
  res.redirect('/');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port 3000');
});