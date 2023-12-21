package com.csreact.sample;

public class SampleTask implements Runnable {
    private int taskId;
    private long sleepTime;

    public SampleTask(int taskId, long sleepTime) {
        this.taskId = taskId;
        this.sleepTime = sleepTime;
    }

    @Override
    public void run() {
        try {
            Thread.sleep(sleepTime);
            System.out.println("Task " + taskId + " completed");
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}