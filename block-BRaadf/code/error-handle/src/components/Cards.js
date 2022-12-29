import { useContext } from "react";
import Card from "./Card";
import {SwitchContext} from "./SwitchContext";
function Cards() {
  const {isDarkMode} = useContext(SwitchContext)
  return (
    <div className="cards_wrap">
      <Card isDarkMode={isDarkMode} />
      <Card isDarkMode={isDarkMode} />
      <Card isDarkMode={isDarkMode} />
    </div>
  );
}

export default Cards;