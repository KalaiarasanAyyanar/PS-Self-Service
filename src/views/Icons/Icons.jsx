import React, { Component } from "react";
import { Grid, Row, Col,Table } from "react-bootstrap";
// import "../TableList/Tablelist.css";
import Card from "components/Card/Card";
import axios from 'axios';
// import "./Icons.css";
class Icons extends Component {
  constructor(props){
    super(props);
    this.state={
      icon1:"fa fa-sort",
      icon2:"fa fa-sort",
      icon3:"fa fa-sort",
      tdE:[],
      thE:[],
      headingCheck:false,
      headingClicked: false,
    }
    this.iconclick1=this.iconclick1.bind(this);
    this.iconclick2=this.iconclick2.bind(this);
    this.iconclick3=this.iconclick3.bind(this);
    this.compareBy1.bind(this);
    this.sortBy1.bind(this);
    this.compareBy2.bind(this);
    this.sortBy2.bind(this);
     this.compareBy3.bind(this);
    this.sortBy3.bind(this);
    axios.get(`http://localhost:3300`)
      .then(res => {
        console.log("printing",res.data)
        this.setState({
          tdE:res.data.tdE,
          thE:res.data.thE,
        })
      })
  }
  iconclick1(){
    if(this.state.icon1==="fa fa-sort")
   {
    this.setState({
      icon1:"fa fa-sort-desc",
      
     })
     
   } 
   if(this.state.icon1==="fa fa-sort-desc"){
    this.setState({
      icon1:"fa fa-sort-asc",
     
     })
    
   }
   if(this.state.icon1==="fa fa-sort-asc"){
    this.setState({
      icon1:"fa fa-sort-desc"
     })
   }
 
  }
  compareBy1(key) {
    return function (a, b) {
      console.log("a   ",a[key],b[key])
      if (a[key] < b[key]) {
        
        console.log("b");
        return -1;}
      if (a[key] > b[key]) {
        console.log("a");
        return 1;
      }
      return 0;
    };
  }
  
  sortBy1=(key)=> {
    console.log("sortBy",key)
    let arrayC = this.state.tdE;
  if(this.state.icon1==="fa fa-sort-desc"){
    console.log("this.state.icon",this.state.icon1)
   arrayC.reverse( arrayC.sort(this.compareBy1(key)));
    this.setState({tdE: arrayC});
  }
  if(this.state.icon1==="fa fa-sort-asc"){
    arrayC.sort(this.compareBy1(key));
    this.setState({tdE: arrayC});
  }
  if(this.state.icon1==="fa fa-sort"){
    arrayC.sort(this.compareBy1(key));
    this.setState({tdE: arrayC});
  }
  }
  
  iconclick2(){
    if(this.state.icon2==="fa fa-sort")
   {
    this.setState({
      icon2:"fa fa-sort-desc",
      
     })
     
   } 
   if(this.state.icon2==="fa fa-sort-desc"){
    this.setState({
      icon2:"fa fa-sort-asc",
     
     })
    
   }
   if(this.state.icon2==="fa fa-sort-asc"){
    this.setState({
      icon2:"fa fa-sort-desc"
     })
   }
 
  }
  compareBy2(key) {
    return function (a, b) {
      console.log("a   ",a[key],b[key])
      if (a[key] < b[key]) {
        
        console.log("b");
        return -1;}
      if (a[key] > b[key]) {
        console.log("a");
        return 1;
      }
      return 0;
    };
  }
  
  sortBy2=(key)=> {
    console.log("sortBy",key)
    let arrayC = this.state.tdE;
  if(this.state.icon2==="fa fa-sort-desc"){
    console.log("this.state.icon",this.state.icon1)
   arrayC.reverse( arrayC.sort(this.compareBy2(key)));
    this.setState({tdE: arrayC});
  }
  if(this.state.icon2==="fa fa-sort-asc"){
    arrayC.sort(this.compareBy2(key));
    this.setState({tdE: arrayC});
  }
  if(this.state.icon2==="fa fa-sort"){
    arrayC.sort(this.compareBy2(key));
    this.setState({tdE: arrayC});
  }
  }
  
