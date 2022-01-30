var calc = require("../app/calculator")
console.log("testing that this all ran")

var assert = require('assert');



describe("add", function () {
    it("adds two numbers, it should equal 7",function(){
        assert.equal(calc.add(5,2), 7)
    } ) 
})

describe("add", function () {
    it("Adds two numbers, it should equal 8",function(){
        assert.equal(calc.add(5,2), 8)
    } )
})



describe("sub", function () {
    it("aubtracts two numbers, it should equal 3",function(){
        assert.equal(calc.sub(5,2), 3)
    } )
})
describe("sub", function () {
    it("aubtracts two numbers, it should equal 3",function(){
        assert.equal(calc.sub(5,2), 5)
    } )
})




describe("mul", function () {
    it("multiply two numbers, it should equal 10",function(){
        assert.equal(calc.mul(5,2), 10)
    } )
})
describe("mul", function () {
    it("multiply  two numbers, it should equal 10",function(){
        assert.equal(calc.mul(5,2), 12)
    } )
})

describe("div", function () {
    it("divide two numbers, it should equal 5",function(){
        assert.equal(calc.div(10,2), 5)
    } )
})
describe("div", function () {
    it("divide  two numbers, it should equal 5",function(){
        assert.equal(calc.div(10,2), 2)
    } )
})


// describe("add", calc.add(5,2) {

// })



