# Login.feature - Test Synopsis

This feature verifies the **login page functionality and validation logic** of the ProjectTSApp.  
It demonstrates **form interaction**, **environment variable usage**, **UI assertions**, **step-level screenshot capture**, and **error handling on failed steps**.

## Coverage

1. **Page Load & Title Check**: Confirms that the login page loads correctly and displays the expected page title.  
2. **Element Visibility Tests**: Verifies that the username field, password field, and login button are visible and enabled.  
3. **Validation Handling**: Tests messages when attempting login without input or with incorrect credentials.  
4. **Authentication Logic**: Checks behavior for wrong credentials and correct credentials (via `.env` variables).  
5. **Step-Level Screenshot Capture**: Automatically captures screenshots for any step that fails for better debugging.  

## Techniques Demonstrated

* Cucumber **BDD step definitions** (`Given`, `When`, `Then`) and `.feature` files  
* Page navigation using **Playwright** (`page.goto`)  
* DOM element interaction (`page.fill`, `page.click`, `page.isVisible`, `page.isEnabled`)  
* Assertions using **Chai** (`expect`)  
* Use of **environment variables** (`.env`) for sensitive data like credentials  
* Automatic screenshots on **step failure** via `AfterStep` hook  
* Scenario- and step-level organization in **Cucumber** for readable test flow  
* Headless browser execution with Playwright (`chromium.launch({ headless: true })`)  
