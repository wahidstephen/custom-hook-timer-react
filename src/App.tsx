import { useState } from "react";
import Timer from "./timer/Timer";
import "./styles.css";

export default function App() {
  const [n, setN] = useState(1);
  return (
    <div className="App">
      <h2>Start playing around to see some magic happen!</h2>

      {/* 1s Timer */}
      <Timer label="1s Timer" />

      {/* 2s Timer */}
      <Timer initialValue={0} step={2000} label="2s Timer" />

      {/* Ns Timer */}
      <label>n: </label>
      <input
        type="number"
        value={n}
        onChange={(e) => setN(parseInt(e.target.value, 10))}
      />
      <Timer initialValue={0} step={n * 1000} label="Ns Timer" />
    </div>
  );
}
