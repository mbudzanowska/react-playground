import ThemeContext from "./ThemeContext";

const ContextConsumer = () => (
  <ThemeContext.Consumer>
    {(value) =>
      value === "dark" ? (
        <div>its freaking dark</div>
      ) : (
        <div>so light, so bright</div>
      )
    }
  </ThemeContext.Consumer>
);

export default ContextConsumer;
