package org.amitava.cucumberFramework.main;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.amitava.cucumberFramework.core.ApplicationDriver;
import org.junit.After;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import java.net.URL;
@RunWith(Cucumber.class)
        @CucumberOptions(tags = {"@123,@124"},
                glue="org.amitava.cucumberFramework.stepDefinations",
                features="resources/features",
                plugin = {"html:target/cucumber-report","json:target/cucumber.json",
                "pretty:target/cucumber-pretty.txt"}
//                plugin = "json:target/cucumber.json"
//               plugin = "html:Results/TestOutput.xml"
        )
        public  class RunnerCucumber extends ApplicationDriver {
        @BeforeClass
                        public static void setUp()
                        {
                                System.out.print("Start");
                                try {
                                        DesiredCapabilities capabilities = new DesiredCapabilities();
                                        capabilities.setCapability("browserName", "chrome");
                                        //        URL url = new URL("http://127.0.0.1:3732/wd/hub");
                                        URL url = new URL("http://192.168.0.101:4444/wd/hub");
                                        if (driver == null)
                                                driver = new RemoteWebDriver(url, capabilities);

                                } catch (
                                        Exception e
                                ) {
                                }
                        }
                        @After
                        public static void down()
                        {
                                driver.close();
                        }
                        @AfterClass
                        public static void tearDown()
                        {
                                driver.quit();
                        }
        }




