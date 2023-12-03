const mongo = require('mongoose');


const my_book_schema = new mongo.Schema({


  title: { 
    
    type: String, 
    
    
    required: true 
  
  
  },


  author: { 
    
    
    type: String, 
    
    required: true 
  
  
  },


  ISBN: { 
    
    
    type: String, 
    
    
    required: true 
  
  
  },


  description: { 
    
    
    type: String 
  
  
  },


  publishedDate: { 
    
    
    type: Date 
  
  
  },


});


const book_model = mongo.model('Book', my_book_schema);


module.exports = book_model;
