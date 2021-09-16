// this is an example of bad UX that does not support a11y

/*
This may work fine for users with pointer devices, such as a mouse, 
but operating this with the keyboard alone leads to broken functionality 
when tabbing to the next element as the window object never receives a click event. 
This can lead to obscured functionality which blocks users from using your application. 
*/


// this does not work with tab


import React from "react";

class OuterClickExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.toggleContainer = React.createRef();

    this.onClickHandler = this.onClickHandler.bind(this);
    this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener("click", this.onClickOutsideHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.onClickOutsideHandler);
  }

  onClickHandler() {
    this.setState((currentState) => ({
      isOpen: !currentState.isOpen,
    }));
  }

  onClickOutsideHandler(event) {
    const { isOpen } = this.state;
    if (isOpen && !this.toggleContainer.current.contains(event.target)) {
      this.setState({ isOpen: false });
    }
  }

  render() {
    const { isOpen } = this.state;

    return (
      <div ref={this.toggleContainer}>
        <button type="button" onClick={this.onClickHandler}>
          Select an option
        </button>
        {isOpen && (
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        )}
      </div>
    );
  }
}

export default OuterClickExample;
