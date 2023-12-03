const exp = require('express');


const my_route = exp.Router();

const book_control = require('../control/book_control');


my_route.post('/books', book_control.create_book);


my_route.get('/books', book_control.get_all_book);

my_route.get('/books/:id', book_control.get_book_id);


my_route.get('/books/search', book_control.srch_book);


my_route.put('/books/:id', book_control.chnge_book);

my_route.delete('/books/:id', book_control.del_book);


module.exports = my_route;
