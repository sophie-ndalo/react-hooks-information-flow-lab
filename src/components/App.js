import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <>
    <Header onDarkModeClick={onDarkModeClick} isDarkMode={isDarkMode}/>
    <ShoppingList items={itemData} />
    </>
  );
}

export default App;
