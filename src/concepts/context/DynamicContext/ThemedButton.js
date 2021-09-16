import { useContext } from "react";
import { DynamicThemeContext } from "./DynamicThemeContext";

const ThemedButton = (props) => {
  const theme = useContext(DynamicThemeContext);

  return (
    <button
      type="button"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      style={{ backgroundColor: theme.background }}
    />
  );
};

export default ThemedButton;
