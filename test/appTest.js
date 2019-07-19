const assert = require('chai').assert;
const expect = require('chai').expect;

const app = require('../app');

//const sayHello = require('../app').sayHello;
//const addNumbers = require('../app').addNumbers;

//var assert=chai.assert;   for browser

// Results
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5, 5);

describe('App', function () {
  describe('sayHello()', function () {
    it('sayHello should return hello', function () {
      //let result = app.sayHello();
      assert.equal(sayHelloResult, 'hello');
    });

    it('sayHello should return type string', function () {
      //let result = app.sayHello();
      assert.typeOf(sayHelloResult, 'string');
    });
  });

  describe('addNumbers()', function () {
    it('addNumbers should be above 5', function () {
      //let result = app.addNumbers(5,5);
      assert.isAbove(addNumbersResult, 5);
    });

    it('addNumbers should return type number', function () {
      //let result = app.addNumbers(5,5);
      assert.typeOf(addNumbersResult, 'number');
    });
  });
  describe('user async func', function () {


    it('result should be 4', function () {
      expect(app.add(2, 2)).to.equal(4);
    });
    it.only('should return true if valid user id', function () { //mocha feature 
      app.isValidUserIdAsync(['rajat', 'shankar'], 'shank', function (isValid) {
        assert.equal(isValid, true);
        
        


      });


    })

  });


});