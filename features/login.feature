Feature: Login functionality
  As a user
  I want to login to the app
  So that I can access the dashboard

  Scenario: Load login page
    Given I open the login page
    Then I should see the page title "Login Page"

  Scenario: Username and password fields are visible
    Given I open the login page
    Then I should see the username field
    And I should see the password field

  Scenario: Login button is visible and enabled
    Given I open the login page
    Then I should see the login button enabled
    

  Scenario: Attempt login without input
    Given I open the login page
    When I click the login button
    Then I should see the message "Please enter both username and password."

  Scenario: Attempt login with wrong credentials
    Given I open the login page
    When I enter username "wrong" and password "wrongpass"
    And I click the login button
    Then I should see the message "Invalid credentials."

  Scenario: Login successfully
    Given I open the login page
    When I enter username "<USERNAME>" and password "<PASSWORD>"
    And I click the login button
    Then I should see the message "Login successful!"
