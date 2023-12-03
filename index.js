const exp = require('express');


const mongo = require('mongoose');


const bp = require('body-parser');


const my_cor = require('cors');


const my_book_route = require('./route/book_route');


const { my_connection } = require('./db');


const application = exp();


application.use(my_cor()); 


application.use(bp.json());


my_connection();


mongo.connect('mongodb://localhost:27017/nem', 


{ 
  
  useNewUrlParser: true, 
  
  useUnifiedTopology: true 


})


  .then(() => {


    console.log('database connected');


  })


  .catch((er) => {


    console.log(er);


  });


  application.use('/api', my_book_route);


  application.use((er, request, response, next) => {


  console.log(er.stack);


  response.status(500).json({ er: 'error' });


});


application.use((request, response) => {


  response.status(404).json({ er: 'Not Available' });


});


const my_port = process.env.my_port || 8000;


application.listen(my_port, () => {


  console.log(`${my_port}`);


});


module.exports = application;
