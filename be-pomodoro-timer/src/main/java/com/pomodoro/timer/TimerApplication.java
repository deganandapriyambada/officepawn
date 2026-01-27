package com.pomodoro.timer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
@RestController
public class TimerApplication {

	public static void main(String[] args) {
		SpringApplication.run(TimerApplication.class, args);
	}

	@GetMapping("/preset")
	public String preset() {
		return String.format("Hello world!");
	}

	@GetMapping("/location")
	public String location() {
		return String.format("Hello world!");
	}

	@GetMapping("/activity")
	public String activity() {
		return String.format("Hello world!2");
	}

	@GetMapping("/alarm")
	public String alarm() {
		return String.format("Hello world!2");
	}

}
