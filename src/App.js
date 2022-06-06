import React from "react";
import Homepage from "./components/Homepage"
import menu from "./menu";

function App() {

  return <div>
    <Homepage items={menu.items}/>
  </div>;
}

export default App;
