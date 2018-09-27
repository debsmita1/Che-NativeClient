import React, { Component} from "react";
import WorkspaceCards from "./WorkspaceCards.js";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1> Workspaces </h1>
        <WorkspaceCards/>
      </div>
 );
     
   
  }
}

export default App;