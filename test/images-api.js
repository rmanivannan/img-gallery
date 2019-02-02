'use strict'

let chalet chaiHttp = require('chai-http');
i = require('chai');
let server = require('../server');
let should = chai.should();

//import {expect} from 'chai'
chai.use(chaiHttp);

describe('Image Upload App', () => {
    /*beforeEach((done) => {
        server.remove({}, (err) => { 
           done();           
        });        
    });*/
    describe('/GET imagses', () => {
        it('it should GET all the images', (done) => {
            chai.request(server)
                .get('/images')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an('object');
                    res.body.images.should.be.an('array');
                    done();
                }); 
        });
    });

    describe('/POST imagse', () => {
        it('it should POST image', (done) => {
            chai.request(server)
                .post('/image')
                .set('content-type', 'application/json')
                .send({ base64Val: 'test', fileType: 'image/jpg', fileName: 'mm.jpg' })
                .end((err, res) => {
                    res.should.have.status(201);
                    done();
                });
        });
        it('it should not POST image with psd file format', (done) => {
            chai.request(server)
                .post('/image')
                .set('content-type', 'application/json')
                .send({ base64Val: 'test', fileType: 'image/psd', fileName: 'mm.psd' })
                .end((err, res) => {
                    res.should.have.status(400);
                    done();
                });
        });
    });

});