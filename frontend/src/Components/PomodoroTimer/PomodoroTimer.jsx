import React, { useState, useEffect } from "react";
import "./PomodoroTimer.css";

const PomodoroTimer = () => {
  const [focusTime, setFocusTime] = useState(25 * 60); // Default focus time in seconds
  const [breakTime, setBreakTime] = useState(5 * 60); // Default break time in seconds
  const [timeLeft, setTimeLeft] = useState(focusTime); // Remaining time
  const [isRunning, setIsRunning] = useState(false);
  const [isFocusSession, setIsFocusSession] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedFocusTime, setSelectedFocusTime] = useState(25);

  useEffect(() => {
    let timer;
    if (isRunning && !isPaused) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev > 0) {
            return prev - 1;
          } else {
            clearInterval(timer);
            if (isFocusSession) {
              setTimeLeft(breakTime);
              setIsFocusSession(false);
            } else {
              setTimeLeft(focusTime);
              setIsFocusSession(true);
            }
            return 0;
          }
        });
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning, isPaused, isFocusSession, focusTime, breakTime]);

  const handleFocusTimeChange = (minutes) => {
    const seconds = minutes * 60;
    setFocusTime(seconds);
    setBreakTime((minutes / 25) * 5 * 60);
    setTimeLeft(seconds);
    setSelectedFocusTime(minutes);
    setIsFocusSession(true);
    setIsRunning(false);
    setIsPaused(false);
  };

  const handleStart = () => {
    setIsRunning(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(true);
    setIsRunning(false);
  };

  const handleContinue = () => {
    setIsPaused(false);
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsPaused(false);
    setIsRunning(false);
    setTimeLeft(focusTime);
    setIsFocusSession(true);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const progress = (timeLeft / (isFocusSession ? focusTime : breakTime)) * 100;

  return (
    <div className="pomodoro-container">
      <h1 className="pomodoro-title">Pomodoro Timer</h1>
      <div className="circle-timer">
        <svg className="progress-ring" width="300" height="300">
          <circle
            className="progress-ring__background"
            stroke="#34495E"
            strokeWidth="10"
            fill="transparent"
            r="140"
            cx="150"
            cy="150"
          />
          <circle
            className="progress-ring__circle"
            stroke={isFocusSession ? "#1ABC9C" : "#E74C3C"}
            strokeWidth="10"
            fill="transparent"
            r="140"
            cx="150"
            cy="150"
            style={{
              strokeDasharray: "879.65",
              strokeDashoffset: `${879.65 - (progress / 100) * 879.65}`,
            }}
          />
        </svg>
        <div className="time-display">{formatTime(timeLeft)}</div>
      </div>
      <div className="controls">
        <button
          className={`focus-button ${
            selectedFocusTime === 25 ? "selected" : ""
          }`}
          onClick={() => handleFocusTimeChange(25)}
        >
          25 Min
        </button>
        <button
          className={`focus-button ${
            selectedFocusTime === 60 ? "selected" : ""
          }`}
          onClick={() => handleFocusTimeChange(60)}
        >
          1 Hour
        </button>
        <button
          className={`focus-button ${
            selectedFocusTime === 120 ? "selected" : ""
          }`}
          onClick={() => handleFocusTimeChange(120)}
        >
          2 Hours
        </button>
      </div>
      {!isRunning && !isPaused && (
        <button className="start-button" onClick={handleStart}>
          Start
        </button>
      )}
      {isRunning && !isPaused && (
        <button className="pause-button" onClick={handlePause}>
          Pause
        </button>
      )}
      {isPaused && (
        <div className="pause-options">
          <button className="continue-button" onClick={handleContinue}>
            Continue
          </button>
          <button className="stop-button" onClick={handleStop}>
            Stop
          </button>
        </div>
      )}
      <div className="session-info">
        {isFocusSession ? "Focus Session" : "Break Session"}
      </div>
    </div>
  );
};

export default PomodoroTimer;
