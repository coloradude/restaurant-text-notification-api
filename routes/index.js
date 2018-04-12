var express = require('express');
var router = express.Router();
var twilio = require('twilio');

/* GET home page. */
router.get('/:phone', function(req, res, next) {

  var accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
  var authToken = process.env.TWILIO_AUTH_TOKEN;   // Your Auth Token from www.twilio.com/console
  var client = new twilio(accountSid, authToken);

  client.messages.create({
      body: 'Your order is ready! Please come to the bar.',
      to: `+1${req.params.phone}`,  // Text this number
      from: '+17205864048 ' // From a valid Twilio number
  })
  .then((message) => {
    console.log(message)
    res.status(200).send(message).send()
  });
 
});

module.exports = router;
