var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;
/////////////////////////////////////////////////////////////////////////////////////
var requestHandler = function(request, response) {

  var parsedUrl = url.parse(request.url);
  //console.log(parsedUrl.pathname);
  if(parsedUrl.pathname=='/listings'){
    //console.log(parsedUrl.pathname);
    response.writeHead(200);
    response.write(JSON.stringify(listingData));
    response.end();
  }
  else{
      response.writeHead(404);
      response.write("Bad gateway error");
      response.end();
  }


//  if(parsedUrl.pathname=='/listings'){
//  response.end('hi');
//  }
  /*
    Your request handler should send listingData in the JSON format if a GET request
    is sent to the '/listings' path. Otherwise, it should send a 404 error.
    HINT: explore the request object and its properties
    http://stackoverflow.com/questions/17251553/nodejs-request-object-documentation
   */
};
//////////////////////////////////////////////////////////////////////////////////////
fs.readFile('listings.json', 'utf8', function(err, data) {


    listingData=JSON.parse(data);
  //  console.log(listingData);

  // a server is created, but not started
  var server = http.createServer(requestHandler);

  server.listen(port, function() {
    //once the server is listening, this callback function is executed
  //  console.log('Server listening on: http://127.0.0.1:' + port);
    console.log('Server listening on: http:localhost:' + port);
  });

  /*
    This callback function should save the data in the listingData variable,
    then start the server.
   */
});
