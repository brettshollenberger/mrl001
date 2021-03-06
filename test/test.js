var should = require('should'); 
var assert = require('assert');
var request = require('supertest'); 
var session = require('superagent');  
var mongoose = require('mongoose');
var winston = require('winston');


var env = process.env.NODE_ENV || 'development',
    config = require('./../server/config/config')[env],
    standardReponse = require('./../server/config/middlewares/response'),
    mongoose = require('mongoose');

 
describe('Routing', function() {
  var url = '127.0.0.1:3000';
  var api = url + '/api/v1'
  // within before() you can run all the operations that are needed 
  // to setup your tests. In this case
  // I want to create a connection with the database, and when I'm done, I call done().
  before(function(done) {
    // In our tests we use the test db
    mongoose.connect(config.db);                            
    done();
  });
  
  describe('CSRF Attacks', function() {
    it('should block internal API POST requests without a CSRF token', function(done) {
     
     
        // @note we use post here because get requests are not protected by csrf
        // not sure why this is
        request(api)
        .post('/ping')
        .end(function(err, res) {
              if (err) throw err;
              res.should.have.status(500);
              done();
        });
    });
    
    it('should allow POST requests with CSRF tokens', function() {
        
        var guestUser = session.agent();
        
        guestUser
        .post(api + '/ping')
        .end(function(err, res) {
        
              if (err) throw err;
              res.should.have.status(200);
              
              var body = {
                  email: 'test@test.com',
                  password: '1234'
              }
              
              guestUser
                .post(api + '/login')
                .send(body)
                .end(function(err, res) {
                
                    console.log(res);
                      if (err) throw err;
                      res.should.have.status(200);
                      done();
                });
              
        });
        
    })
    
  });
  
  // use describe to give a title to your test suite, in this case the tile is "Account"
  // and then specify a function in which we are going to declare all the tests
  // we want to run. Each test starts with the function it() and as a first argument 
  // we have to provide a meaningful title for it, whereas as the second argument we
  // specify a function that takes a single parameter, "done", that we will use 
  // to specify when our test is completed, and that's what makes easy
  // to perform async test!
  describe('Authorization', function() {
    it('should allow user to login to system', function(done) {
      var user = {
          email: 'bwalsh@marlinfinance.com',
          password: 'bwalsh'
      }
    // once we have specified the info we want to send to the server via POST verb,
    // we need to actually perform the action on the resource, in this case we want to 
    // POST on /api/profiles and we want to send some info
    // We do this using the request object, requiring supertest!
    request(api)
    .post('/login')
    .send(user)
    // end handles the response
    .end(function(err, res) {
          if (err) {
            throw err;
          }
          // this is should.js syntax, very clear
          res.should.have.status(200);
          done();
        });
    });
    it('should respond to PING with PONG', function(done){
    var body = {
        firstName: 'JP',
        lastName: 'Berd'
    };
    request(api)
        .put('/api/profiles/vgheri')
        .send(body)
        .expect('Content-Type', /json/)
        .expect(200) //Status code
        .end(function(err,res) {
            if (err) {
                throw err;
            }
            // Should.js fluent syntax applied
            res.body.should.have.property('_id');
                    res.body.firstName.should.equal('JP');
                    res.body.lastName.should.equal('Berd');                    
                    res.body.creationDate.should.not.equal(null);
            done();
        });
    });
  });
  
  
  describe('API interface', function() {
    it('should should return PING with PONG', function(done) {
     
    
        request(api)
        .post('/ping')
        // end handles the response
        .end(function(err, res) {
              if (err) {
                throw err;
              }
              // this is should.js syntax, very clear
              res.body.should.equal('PONG');
              done();
            });
        });
    
  });
  
});