package org.amitava.cucumberFramework.stepDefinations;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.amitava.cucumberFramework.core.ApplicationDriver;
import org.amitava.cucumberFramework.pageObjects.ResultPageObject;
import org.openqa.selenium.*;
//import org.openqa.selenium.WebElement;
import java.util.List;

public class ResultPageSteps extends ApplicationDriver {

  ResultPageObject rop=new ResultPageObject();
  public ResultPageSteps(){}

    @Then("^I should see search result$")
    public void iShouldSeeSearchResult() {
    System.out.print("Verify");
    }

    @And("^I verify results$")
    public void iVerifyResults() throws Throwable {
        List <WebElement> results =rop.SearchTextBoxElementX;

        if (((List) results).size()>0)
        {
            System.out.print("Passed");
        }
        else
        {
            System.out.print("Failed");
        }
//        driver.wait(1);
//        driver.quit();

    }
}