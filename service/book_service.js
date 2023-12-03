const book_model = require('../model/book_model');


exports.create_book = async (book_info) => {


  const my_new_book = new book_model(book_info);


  return await my_new_book.save();


};


exports.get_all_book = async () => {


  return await book_model.find();


};


exports.get_book_id = async (my_book_id) => {


  return await book_model.findById(my_book_id);


};


exports.srch_book = async (title, author) => {



  const qstn = {};


  if (title) {

    qstn.title = { $regex: new RegExp(title), $options: 'g' }; 


  }


  if (author) {


    qstn.author = { $regex: new RegExp(author), $options: 'g' }; 


  }return await book_model.find(qstn);


};


exports.chnge_book = async (my_book_id, chnge_info) => {


  return await book_model.findByIdAndUpdate(my_book_id, chnge_info, { new: true });


};


exports.del_book = async (my_book_id) => {


  return await book_model.findByIdAndDelete(my_book_id);

  
};
