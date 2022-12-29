import { useContext } from "react";
import { SwitchContext } from "./SwitchContext";

function Header() {
const {isDarkMode} = useContext(SwitchContext);
  return (
    <h1 className={`heading ${isDarkMode ? "heading-dark" : "heading-light"}`}>
      {isDarkMode ? "Dark Mode" : "Light Mode"}
    </h1>
  );
}

export default Header;