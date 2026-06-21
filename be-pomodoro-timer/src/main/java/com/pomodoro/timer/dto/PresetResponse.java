package com.pomodoro.timer.dto;

public class PresetResponse {

    private String name;
    private String alarm;
    private int workDuration;
    private int shortBreakDuration;
    private int longBreakDuration;
    private int iterationCounter;

    public PresetResponse(String name, String alarm, int workDuration, int shortBreakDuration, int longBreakDuration,
            int iterationCounter) {
        this.name = name;
        this.alarm = alarm;
        this.workDuration = workDuration;
        this.shortBreakDuration = shortBreakDuration;
        this.longBreakDuration = longBreakDuration;
        this.iterationCounter = iterationCounter;
    }

    public String getName() {
        return this.name;
    }

    public String getAlarm() {
        return this.alarm;
    }

    public int getWorkDuration() {
        return this.workDuration;
    }

    public int getShortBreakDuration() {
        return this.shortBreakDuration;
    }

    public int getLongBreakDuration() {
        return this.longBreakDuration;
    }

    public int getIterationCounter() {
        return this.iterationCounter;
    }

}
