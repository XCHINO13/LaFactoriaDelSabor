package flavor.factory.FlavorFactory;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication()
public class FlavorFactoryApplication {

	public static void main(String[] args) {
		SpringApplication.run(FlavorFactoryApplication.class, args);
	}

}
