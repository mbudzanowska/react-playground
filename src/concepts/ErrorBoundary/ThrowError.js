import { useEffect, useState } from "react";

const ThrowError = () => {
  const [counter, setCounter] = useState(5);

  const throwThisError = () => {
    throw new Error("HUSTON THERE IS AN ERROR");
  };

  useEffect(() => {
    const timer =
      counter > 0
        ? setInterval(() => setCounter(counter - 1), 1000)
        : throwThisError();
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <>
      Countdown to error: {counter}
      {/* its not gonna work in the event handler below !!! */}
      <button onClick={throwThisError} type="button">
        THROW IT, PLEASE!
      </button>
    </>
  );
};

export default ThrowError;
