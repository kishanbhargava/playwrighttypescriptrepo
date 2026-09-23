const {test, expect} = require("@playwright/test")

test("First Platwright test", function display(){
    console.log("it is a first playwrite test using named function!!")
})

test("second playwright test", function(){
    console.log("it is a first playwright test using anaymous function")
})

test("Third playwright test", function(){
    console.log("it is first playwright test using arrow function!!")
})