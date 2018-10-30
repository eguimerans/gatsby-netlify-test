exports.handler = function(event, context, callback) {

  console.log('-------------- init deploy-succeeded --------------------')

  var eventStr = JSON.stringify(event);
  var contextStr = JSON.stringify(context);

  console.log('event: ' + eventStr)
  console.log('context' + contextStr)

  var request = require('request');

/*
  request.post(
      'https://' + process.env.STASH_USER + ':' + process.env.STASH_PASSWORD + '@stash.devpv.com/rest/build-status/1.0/commits/3a799cbe29fdf1776d0f73a878e26d1fd6a6425e',
      { json: {
        "state": "SUCCESSFUL",
         "key": "sites-testing",
         "name": "sites-testing",
         "url": "http://app.io/bla",
         "description": "bla bla blain progress..."
       } },
       function (error, response, body) {
           if (!error && response.statusCode >= 200) { // might return 204
               console.log('body: ' + JSON.stringify(body))
               console.log('response: ' + JSON.stringify(response))
           } else {
               console.log('error: ' + JSON.stringify(error))
               console.log('response error: ' + JSON.stringify(response))
               console.log('body error: ' + JSON.stringify(body))
           }
       }
  );

  callback(null, {
    statusCode: 200,
    body: "Hello, World"
  });
*7
  console.log('-------------- end deploy-succeeded --------------------')
}
