exports.handler = function(event, context, callback) {

  console.log('--> start deploy-succeeded')

  /* parse the string body into a useable JS object */
  const data = JSON.parse(event.body)
  console.log(data)
  console.log(Object.keys(data.payload));
  console.log(Object.keys(data.site));

  const commit = data.payload.commit_ref;
  const branch = data.payload.branch;
  console.log("commit (just in case) : " + commit);
  console.log("branch (just in case) : " + branch);

  if (!commit) {
    console.log("The build has not triggered by PR; no bitbucket update is required...");
  } else {


  // STASH_USER
  var stash_user = process.env.STASH_USER
  console.log('STASH_USER: ' + stash_user)
  // STASH_PASSWORD
  var shash_password = process.env.STASH_PASSWORD
  console.log('STASH_PASSWORD: ' + shash_password)

  var review_url = data.payload.review_url;
  console.log('REVIEW_URL: ' + shash_password)

  var build_id = data.payload.build_id;
  console.log('BUILD_ID: ' + build_id)


  if (!stash_user || !stash_password) {
    console.log("Could not update bitbucket; STASH_USER or STASH_PASSWORD not defined in BUILD_ENVIRONMENTS")
    return;
  }

  const authenticationStr = stash_user + ':' + shash_password

  var request = require('request');

  request.post(
      'https://' + authenticationStr + '@stash.devpv.com/rest/build-status/1.0/commits/3a799cbe29fdf1776d0f73a878e26d1fd6a6425e',
      { json: {
        "state": "SUCCESSFUL",
         "key": "vista-sites" + "-" + branch,
         "name": "vista-sites" + " - ci - " + branch,
         "url": review_url,
         "description": "build #" + build_id + " successful at "
       } },
      function (error, response, body) {
          if (!error && response.statusCode >= 200) {
              console.log('body: ' + JSON.stringify(body))
              console.log('response: ' + JSON.stringify(response))
          } else {
              console.log('error: ' + JSON.stringify(error))
              console.log('response error: ' + JSON.stringify(response))
              console.log('body error: ' + JSON.stringify(body))
          }
      }
  );
/*
  var request = require('request');


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
*/
  console.log('--> end deploy-succeeded')
}
