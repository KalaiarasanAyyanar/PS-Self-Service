import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import swal from '@sweetalert/with-react'
import OptionsForEdit from "../../components/OptionsForEdit/OptionsForEdit.jsx";
import axios from 'axios'
class Functions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: "fa fa-sort",
      functionsData: [],
      functionsHeader: [],
      headingCheck: false,
      headingClicked: false,
    }
    this.iconclick = this.iconclick.bind(this);
    this.compareBy.bind(this);
    this.sortBy.bind(this);
  }

  componentDidMount(){
    axios.get(`http://localhost:3300`)
      .then(res => {
        console.log("printing", res.data)
        this.setState({
          functionsData: res.data.functionsData,
          functionsHeader: res.data.functionsHeader,
        })
      })
  }

  iconclick() {
    if (this.state.icon === "fa fa-sort") {
      this.setState({
        icon: "fa fa-sort-desc",

      })

    }
    if (this.state.icon === "fa fa-sort-desc") {
      this.setState({
        icon: "fa fa-sort-asc",

      })

    }
    if (this.state.icon === "fa fa-sort-asc") {
      this.setState({
        icon: "fa fa-sort-desc"
      })
    }
    this.sortBy("2");
  }
  compareBy(key) {
    return function (a, b) {
      console.log("a   ", a[key], b[key])
      if (a[key] < b[key]) {

        console.log("b");
        return -1;
      }
      if (a[key] > b[key]) {
        console.log("a");
        return 1;
      }
      return 0;
    };
  }
  headerCheckboxClick = () => {
    let arrayCopy = this.state.functionsData;
    this.setState({
      headingCheck: !this.state.headingCheck
    })
    arrayCopy.map((prop, key) => {
      prop[0] = !this.state.headingCheck;
    })
  }

  rowCheckboxClick = (key) => {
    let arrayCopy = this.state.functionsData;
    arrayCopy[key][0] = !arrayCopy[key][0];
    this.setState({ functionsData: arrayCopy })
    let i;
    for (i = 0; i < arrayCopy.length; i++) {
      if ((arrayCopy[i][0] !== true)) {
        break;
      }
    }
    if (i !== (arrayCopy.length)) {
      this.setState({
        headingCheck: false
      })
    }
    else {
      this.setState({
        headingCheck: true
      })
    }
  }
  sortBy = (key) => {
    console.log("sortBy", key)
    let arrayco = this.state.functionsData;
    if (this.state.icon === "fa fa-sort-desc") {
      console.log("this.state.icon", this.state.icon)
      arrayco.reverse(arrayco.sort(this.compareBy(key)));
      this.setState({ functionsData: arrayco });
    }
    if (this.state.icon === "fa fa-sort-asc") {
      arrayco.sort(this.compareBy(key));
      this.setState({ functionsData: arrayco });
    }
    if (this.state.icon === "fa fa-sort") {
      arrayco.sort(this.compareBy(key));
      this.setState({ functionsData: arrayco });
    }
  }

  
  update(key,selectID1,selectID2) {
    console.log("receive-->>",key,selectID1,selectID2)
    let updateValue1=document.getElementById(selectID1);
    updateValue1=updateValue1.options[updateValue1.selectedIndex].value
    let updateValue2=document.getElementById(selectID2);
    updateValue2=updateValue2.options[updateValue2.selectedIndex].value
    // console.log("eee--->>>",e.options[e.selectedIndex].value);
    swal({
      title: "Updated",
      text: "The function is updated",
      icon: "success",
      
    });
    axios.get('http://localhost:3300/update/functions/'+key+'/'+updateValue1+'/'+updateValue2).then(
      res => {
        console.log("delete->", res.data.functionsData)
        this.setState({
          functionsData: res.data.functionsData
        })
      }
    );
  }
  canceled() {
    swal({
      text: "The updation failed",
      button: true
    })
  }

  displaywarn(key) {
    swal({
      title: "Are you sure?",
      text: "You will not be able to recover this role! ",
      icon: "warning",
      buttons: ["yes,delete it", "cancel"],
      dangerMode: true,
    })
      .then((willDelete) => {
        console.log("willDelete", willDelete)
        if (willDelete) {
        }
        else {
          swal({
            title: "Deleted",
            text: "The role has been deleted",
            icon: "success",

          });
          axios.get('http://localhost:3300/delete/functions/' + key).then(
            res => {
              console.log("delete->", res.data.functionsData)
              this.setState({
                functionsData: res.data.functionsData
              })
            }
          );
        }
      });
  }

  displaytext(key) {
    console.log(key)
    console.log(this.state.functionsData)
    console.log(this.state.functionsData[key])
    if (this.state.functionsData && this.state.functionsData.length > 1 && this.state.functionsData[key] && this.state.functionsData[key].length > 1) {
      console.log(this.state.functionsData[key][1])
      swal(
        <div>
          <h5 style={{ color: "grey", fontSize: "30px", paddingTop: "20px" }}>Role Information</h5>
          <h5>
            <b>Name&nbsp;: </b>{this.state.functionsData[key][1]}
          </h5>
          <h5>
            <b>Description&nbsp;: </b>{this.state.functionsData[key][2]}
          </h5>
        </div>
      )
    }
  }

  displayedit = (key) => {
    let getElementIDs=["table11","table22"];
    swal(
      <div>
        <h5 style={{ color: "grey", fontSize: "30px", paddingTop: "20px", textAlign: "left", paddingBottom: "10px" }}>Add Function</h5>
        <h5 style={{ textAlign: "left" }}>Role&nbsp;<span style={{ color: "red" }}>*</span></h5>
        <OptionsForEdit array={this.state.functionsData} position={1} idForChild={getElementIDs[0]}></OptionsForEdit>
        <h5 style={{ textAlign: "left" }}>Function&nbsp;<span style={{ color: "red" }}>*</span></h5>
        <OptionsForEdit array={this.state.functionsData} position={2} idForChild={getElementIDs[1]}></OptionsForEdit>
        <button className="outer" className="btn " style={{ float: "left", color: "white", backgroundColor: "#7cd1f9", marginTop: "30px", outline: "none", border: "none", marginBottom: "20px", width: "120px" }} onClick={()=>{this.update(key,getElementIDs[0],getElementIDs[1])}}>save</button>
        <button className="inner" className="btn btn-danger" style={{ float: "right", color: "white", backgroundColor: "#fa1825", marginTop: "30px", marginBottom: "20px", width: "120px" }} onClick={this.canceled}>cancel</button>
      </div>, {
        buttons: false,
      }
      )
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
                    <button className="rose" title="Add Role" style={{ outline: "none", float: "right", paddingLeft: "15px", paddingRight: "15px", paddingTop: "10px", paddingBottom: "10px", border: "2px solid  #777777", borderRadius: "20px", marginRight: "20px" }}  ><i className="fa fa-user-plus fa-1x "> </i></button>
                    <br></br>
                    <br></br>
                    <button className="rose" title="Toggle" style={{ outline: "none", float: "left", paddingLeft: "15px", paddingRight: "15px", paddingTop: "10px", paddingBottom: "10px", border: "2px solid  #777777", borderRadius: "20px", marginLeft: "20px" }}  ><i className="fa fa-th-list fa-1x"> </i></button>

                    <div className="dropdown" style={{ display: "inline" }}>
                      &nbsp;&nbsp;&nbsp;
    <button title="columns" className="btn dropdown-toggle rose" type="button" data-toggle="dropdown" style={{ borderRadius: "30px", padding: "10px", borderColor: "rgb(119, 119, 119)" }}><i class="fa fa-columns" aria-hidden="true"></i>
                        <i className="fa fa-sort-desc" aria-hidden="true"></i></button>
                      <ul className="dropdown-menu" style={{ right: "600px", left: "0px", width: "50px", top: "28px" }}>
                        <li style={{ borderBottom: "1px solid #eee" }}><a href="#"><input type="checkbox" checked />&nbsp;ROLE</a></li>
                        <li style={{ borderBottom: "1px solid #eee" }}><a href="#"><input type="checkbox" checked />&nbsp;FUNCTION</a></li>
                        <li style={{ borderBottom: "1px solid #eee" }}><a href="#"><input type="checkbox" checked />&nbsp;ACTION</a></li>
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

                          {this.state.functionsHeader.map((prop, key) => {
                            console.log(key);
                            if (key === 0)
                              return <th key={key} className="text-center"><input type="checkbox" name="listItem" onClick={this.headerCheckboxClick} checked={this.state.headingCheck} />
                              </th>
                            else if (key === 2)
                              return <th key={key} className="text-left left2">{prop}
                                <button className="ssss" onClick={this.iconclick}>

                                  <i className={this.state.icon}></i>
                                </button>

                              </th>;

                            else if (key === 3)
                              return <th key={key} className="text-right">{prop}</th>;
                            else
                              return <th key={key} className="text-left left1">{prop}</th>;
                          })}
                        </tr>

                      </thead>

                      <tbody>
                        {this.state.functionsData.map((prop, key) => {
                          return (
                            <tr>
                              <td key={key} className="text-center"><input type="checkbox" onClick={() => this.rowCheckboxClick(key)} checked={prop[0]} /></td>
                              <td key={key} className="text-left left1">{prop[1]}</td>
                              <td key={key} className="text-left left2">{prop[2]}</td>
                              <td className="text-right td-actions">
                                <a rel="tooltip" title="View" className="btn btn-link btn-info table-action view" href="javascript:void(0)"><i className="fa fa-image" onClick
                                ={() => { this.displaytext(key) }}></i></a>
                                <a rel="tooltip" title="Edit" className="btn btn-link btn-warning table-action edit" href="javascript:void(0)"><i class="fa fa-edit" onClick={() => { this.displayedit(key) }}></i></a>
                                <a rel="tooltip" title="Remove" className="btn btn-link btn-danger table-action remove" href="javascript:void(0)"><i className="fa fa-trash" onClick={()=>{this.displaywarn(key)}}></i></a>
                                </td>
                              
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>

                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Functions;
