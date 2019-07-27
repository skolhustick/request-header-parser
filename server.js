const express = require('express');
const app = express();
const accepts = require('accepts');

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/api/whoami', (req, res) => {
  // res.json(accepts(req).languages());
  const ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     (req.connection.socket ? req.connection.socket.remoteAddress : null);
  res.json({
    ipaddress: ip,
    language: req.headers["accept-language"],
    software: req.get('User-Agent')
  });

})


const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
