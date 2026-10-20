const {test, expect} = require("@playwright/test")
test.beforeEach(()=>{
    console.log("Login into the Application Successfully")
})
 
test. afterEach(()=>{
    console.log("Logout from the Application Successfully")
})
test.describe("Sanity Test cases",()=>{
 
    test("first Sanity Test",async()=>{
        console.log("It is a First Sanity Test case")
    })
 
    test("Second Sanity Test",async()=>{
        console.log("It is a Second Sanity Test case")
    })
 
    test("Third Sanity Test",async()=>{
        console.log("It is a Third Sanity Test case")
    })
})
 
test.describe("Regression Test cases",()=>{
 
    test("first Regression Test",async()=>{
        console.log("It is a First Regression Test case")
    })
 
    test("Second Regression Test",async()=>{
        console.log("It is a Second Regression Test case")
    })
 
    test("Third Regression Test",async()=>{
        console.log("It is a Third Regression Test case")
    })
})
 
 
test.describe("API Test cases",()=>{
 
    test("first API Test",async()=>{
        console.log("It is a First API Test case")
    })
 
    test("Second API Test",async()=>{
        console.log("It is a Second API Test case")
    })
 
    test("Third API Test",async()=>{
        console.log("It is a Third API Test case")
    })
})
 