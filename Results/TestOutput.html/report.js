$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("resources/features/Search.feature");
formatter.feature({
  "name": "Google Search",
  "description": "  Add Description",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Search Something",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@123"
    }
  ]
});
formatter.step({
  "name": "I am on google home page",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchPageSteps.iAmOnGoogleHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter \"Amitava Chowdhury\" in search box",
  "keyword": "When "
});
formatter.match({
  "location": "SearchPageSteps.iEnterInSearchBox(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see search result",
  "keyword": "Then "
});
formatter.match({
  "location": "ResultPageSteps.iShouldSeeSearchResult()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify results",
  "keyword": "And "
});
formatter.match({
  "location": "ResultPageSteps.iVerifyResults()"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat org.amitava.cucumberFramework.stepDefinations.ResultPageSteps.iVerifyResults(ResultPageSteps.java:19)\r\n\tat ✽.I verify results(resources/features/Search.feature:9)\r\n",
  "status": "pending"
});
});