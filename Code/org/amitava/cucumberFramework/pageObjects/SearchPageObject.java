package org.amitava.cucumberFramework.pageObjects;
import org.amitava.cucumberFramework.core.ApplicationDriver;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.WebElement;

public class SearchPageObject extends ApplicationDriver {

public  SearchPageObject()
{
    PageFactory.initElements(driver,this);

}

@FindBy(how= How.ID,using="lst-ib")
    public WebElement searchTextBoxElement;
@FindBy(how=How.XPATH,using="//*[@id=\"tsf\"]/div[2]/div[3]/center/input[1]")
    public WebElement searchButtonElement;
}
