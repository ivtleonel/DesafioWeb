package stepDefinitions;

import static org.junit.Assert.assertEquals;
import java.util.concurrent.TimeUnit;


import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import io.github.bonigarcia.wdm.WebDriverManager;

public class PesquisaBotasSteps{

	private WebDriver driver;
	
	
    @Before
    public void setupTest() {
    	 WebDriverManager.chromedriver().setup();
    	driver = new ChromeDriver();
        driver.get("https://www.arezzo.com.br/");
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.manage().window().maximize();
    }

    @After
    public void teardown() {
        if (driver != null) {
            driver.quit();
            driver = null;
        }
    }
	

	@Test
	@Dado("^que eu tenha acessado o site da arezzo$")
	public void que_eu_tenha_acessado_o_site_da_arezzo() throws Throwable {
		
		driver.findElement(By.xpath("//*[@title='B R I ZZ A']")).getText();

	}

	@Quando("^clico em Nova Colecao$")
	public void clico_em_Nova_Colecao() throws Throwable {		
		
		driver.findElement(By.xpath("//*[@title='NOVA COLEÇÃO']")).click();
		
	}

	@Quando("^pesquiso por botas$")
	public void pesquiso_por_botas() throws Throwable {
		driver.findElement(By.id("js-open-search-fixed")).click();
		Thread.sleep(1000);
        driver.findElement(By.id("js-search-input")).sendKeys("Botas");	
		Thread.sleep(2000);
        driver.findElement(By.xpath("//*[@class='search-item__link']")).click();
        Thread.sleep(2000);				
	}
	
		
	@Entao("^vejo a tela de \"([^\"]*)\"$")
	public void vejo_a_tela_de(String botas) throws Throwable {

		Thread.sleep(2000);
		String confirmation = driver.findElement(By.xpath("//*[@class='category-header__title']")).getText();	
		assertEquals("BOTAS: " + confirmation +" Não foi possivel acessar. Deveriar ser: " +botas+ " ",botas, confirmation);
		 		 
		Thread.sleep(2000);
		
	}
	

		
}
