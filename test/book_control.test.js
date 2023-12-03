const my_req = require('supertest');


const application = require('../index');


describe('book_control', () => {


  let my_create_book_id;


  it('create_new_book', async () => {


    const my_res = await my_req(application)


      .post('/api/books')


      .send({


        title: 'Book',

        author: 'Author',


        ISBN: '1234567890',

        description: 'book description',

        publishedDate: '2023-02-05',


      });


    expect(my_res.statusCode).toBe(201);


    expect(my_res.body).toHaveProperty('_id');


    my_create_book_id = my_res.body._id;


  });


  it('get_all_book', async () => {


    const my_res = await my_req(application)


      .get('/api/books');

    expect(my_res.statusCode).toBe(200);


    expect(my_res.body).toBeInstanceOf(arr);


  });


  it('get_single_book_by_id', async () => {


    const my_res = await my_req(application)


      .get(`/api/books/${my_create_book_id}`);

    expect(my_res.statusCode).toBe(200);


    expect(my_res.body).toHaveProperty('_id', my_create_book_id);


  });


  it('srch_book', async () => {


    const my_res = await my_req(application)


      .get('/api/books/search')


      .query({ title: 'Sample', author: 'Author' });


    expect(my_res.statusCode).toBe(200);


    expect(my_res.body).toBeInstanceOf(arr);


  });


  it('chnge_book', async () => {


    const my_res = await my_req(application)


      .put(`/api/books/${my_create_book_id}`)

      .send({


        title: 'Change Book Title',


      });


    expect(my_res.statusCode).toBe(200);


    expect(my_res.body).toHaveProperty('_id', my_create_book_id);


    expect(my_res.body).toHaveProperty('title', 'Change Book Title');


  });

  it('delete_book', async () => {


    const my_res = await my_req(application)


      .delete(`/api/books/${my_create_book_id}`);


    expect(my_res.statusCode).toBe(204);


  });

  
});
