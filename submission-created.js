exports.handler = async (event, context) => {
  console.log('hoder')
  //console.log(event.queryStringParameters)

  const params = querystring.parse(event);
  console.log(params)

  var eventStr = JSON.stringify(event);
  console.log(eventStr)
  //var contextStr = JSON.stringify(context);
  //console.log('context' + contextStr)

  console.log('name: ' + event.queryStringParameters.name)
  console.log('phone: ' + event.queryStringParameters.phone)
  console.log('message: ' + event.queryStringParameters.message)

      request.post(
          'https://' + process.env.TWILIO_SID + ':' + process.env.TWILIO_TOKEN + '@api.twilio.com/2010-04-01/Accounts/' + process.env.SID + '/Messages.json',
          { json: {
            "body": 'McAvoy or Stewart? These timelines can get so confusing.',
            "from": '+18448231846',
            "statusCallback": 'http://postb.in/1234abcd',
            "to": '+34634315274'
           } },
          function (error, response, body) {
              if (!error && response.statusCode >= 200) {
                  console.log("sms looks good")
                  console.log('body: ' + JSON.stringify(body))
                  console.log('response: ' + JSON.stringify(response))
              } else {
                  console.log('error: ' + JSON.stringify(error))
                  console.log('response error: ' + JSON.stringify(response))
                  console.log('body error: ' + JSON.stringify(body))
              }
          }
      );

  return {
    statusCode: 200,
    body: "Hello, World"
  };
};
