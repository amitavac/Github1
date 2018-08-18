package org.amitava.cucumberFramework.pageObjects;
import org.amitava.cucumberFramework.core.ApplicationDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import java.util.List;
public class ResultPageObject extends ApplicationDriver {
    public ResultPageObject()
    {

        PageFactory.initElements(driver,this);

    }
    @FindBy(how= How.XPATH,using="//*[@class='rc']")
    public List<WebElement> SearchTextBoxElementX;

}
