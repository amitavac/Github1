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
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cinput value\u003d\"Google Search\" aria-label\u003d\"Google Search\" name\u003d\"btnK\" type\u003d\"submit\" jsaction\u003d\"sf.chk\"\u003e is not clickable at point (432, 411). Other element would receive the click: \u003cb\u003e...\u003c/b\u003e\n  (Session info: chrome\u003d68.0.3440.106)\n  (Driver info: chromedriver\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.13.0\u0027, revision: \u00272f0d292\u0027, time: \u00272018-06-25T15:24:21.231Z\u0027\nSystem info: host: \u0027AMITAVAC\u0027, ip: \u0027192.168.0.101\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.40.565498 (ea082db3280dd6..., userDataDir: C:\\Users\\AMITAV~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 68.0.3440.106, webStorageEnabled: true, webdriver.remote.sessionid: d305297ee132db2c0c74f318a45...}\nSession ID: d305297ee132db2c0c74f318a45884c4\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:276)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat org.amitava.cucumberFramework.stepDefinations.SearchPageSteps.iEnterInSearchBox(SearchPageSteps.java:31)\r\n\tat ✽.I enter \"Amitava Chowdhury\" in search box(resources/features/Search.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I should see search result",
  "keyword": "Then "
});
formatter.match({
  "location": "ResultPageSteps.iShouldSeeSearchResult()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I verify results",
  "keyword": "And "
});
formatter.match({
  "location": "ResultPageSteps.iVerifyResults()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Search Something",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@124"
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
});