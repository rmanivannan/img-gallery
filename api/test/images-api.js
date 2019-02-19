'use strict'

let chaiHttp = require('chai-http');
let chai = require('chai');
let server = require('../server');
let sse = require('../sse');
let should = require('chai').should();

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
                .get('/api/images')
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
                .post('/api/image')
                .set('content-type', 'application/json')
                .send({ base64Val: 'test', fileType: 'image/jpg', fileName: 'mm.jpg' })
                .end((err, res) => {
                    res.should.have.status(201);
                    done();
                });
        });
        it('it should not POST image with psd file format', (done) => {
            chai.request(server)
                .post('/api/image')
                .set('content-type', 'application/json')
                .send({ base64Val: 'test', fileType: 'image/psd', fileName: 'mm.psd' })
                .end((err, res) => {
                    res.should.have.status(400);
                    done();
                });
        });

        it('it should not POST image with long file size file ', (done) => {
            var str = new Array((1024*1024*10) + 1).join( '.' );
            //console.log(str);
            chai.request(server)
                .post('/api/image')
                .set('content-type', 'application/json')
                .send({ base64Val: str, fileType: 'image/psd', fileName: 'mm.psd' })
                .end((err, res) => {
                    res.should.have.status(422);
                    done();
                });
        });
    });

});