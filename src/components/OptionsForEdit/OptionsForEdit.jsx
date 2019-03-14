import React from "react";
class OptionsForEdit extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let temporaryArray=[];
        console.log("data op-->>",this.props.array)
        return(
            <select required className="form-control" style={{ width: "100%", padding: "10px" }} id={this.props.idForChild}>
            {
              this.props.array.map((prop) => {
                  if(temporaryArray.indexOf(prop[this.props.position])===-1)
                  {temporaryArray.push(prop[this.props.position])}
              }
              )
            }
            {
              temporaryArray.map((prop)=>{
                return <option>{prop}</option>
              })
            }
      </select>      
        );
    }
}

export default OptionsForEdit;