import { createRef, useState } from "react";
import FancyButton from "./FancyButton";
import logProps from "./HOC";
import logNamedProps from "./ForwardRefNaming";

const KindaFancyButton = logProps(FancyButton);
const UberFancyButton = logNamedProps(FancyButton);
UberFancyButton.displayName = "THIS WILL WORK"

const JustNormalComponent = () => <div>Bacardi ze szklanki, hej!</div>;

const Test = logNamedProps(JustNormalComponent);


const ForwardingRefExample = () => {
  const [counter, setCounter] = useState(0);

  const buttonRef = createRef();
  const namedRef = createRef();
  const notNamedRef = createRef();

  const onClick = () => {
    console.log(buttonRef.current);
    setCounter((count) => count + 1);
  };

  return (
    <>
      Just fancy button with forward ref
      <FancyButton ref={buttonRef} onClick={onClick}>
        WHATS UP? click me and check out the console
      </FancyButton>
      <hr />A Bit more fancy button with logProps
      <KindaFancyButton counter={counter} onClick={onClick} ref={notNamedRef}>
        I am kinda fancy
      </KindaFancyButton>
      <hr />
      The fanciest button, checkout this bad boy in dev tools
      <UberFancyButton counter={counter + 10} onClick={onClick} ref={namedRef}>
        I am the fanciest
      </UberFancyButton>
      <hr/>
      <Test/>
    </>
  );
};

export default ForwardingRefExample;
