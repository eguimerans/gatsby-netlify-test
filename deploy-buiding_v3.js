exports.handler = function(event, context, callback) {


var request = require('request');

request.post(
    'https://bitrise:&7Mj=YKRbHH&C-D@stash.devpv.com/rest/build-status/1.0/commits/3a799cbe29fdf1776d0f73a878e26d1fd6a6425e',
    { json: {
      "state": "INPROGRESS",
       "key": "sites-testing-66",
       "name": "sites-testing-66",
       "url": "https://app.io/build/42e15042e22ee19b",
       "description": "bla bla blain progress..."
     } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);

  callback(null, {
    statusCode: 200,
    body: "Hello, World" + "hola"
  });
}
