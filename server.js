const express = require('express');

const PORT = process.env.PORT || 3000;

// Create the app
let app = express();

// app.use(function(req, res, next){
//   if(req.headers['x-forwarded-proto'] === 'https')
//     next();
//   else
//     res.redirect('http://' + req.hostname + req.url);
// });

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}...`);
})
