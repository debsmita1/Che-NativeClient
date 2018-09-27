import React, { Component } from "react";
import StartWorkspace from "./StartWorkspace";

class WorkspaceCards extends Component{
  constructor()
  {
      super();
      this.state={
          workspaces:[]
      };
  }

  
  componentDidMount(){
      console.log("Workspace Cards");
      var workspace_api='http://che-mini-che.192.168.42.164.nip.io/api/workspace';
    fetch(workspace_api)
    .then(results => {
        return results.json();
    })
    .then((data) => {
        console.log(data);
        this.setState({workspaces:data})
    })
         
  }
  
    
    render(){
        const WORKSPACE=this.state.workspaces;  
               
    return(
      
<div className="WorkspaceCards">
{WORKSPACE.map(obj => obj.status === "STOPPED" ?
(
    <li key={obj.config.name}>
 <div ><StartWorkspace  worksp_name={obj.config.name} worksp_id={obj.id} worksp_status={obj.status} worksp_ide={obj.links.ide} /></div>
</li>) : (<li key={obj.config.name}>

<div><p><a href={obj.links.ide}>{obj.config.name}</a>{obj.status}</p></div>
</li>)
)}
         
      </div>
    )
}  
}

export default WorkspaceCards;