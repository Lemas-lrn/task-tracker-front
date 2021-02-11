import React from "react";
import Header from "./components/header/Header";
import MainBody from "./components/mainBody/MainBody";
function App() {
  return (
    <div>
      <Header></Header>
      <MainBody>
        <div>Here comes the Body</div>
      </MainBody>
    </div>
  );
}

export default App;
