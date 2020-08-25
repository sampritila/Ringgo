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
  "duration": 3450644579,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.try_to_login_with_valid_credentials()"
});
formatter.result({
  "duration": 1135472077,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.should_be_logged_in()"
});
formatter.result({
  "duration": 2006168275,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_Home_page()"
});
formatter.result({
  "duration": 5272547,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.close_the_browser()"
});
formatter.result({
  "duration": 90680406,
  "status": "passed"
});
});