  iconclick3(){
    if(this.state.icon3==="fa fa-sort")
   {
    this.setState({
      icon3:"fa fa-sort-desc",
      
     })
     
   } 
   if(this.state.icon3==="fa fa-sort-desc"){
    this.setState({
      icon3:"fa fa-sort-asc",
     
     })
    
   }
   if(this.state.icon3==="fa fa-sort-asc"){
    this.setState({
      icon3:"fa fa-sort-desc"
     })
   }
 
  }
  compareBy3(key) {
    return function (a, b) {
      console.log("a   ",a[key],b[key])
      if (a[key] < b[key]) {
        
        console.log("b");
        return -1;}
      if (a[key] > b[key]) {
        console.log("a");
        return 1;
      }
      return 0;
    };
  }
  
  sortBy3=(key)=> {
    console.log("sortBy",key)
    let arrayC = this.state.tdE;
  if(this.state.icon3==="fa fa-sort-desc"){
    console.log("this.state.icon",this.state.icon1)
   arrayC.reverse( arrayC.sort(this.compareBy3(key)));
    this.setState({tdE: arrayC});
  }
  if(this.state.icon3==="fa fa-sort-asc"){
    arrayC.sort(this.compareBy3(key));
    this.setState({tdE: arrayC});
  }
  if(this.state.icon3==="fa fa-sort"){
    arrayC.sort(this.compareBy3(key));
    this.setState({tdE: arrayC});
  }
  }
  
 headerCheckboxClick = () => {
  let arrayCopy=this.state.tdE;
  this.setState({
    headingCheck:!this.state.headingCheck
  })
  arrayCopy.map((prop,key) => {
     prop[0]=!this.state.headingCheck;
  })
 }

