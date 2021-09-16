/* eslint-disable no-unused-vars */

import React from "react";
import ThemeContext from "./ThemeContext";

class ClassContextType extends React.Component {
  componentDidMount() {
    const value = this.context;
    /* perform a side-effect at mount using the value of ThemeContext */
  }

  componentDidUpdate() {
    const value = this.context;
    /* ... */
  }

  componentWillUnmount() {
    const value = this.context;
    /* ... */
  }

  render() {
    const value = this.context;
    /* render something based on the value of ThemeContext */
    return <div>{value}</div>
  }
}

ClassContextType.contextType = ThemeContext;

export default ClassContextType;
