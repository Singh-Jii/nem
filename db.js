const mongo = require('mongoose');


const my_connection = async () => {


  try {


    await mongo.connect('mongodb://localhost:27017/nem', {


      useNewUrlParser: true,


      useUnifiedTopology: true,


    });


    console.log('database connected');


  } 
  
  
  catch (er) {


    console.log(er);


    throw er;


  }


};


module.exports = { my_connection };
