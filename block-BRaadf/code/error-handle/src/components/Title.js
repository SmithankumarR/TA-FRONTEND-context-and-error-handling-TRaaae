import { useContext } from "react";
import { SwitchContext } from "./SwitchContext";

function Title({ text}) {
  const {isDarkMode} = useContext(SwitchContext)
  return (
    <h2
      className={`heading ${
        isDarkMode ? "sub-heading-dark" : "sub-heading-light"
      }`}
    >
      {text}
    </h2>
  );
}

export default Title;