package com.devsuperior.dsmovie;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.env.Environment;

@SpringBootApplication
public class DsmovieApplication {

    public static void main(String[] args) {
        SpringApplication app = new SpringApplication(DsmovieApplication.class);
        Environment env = app.run(args).getEnvironment();

        String port = env.getProperty("PORT");
        if (port == null || port.isEmpty()) {
            port = "8080"; // Set a default port if the PORT environment variable is not provided
        }

        String host = "0.0.0.0"; // The host to bind to, allowing connections from any IP address

        String serverUrl = "http://" + host + ":" + port;
        System.out.println("Server running at " + serverUrl);
    }

}
