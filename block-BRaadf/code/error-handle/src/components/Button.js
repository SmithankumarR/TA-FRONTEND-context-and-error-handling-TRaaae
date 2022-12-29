import React, { useContext } from "react";
import { SwitchContext } from "./SwitchContext"
export default function SwitchButton() {
  const { isDarkMode, changeMode } = useContext(SwitchContext);
  return (
    <button
      className={`btn ${isDarkMode ? "btn-dark" : "btn-light"}`}
      onClick={changeMode}
    >
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}