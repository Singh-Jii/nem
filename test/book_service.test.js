const my_as = require('assert');

const mongo = require('mongoose');

const my_book_service = require('../service/book_service');

const book_model = require('../model/book_model');

describe('book_service', () => {


  before(async () => {

    await mongo.connection.dropDatabase();


  });


  it('create_new_book', async () => {


    const book_info = {

      title: 'Book',


      author: 'Author',

      ISBN: '1234567890',


      description: 'book description',


      publishedDate: '2023-02-05',


    };


    const my_new_book = await my_book_service.create_book(book_info);


    my_as.strictEqual(my_new_book.title, book_info.title);


    my_as.strictEqual(my_new_book.author, book_info.author);

    my_as.strictEqual(my_new_book.ISBN, book_info.ISBN);


    my_as.strictEqual(my_new_book.description, book_info.description);

    my_as.strictEqual(my_new_book.publishedDate.toISOString(), new Date(book_info.publishedDate).toISOString());


  });


  it('get_all_book', async () => {


    const my_books = await my_book_service.get_all_book();

    my_as.strictEqual(my_books.length, 1); 


  });


  it('get_single_book_by_id', async () => {


    const my_books = await my_book_service.get_all_book();


    const my_book_id = my_books[0]._id;

    const book_finding = await my_book_service.get_book_id(my_book_id);


    my_as.strictEqual(book_finding._id.toString(), my_book_id.toString());


  });


  it('srch_book', async () => {


    const title = 'Sample';


    const author = 'Author';


    const my_books = await my_book_service.srch_book(title, author);

    my_as.strictEqual(my_books.length, 1); 


  });


  it('chnge_book', async () => {


    const my_books = await my_book_service.get_all_book();


    const my_book_id = my_books[0]._id;


    const chnge_info = {


      title: 'Change Book Title',


    };


    const chnge_book = await my_book_service.chnge_book(my_book_id, chnge_info);

    my_as.strictEqual(chnge_book._id.toString(), my_book_id.toString());


    my_as.strictEqual(chnge_book.title, chnge_info.title);


  });


  it('delete_book', async () => {


    const my_books = await my_book_service.get_all_book();


    const my_book_id = my_books[0]._id;


    const del_book = await my_book_service.del_book(my_book_id);

    my_as.strictEqual(del_book._id.toString(), my_book_id.toString());


  });


});
