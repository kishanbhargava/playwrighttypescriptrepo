const {test, expect} = require('@playwright/test')

test("it is a first validation", ()=>{
    expect(45).toBe(45)
})

test("it is a second validation", ()=>{
    expect(75).toBeGreaterThan(50)
})

test("it is sixth validation", ()=>{
expect('JavaScript' === 'JavaScript').toBeTruthy()
})

test("it is seventh validation", ()=>{
expect("playwright automation" .startsWith).toBeTruthy()
})

test("it is eight validation", ()=>{
expect("playwright automation".startsWith("playwright")).toBeTruthy()
})

test.skip("it is nine validation", ()=>{
    expect("Welcome").toContain("Welcome")
})