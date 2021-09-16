/* eslint-disable react/prop-types */
import React from "react";
import { DynamicThemeContext, themes } from "./DynamicThemeContext";
import ThemedButton from "./ThemedButton";

// An intermediate component that uses the ThemedButton
function Toolbar({ changeTheme }) {
  return <ThemedButton onClick={changeTheme}>Change Theme</ThemedButton>;
}

class DynamicContextExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState((state) => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      }));
    };
  }

  render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    const { theme } = this.state;
    return (
      <>
        <DynamicThemeContext.Provider value={theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </DynamicThemeContext.Provider>
        <div>
          <ThemedButton> I am just displaying the default theme</ThemedButton>
        </div>
      </>
    );
  }
}

export default DynamicContextExample;
