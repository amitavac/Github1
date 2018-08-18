package  org.amitava.cucumberFramework.stepDefinations;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import org.amitava.cucumberFramework.core.ApplicationDriver;
import org.amitava.cucumberFramework.pageObjects.SearchPageObject;

public class SearchPageSteps extends ApplicationDriver  {

    SearchPageObject searchPageObject;

public SearchPageSteps() {
    searchPageObject=new SearchPageObject();
        }

    @Given("^I am on google home page$")
    public void iAmOnGoogleHomePage() {
        driver.get("https://google.com");
    }

    @When("^I enter \"([^\"]*)\" in search box$")
    public void iEnterInSearchBox(String arg0)  {
        searchPageObject.searchTextBoxElement.sendKeys("Amitava Chowdhury");
//        try {
//            Thread.sleep(20000);
//
//        }
//        catch (Exception e)
//        {
//            System.out.print(e);
//        }
//        searchPageObject.searchButtonElement.click();
    }

}
