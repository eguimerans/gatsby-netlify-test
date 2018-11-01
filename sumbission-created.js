exports.handler = function(event, context, callback) {

  /* parse the string body into a useable JS object */
  const data = JSON.parse(event.body)
  console.log(data)
  console.log(Object.keys(data.payload));
  console.log(Object.keys(data.site));

  const commit = data.payload.commit_ref;
  const branch = data.payload.branch;

  // do your stuff with variables...
  //...

}
