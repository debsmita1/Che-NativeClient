import React, { Component} from "react";


class StartWorkspace extends Component{
  constructor(props)
  {
      super(props);
      this.state={
        workspace_id: this.props.worksp_id, 
        workspace_status: this.props.worksp_status,
        workspace_name: this.props.worksp_name,
        workspace_ide: this.props.worksp_ide,       
      };
      this.handleEvent = this.handleEvent.bind(this);
      this.changeWorkspaceStatus=this.changeWorkspaceStatus.bind(this);
      
  }

 
  changeWorkspaceStatus() {
    //console.log("change workspace func");
    var get_workspace_api='http://che-mini-che.192.168.42.164.nip.io/api/workspace/'+this.state.workspace_id;
    
    fetch(get_workspace_api).then((response) => response.json())
    .then((data) => {
      this.setState({workspace_status:data.status});
      //alert("Workspace Started");
    });
};

  handleEvent (){
    var start_workspace_api='http://che-mini-che.192.168.42.164.nip.io/api/workspace/'+this.state.workspace_id+'/runtime';
    console.log(this.state.workspace_id);
    fetch(start_workspace_api, {
      method: 'POST',
      headers: new Headers({
                 'Content-Type': 'application/json',
        })
    }).then((response) => response.json())
    .then((data) => {
      this.setState({workspace_status:data.status});
      //alert("Workspace Started");
    });
  };

  
 render() {
   var show;
  if(this.state.workspace_status === 'STOPPED')
  {
    
       
    show= <p>{this.state.workspace_name} {this.state.workspace_status} <button id ='startworkspace' onClick={this.handleEvent}>Start Workspace</button></p>;
    
 
}
if(this.state.workspace_status === 'STARTING')
   {
    show=   <p>{this.state.workspace_name} Workspace is Starting <button id ='checkstatus' onClick={this.changeWorkspaceStatus}>Reload</button></p>;
    
   }

   if(this.state.workspace_status === 'RUNNING'){
     show = <p><a href={this.state.workspace_ide}>{this.state.workspace_name}</a>{this.state.workspace_status}</p>;
   }

  return show;

  }
}
export default StartWorkspace;
