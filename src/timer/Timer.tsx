import { useTimer } from "./useTimer";

interface TimerProps {
  initialValue?: number;
  step?: number;
  label?: string;
}

// Timer component that uses the custom hook
function Timer(props: TimerProps) {
  const { initialValue, step, label } = props;
  const { value, isRunning, start, pause, reset } = useTimer(
    initialValue,
    step
  );

  return (
    <div className="timer-div">
      <h1>{new Date(value).toISOString().substring(11, 19)}</h1>
      <button onClick={isRunning ? pause : start}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={reset}>Reset</button>
      <h2>{label ?? "Timer"}</h2>
    </div>
  );
}

export default Timer;
