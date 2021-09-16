/* eslint-disable react/prop-types */
import React from "react";

const FancyButton = React.forwardRef((props, ref) => (
  <button
    onClick={props.onClick}
    type="button"
    ref={ref}
    className="FancyButton"
  >
    {props.children}
  </button>
));

export default FancyButton;

/*
// You can now get a ref directly to the DOM button:
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;
*/

/*
Here is a step-by-step explanation of what happens in the above example:

1. We create a React ref by calling React.createRef and assign it to a ref variable.
2. We pass our ref down to <FancyButton ref={ref}> by specifying it as a JSX attribute.
3. React passes the ref to the (props, ref) => ... function inside forwardRef as a second argument.
4. We forward this ref argument down to <button ref={ref}> by specifying it as a JSX attribute.
5. When the ref is attached, ref.current will point to the <button> DOM node.
*/

/*
Note:
The second ref argument only exists when you define a component with React.forwardRef call. 
Regular function or class components don’t receive the ref argument, 
and ref is not available in props either.
*/
