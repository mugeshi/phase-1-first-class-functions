const chai = require("chai");
const spies = require("chai-spies");
chai.use(spies);

const expect = chai.expect;

// The receivesAFunction function
function receivesAFunction(callback) {
  // Call the callback function
  callback();
}

// The returnsANamedFunction function
function returnsANamedFunction() {
  // Define a named function and return it
  return function namedFunction() {
    console.log("This is a named function");
  };
}

// The returnsAnAnonymousFunction function
function returnsAnAnonymousFunction() {
  // Return an anonymous function
  return function() {
    console.log("This is an anonymous function");
  };
}

describe("index", () => {
  describe("receivesAFunction(callback)", () => {
    it("receives a function and calls it", () => {
      const spy = chai.spy();

      receivesAFunction(spy);

      expect(spy).to.have.been.called();
    });
  });

  describe("returnsANamedFunction()", () => {
    var fn;

    before(() => {
      fn = returnsANamedFunction();
    });

    it("returns a function", () => {
      expect(fn).to.be.a("function");
    });

    it("returns a named function", () => {
      expect(fn.name).not.to.eql("");
    });
  });

  describe("returnsAnAnonymousFunction()", () => {
    var fn;

    before(() => {
      fn = returnsAnAnonymousFunction();
    });

    it("returns a function", () => {
      expect(fn).to.be.a("function");
    });

    it("returns an anonymous function", () => {
      expect(fn.name).to.eql("");
    });
  });
});
