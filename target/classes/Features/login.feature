Feature: Ringgo Login 

Scenario: Ringgo Existing customer login

Given I am an exiting Ringgo customer
When try to login with valid credentials 
Then should be logged in 
Then user is on Home page
Then close the browser