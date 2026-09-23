const {test, expect} = require("@playwright/test")

test("Launch Browser and validate title and URL ", async ({page})=>{
    await page.goto("https://sgtestinginstituteapp.onrender.com/")
    await page.waitForTimeout(3000)

    await expect(page).toHaveURL("https://sgtestinginstituteapp.onrender.com/")
    await expect(page).toHaveTitle("S G Software Testing Institute")
})