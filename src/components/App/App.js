// @flow

import React from "react";
import "./App.sass";

import CustomButton from "../CustomButton/";

function App() {
  const customStyle = {
    backgroundColor: "#f5f5f5",
    color: "#000",
    padding: ".5em"
  };

  return (
    <div className="App">
      <CustomButton
        buttonValue="Button"
        buttonSize="M"
        buttonRole="primary"
        // buttonState="hover"
        // nonStyled
        // isCustom={true}
        // customStyle={customStyle}
        // iconUrl="http://simpleicon.com/wp-content/uploads/cute.png"
      />
    </div>
  );
}

export default App;
