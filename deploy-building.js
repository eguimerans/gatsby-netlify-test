exports.handler = function(event, context, callback) {


  console.log('--> start deploy-building')
  console.log("after start something...");

  /* parse the string body into a useable JS object */
  const data = JSON.parse(event.body)
  console.log(data)
  console.log(Object.keys(data.payload));
  console.log(Object.keys(data.site));

console.log("commit (just in case) : " + data.commit_ref);
console.log("branch (just in case) : " + data.branch);



  // STASH_USER
  var stash_user = process.env.STASH_USER
  console.log('STASH_USER: ' + stash_user)
  // STASH_PASSWORD
  var shash_password = process.env.STASH_PASSWORD
  console.log('STASH_PASSWORD: ' + shash_password)
/*  //////////////
  // REPOSITORY_URL
  var repoURL = process.env.REPOSITORY_URL
  console.log('REPOSITORY_URL: ' + repoURL)
  // BRANCH
  var branch = process.env.BRANCH
  console.log('BRANCH: ' + branch)
  // pullRequest
  var pullRequest = process.env.PULL_REQUEST
  console.log('PULL_REQUEST: ' + pullRequest)
  // HEAD
  var head = process.env.HEAD
  console.log('HEAD: ' + head)
  // COMMIT_REF
  var commit_ref = process.env.COMMIT_REF
  console.log('COMMIT_REF: ' + commit_ref)
  // CONTEXT
  var context = process.env.CONTEXT
  console.log('CONTEXT: ' + context)
  // REVIEW_ID
  var review_id = process.env.REVIEW_ID
  console.log('REVIEW_ID: ' + review_id)
  ///////
  // URL
  var url = process.env.URL
  console.log('URL: ' + url)
  // DEPLOY_URL
  var deploy_url = process.env.DEPLOY_URL
  console.log('DEPLOY_URL: ' + deploy_url)
  // DEPLOY_PRIME_URL
  var deplooy_prime_url = process.env.DEPLOY_PRIME_URL
  console.log('DEPLOY_PRIME_URL: ' + deplooy_prime_url)

  ////////
  // // WEBHOOK_TITLE
  // var webhook_title = process.env.WEBHOOK_TITLE
  // console.log('WEBHOOK_TITLE: ' + webhook_title)
  // // WEBHOOK_URL
  // var webhook_url = process.env.WEBHOOK_URL
  // console.log('WEBHOOK_URL: ' + webhook_url)
  // // WEBHOOK_BODY
  // var webhook_body = process.env.WEBHOOK_BODY
  // console.log('WEBHOOK_BODY: ' + webhook_body)
  /////
  /////
  var eventStr = JSON.stringify(event);
  var contextStr = JSON.stringify(context);
  console.log('event: ' + eventStr)
  console.log('context' + contextStr)

  var commit_ref_2 = event.commit_ref;
  var branch = event.branch;
  console.log('commit (from event object): ' + commit_ref_2)
  console.log('branch (from event object): ' + branch)

  var request = require('request');

/*
  request.post(
      'https://' + process.env.STASH_USER + ':' + process.env.STASH_PASSWORD + '@stash.devpv.com/rest/build-status/1.0/commits/3a799cbe29fdf1776d0f73a878e26d1fd6a6425e',
      { json: {
        "state": "INPROGRESS",
         "key": "sites-testing",
         "name": "sites-testing",
         "url": "http://app.io/bla",
         "description": "bla bla blain progress..."
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

  callback(null, {
    statusCode: 200,
    body: "Hello, World"
  });

*/
  console.log('--> end deploy-building')

}