 rowCheckboxClick = (key) => {
   let arrayCopy=this.state.tdE;
   arrayCopy[key][0]=!arrayCopy[key][0];
   this.setState({tdE:arrayCopy})
   let i;
   for(i=0;i<arrayCopy.length;i++)
   {
     if((arrayCopy[i][0]!==true))
     {
       break;
     }
   }
   if(i!==(arrayCopy.length)){
       this.setState({
         headingCheck:false    
       })
   }
   else{
     this.setState({
       headingCheck:true   
     })
   }
 }
   render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
              ctTableFullWidth
              ctTableResponsive
              content={
                <div>
                  <button className="rose" title="Add User" style={{ float: "right",paddingLeft:"15px",paddingRight:"15px",paddingTop:"10px",paddingBottom:"10px", border: "2px solid  #777777", borderRadius: "20px", marginRight: "20px",outline:"none" }}  ><i className="fa fa-user-plus fa-1x "> </i></button>
                  <br></br>
              <br></br>
              <button className="rose" title="Toggle" style={{ float: "left", paddingLeft:"15px",paddingRight:"15px",paddingTop:"10px",paddingBottom:"10px", border: "2px solid  #777777", borderRadius: "20px", marginLeft: "20px",outline:"none"}}  ><i className="fa fa-th-list fa-1x"> </i></button>
              <div className="dropdown" style={{display:"inline"}}>
                    &nbsp;&nbsp;&nbsp;
    <button title="columns"  className="btn dropdown-toggle rose" type="button" data-toggle="dropdown" style={{borderRadius:"30px",padding:"10px"}}><i class="fa fa-columns" aria-hidden="true"></i>
    <i className="fa fa-sort-desc" aria-hidden="true"></i></button>
    <ul className="dropdown-menu" style={{right:"600px",left:"0px",width:"50px",top:"28px"}}>
      <li style={{borderBottom:"1px solid #eee"}}><a href="#"><input type="checkbox" checked/>&nbsp;NAME</a></li>
      <li style={{borderBottom:"1px solid #eee"}}><a href="#"><input type="checkbox" checked/>&nbsp;EMAIL</a></li>
      <li style={{borderBottom:"1px solid #eee"}}><a href="#"><input type="checkbox" checked/>&nbsp;DESIGNATION</a></li>
      <li style={{borderBottom:"1px solid #eee"}}><a href="#"><input type="checkbox" checked/>&nbsp;DEPARTMENT</a></li>
      <li style={{borderBottom:"1px solid #eee"}}><a href="#"><input type="checkbox" checked/>&nbsp;MOBILE NUMBER</a></li>
      <li style={{borderBottom:"1px solid #eee"}}><a href="#"><input type="checkbox" checked/>&nbsp;TYPE</a></li>
      <li style={{borderBottom:"1px solid #eee"}}><a href="#"><input type="checkbox" checked/>&nbsp;STATUS</a></li>
      <li style={{borderBottom:"1px solid #eee"}}><a href="#"><input type="checkbox" checked/>&nbsp;ACTIONS</a></li>
    
    </ul>
  </div>
            <br></br>
                    <br></br>
                    <input style={{ marginLeft: "15px", color: "black", width: "97%", boxSizing: "border-box", border: "2px solid #ccc", borderRadius: "4px", fontSize: "16px", backgroundColor: "white", padding: "10px" }} type="text" name="search" placeholder="Search"></input>
                  
                    <br></br>
                    <br></br>
                    <Table hover>
                      <thead>
                        <tr>
                          {this.state.thE.map((prop, key) => {
                            console.log(key);
                            if (key === 0)
                            return <th key={key} className="text-center"><input type="checkbox" name="listItem" onClick={this.headerCheckboxClick} checked={this.state.headingCheck} />
                            </th>
                            else if(key===8)
                              return <th  key={key} className="text-right">{prop}</th>;
                           else if(key==2)
                           return  <th key={key} className="text-center">{prop}
                          
                           <button className="ssss" onClick={this.iconclick1}>
                           <button  className="ssss" onClick={()=>this.sortBy1("2")}>
                           <i className={this.state.icon1}></i>
                           </button>
                           </button>
                          </th>;
                           else if(key==3)
                           return  <th key={key} className="text-center">{prop}
                           <button className="ssss" onClick={this.iconclick2}>
                           <button  className="ssss" onClick={()=>this.sortBy2("3")}>
                           <i className={this.state.icon2}></i>
                           </button>
                           </button>
                          </th>;
                           else if(key==4)
                           return  <th key={key} className="text-center">{prop}
                           <button className="ssss" onClick={this.iconclick3}>
                           <button  className="ssss" onClick={()=>this.sortBy3("4")}>
                           <i className={this.state.icon3}></i>
                          </button> 
                           </button>
                          </th>;
                              
                           else
                           return <th key={key} className="text-center">{prop}</th>;
                                
                              
                          })}
                        </tr>
                      
                      </thead>
                      
                      <tbody>
                        {this.state.tdE.map((prop, key) => {
                          return (
                            <tr>
                              <td key={key} className="text-center"><input type="checkbox" onClick={()=> this.rowCheckboxClick(key)} checked={prop[0]}/></td>
                              <td key={key} className="text-center">{prop[1]}</td>
                              <td key={key} className="text-center">{prop[2]}</td>
                              <td key={key} className="text-center">{prop[3]}</td>
                              <td key={key} className="text-center">{prop[4]}</td>
                              <td key={key} className="text-center">{prop[5]}</td>
                              <td key={key} className="text-center">{prop[6]}</td>
                              <td key={key} className="text-center">{prop[7]}</td>
                              <td key={key} className="text-right td-actions">
                                    <a rel="tooltip" title="View" className="btn btn-link btn-info table-action view" href="javascript:void(0)"><i className="fa fa-image"></i></a>

                                    <a rel="tooltip" title="Edit" className="btn btn-link btn-warning table-action edit" href="javascript:void(0)"><i class="fa fa-edit"></i></a>

                                    <a rel="tooltip" title="Remove" className="btn btn-link btn-danger table-action remove" href="javascript:void(0)"><i className="fa fa-trash"></i></a>
                                  </td>
                              </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                    <button  style={{marginLeft:"20px",outline:"none",borderRadius:"19px",padding:"7px",paddingLeft:"13px",border:"2px solid  #777777" ,backgroundColor:"white"}}><span>8<i className="fa fa-sort-asc" aria-hidden="true"></i></span>
            </button>&nbsp;&nbsp;&nbsp;rows visible
            <br></br>
            <div className="pagination">
            <a href="#">&laquo;</a>
            <a href="#">&lsaquo;</a>
            <a href="#" className="active">1</a>
            <a href="#" >2</a>
            <a href="#">&rsaquo;</a>
            <a href="#">&raquo;</a>
            </div>             
</div>}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Icons;
