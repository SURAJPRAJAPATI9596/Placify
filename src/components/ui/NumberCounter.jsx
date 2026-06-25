import { useState, useEffect } from "react";

const NumberCounter = ({ number, time }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (number > count) {
        setCount(count + 10);
      } else {
      }
    }, time);
    return () => clearInterval(interval);
  }, [count]);

  return <p>{count}+</p>;
};

export default NumberCounter;
