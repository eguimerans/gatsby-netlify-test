
import querystring from "querystring";

exports.handler = function(event, context, callback) {
  console.log('hoder')

  console.log('name: ' + event.queryStringParameters.name)
  console.log('phone: ' + event.queryStringParameters.phone)
  console.log('message: ' + event.queryStringParameters.message)

  var form = {
    Body: 'one text message from netlify...',
    From: '+18448231846',
    To: '+34634315274',
    StatusCallback: 'http://www.google.es'
  };

  var formData = querystring.stringify(form);
  var contentLength = formData.length;

  var request = require('request');

  request({
    headers: {
      'Content-Length': contentLength,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    uri: 'https://' + process.env.TWILIO_SID + ':' + process.env.TWILIO_TOKEN + '@api.twilio.com/2010-04-01/Accounts/' + process.env.TWILIO_SID + '/Messages.json',
    body: formData,
    method: 'POST'
  }, function (error, response, body) {
    if (!error && response.statusCode >= 200 && response.statusCode < 300) {
        console.log("sms looks good")
        console.log('body: ' + JSON.stringify(body))
        console.log('response: ' + JSON.stringify(response))
    } else {
        console.log('error: ' + JSON.stringify(error))
        console.log('response error: ' + JSON.stringify(response))
        console.log('body error: ' + JSON.stringify(body))
    }
  });

  callback(null, {
    statusCode: 200,
    body: "Everything looks fine :)"
  });

};
