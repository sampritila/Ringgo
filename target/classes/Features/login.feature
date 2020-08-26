Feature: Ringgo Login 

Scenario: Ringgo Existing customer login

Given I am an exiting Ringgo customer
When try to login with valid credentials 
Then should be logged in 
Then user is on Home page
Then close the browser

Scenario: Book a parking session

Given I am inside the ringgo Application
When entered location and vehicle reg
Then should be in parking session page 
Then user is on pay page
Then user is on finish page
Then close the browser