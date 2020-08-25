package stepDefinations;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefination {
	
	WebDriver driver;
	
	@Given("^I am an exiting Ringgo customer$")
	public void i_am_an_exiting_Ringgo_customer() throws Throwable {
		
		driver = new ChromeDriver();
		driver.get("https://myringgo.co.uk/");
		driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
	 
	}

	@When("^try to login with valid credentials$")
	public void try_to_login_with_valid_credentials() throws Throwable {
		driver.findElement(By.xpath("//a[@class='buttonLink btn-secondary' and text()='Log in']")).click();
		String email ="sampath.pritila@gmail.com";
		String password = "Velar@2018";
		driver.findElement(By.xpath("//input[@name='identifier']")).sendKeys(email);
		driver.findElement(By.xpath("//input[@name='password']")).sendKeys(password);
	   
	}

	@Then("^should be logged in$")
	public void should_be_logged_in() throws Throwable {
		driver.findElement(By.xpath("//input[@name='submit']")).click();
	    
	}
	
	@Then("^user is on Home page$")
	public void user_is_on_Home_page() throws Throwable {
		String title = driver.getTitle();
		System.out.println("Home Page title "+ title);
		Assert.assertEquals("RingGo Cashless Parking Solution: Dashboard", title);
	}
	
	@Then("^close the browser$")
	public void close_the_browser() throws Throwable {
	    driver.quit();
	}



}
