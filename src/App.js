import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const newDate = new Date();
  const options = {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  };

  newDate.setDate(newDate.getDate() + count);

  const DATE_TIME = newDate.toLocaleDateString("en-US", options);
  const parts = DATE_TIME.split(/[\s,]+/);
  const DATE_TIME_ORGANIZED = `${parts[0]} ${parts[2]} ${parts[1]} ${parts[3]}`;

  return (
    <div className="full-counter">
      <div className="step">
        <button
          onClick={() => {
            if (step > 1) setStep((s) => s - 1);
          }}
        >
          -
        </button>
        <p>Step : {step} </p>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div className="count">
        <button onClick={() => setCount((c) => c - 1 * step)}>-</button>
        <p>Count : {count} </p>
        <button onClick={() => setCount((c) => c + 1 * step)}>+</button>
      </div>
      <span className="content">
        {count === 0 && `Today is ${DATE_TIME_ORGANIZED}`}
        {count > 0 && `${count} days from today is ${DATE_TIME_ORGANIZED}`}
        {count < 0 && `${-count} days ago was ${DATE_TIME_ORGANIZED}`}
      </span>
    </div>
  );
}
