package com.pomodoro.timer.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

// DTO
import com.pomodoro.timer.dto.PresetResponse;;

@RestController
public class Preset {

    @GetMapping("/preset")
    public PresetResponse preset() {
        return new PresetResponse("Work", "chipping bird", 5, 5, 5);
    }

}
