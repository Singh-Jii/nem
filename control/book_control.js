const my_book_service = require('../service/book_service');


exports.create_book = async (request, response) => {



  try {


    const my_new_book = await my_book_service.create_book(request.body);


    response.status(201).json(my_new_book);


  } 
  
  
  catch (er) {


    response.status(500).json({ er: er.msg });


  }


};


exports.get_all_book = async (request, response) => {


  try {


    const my_books = await my_book_service.get_all_book();


    response.status(200).json(my_books);


  } 
  
  
  catch (er) {


    response.status(500).json({ er: er.msg });


  }


};


exports.get_book_id = async (request, response) => {


  try {


    const my_book = await my_book_service.get_book_id(request.params.id);


    if (!my_book) {


      response.status(404).json({ msg: 'Book not available' });


    } 
    
    
    else {


      response.status(200).json(my_book);


    }


  } 
  
  
  catch (er) {


    response.status(500).json({ er: er.msg });


  }


};


exports.srch_book = async (request, response) => {


  try {


    const { title, author } = request.query;


    const my_books = await my_book_service.srch_book(title, author);


    response.status(200).json(my_books);


  } 
  
  
  catch (er) {


    response.status(500).json({ er: er.msg });


  }


};



exports.chnge_book = async (request, response) => {



  try {


    const chnge_book = await my_book_service.chnge_book(request.params.id, request.body);


    if (!chnge_book) {


      response.status(404).json({ msg: 'Book not available' });


    } 
    

    else {


      response.status(200).json(chnge_book);


    }


  } 
  
  catch (er) {


    response.status(500).json({ er: er.msg });


  }


};

exports.del_book = async (request, response) => {


  try {


    const del_book = await my_book_service.del_book(request.params.id);


    if (!del_book) {


      response.status(404).json({ msg: 'Book not available' });


    } 
    
    
    else {


      response.status(204).send(); 


    }


  } 
  
  
  catch (er) {


    response.status(500).json({ er: er.msg });


  }

  
};
