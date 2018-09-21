import React, { Component } from "react";

class AppBody extends Component{
  constructor()
  {
      super();
      this.state={
          workspaces:[],
      };
  }
  
  componentDidMount(){
      console.log("inside CpmponentDidMount");
    fetch('http://che-mini-che.192.168.42.164.nip.io/api/workspace')
    .then(results => {
        return results.json();
    })
    .then((data) => {
        console.log(data);
        this.setState({workspaces:data})
    })
         
  }
  
    render(){
        const wrksp=this.state.workspaces;
               
    return(
       
<div className="AppBody">
      {wrksp.map(obj =>
            <li key={obj.config.name}>
            
              <p><a href={obj.links.ide}>{obj.config.name}</a>{obj.status}</p>
            </li>
          )}
     
      </div>
    )
}  
}

export default AppBody;