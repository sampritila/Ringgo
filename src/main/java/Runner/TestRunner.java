package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		features = "/Users/sampathpritila/eclipse-workspace/Ringgo/src/main/java/Features/login.feature", //the path of the feature files
		glue={"stepDefinations"}, //the path of the step definition files
		 plugin = { "pretty", "html:target/cucumber-reports","json:target/cucumber.json","junit:target/cucumber.xml" },//to generate different types of reporting
		 monochrome = true, //display the console output in a readable format
		 strict = true,
		 dryRun = false
		
		
		
		)
public class TestRunner {

}
