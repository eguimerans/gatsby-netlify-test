import querystring from "querystring";

exports.handler = function(event, context, callback) {

  console.log('--')
  console.log('start new stuff')
  const params = querystring.parse(event.body);
  console.log(params)
  console.log(Object.keys(params))
  console.log('end new stuff')
  console.log('--')

}
