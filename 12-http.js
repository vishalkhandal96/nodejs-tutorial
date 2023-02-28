const http = require("http");

const server = http.createServer((request, response) => {
  //   console.log(request);
  //   response.write("Welcome to our home page");
  //   response.end();

  if (request.url === "/") {
    response.end("Welcome to out home page");
  } else if (request.url === "/about") {
    response.end("Here is our short history");
  } else {
    response.end(`<h1>Oops!</h1>
  <P>We can't seem to find the page you are looking for</P>
  <a href="/">back home</a>`);
  }
});

server.listen(5000);
