import ContextConsumer from "./ContextConsumer";
import ClassContextType from "./ClassContextType";
import ThemeContext from "./ThemeContext";

const StaticContextExample = () => (
  <ThemeContext.Provider value="light">
    <ClassContextType />
    <ContextConsumer />
  </ThemeContext.Provider>
);

export default StaticContextExample;
