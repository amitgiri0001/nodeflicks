process.env.NODE_ENV = 'test';

const server = require(`../server/routes`);
const chai = require('chai');
const chai_http = require('chai-http');
const should = chai.should();
chai.use(chai_http);

describe('/GET flickr images', () => {
      it('it should GET all the images', (done) => {
        chai.request(server)
            .get('/feeds')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('title');
                done();
            });
      });
  });
