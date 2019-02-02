'use strict'

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
chai.use(chaiHttp);

describe('Image Upload App', () => {
    /*beforeEach((done) => {
        Book.remove({}, (err) => { 
           done();           
        });        
    });*/
  describe('/GET imagses', () => {
      it('it should GET all the images', (done) => {
        chai.request(server)
            .get('/images')
            .end((err, res) => {
                  res.should.have.status(200);
                  console.log(res.body);
              done();
            });
      });
  });

});