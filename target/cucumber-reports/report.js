$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/sampathpritila/eclipse-workspace/Ringgo/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Ringgo Login",
  "description": "",
  "id": "ringgo-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Ringgo Existing customer login",
  "description": "",
  "id": "ringgo-login;ringgo-existing-customer-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am an exiting Ringgo customer",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "try to login with valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "should be logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.i_am_an_exiting_Ringgo_customer()"
});
formatter.result({
  "duration": 3838874991,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.try_to_login_with_valid_credentials()"
});
formatter.result({
  "duration": 1175070472,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.should_be_logged_in()"
});
formatter.result({
  "duration": 2632833510,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_Home_page()"
});
formatter.result({
  "duration": 4875231,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 92900969,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Book a parking session",
  "description": "",
  "id": "ringgo-login;book-a-parking-session",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I am inside the ringgo Application",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "entered location and vehicle reg",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "should be in parking session page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user is on pay page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user is on finish page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});