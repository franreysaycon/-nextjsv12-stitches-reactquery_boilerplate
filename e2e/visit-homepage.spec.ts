import { test, expect } from "@playwright/test"

test("User visits homepage and page title is A fsaycon.dev Boilerplate and github name is visible", async ({
  page,
}) => {
  await page.goto("https://fsaycon-nextv12-stitches-boilerplate.netlify.app/")
  await expect(page).toHaveTitle("A fsaycon.dev Boilerplate")
  await expect(page.getByText("Franrey Anthony S. Saycon")).toBeVisible()
})
