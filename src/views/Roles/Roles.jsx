import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import "../Roles/Roles.css";
import Card from "components/Card/Card.jsx";
import "../Icons/Icons.css";
import '../Icons/Icons.css';
import swal from '@sweetalert/with-react'
import axios from 'axios';
class TableList extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      icon: "fa fa-sort",
      rolesData: [],
      rolesHeader: [],
      alert: null
    }
    this.iconclick = this.iconclick.bind(this);
    this.compareBy.bind(this);
    this.sortBy.bind(this);
    this.displaytext.bind(this);
    this.displayedit.bind(this);
    this.displaywarn.bind(this);
    this.update.bind(this);
    this.canceled.bind(this);
  }

  componentDidMount() {
    axios.get(`http://localhost:3300`)
      .then(res => {
        this.setState({
          rolesData: res.data.rolesData,
          rolesHeader: res.data.rolesHeader
        })
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
          axios.get('http://localhost:3300/delete/roles/' + key).then(
            res => {
              console.log("delete->", res.data.rolesData)
              this.setState({
                rolesData: res.data.rolesData
              })
            }
          );
        }
      });
  }

  update(key, selectID1, selectID2) {
    console.log("receive-->>", key, selectID1, selectID2)
    let updateValue1 = document.getElementById(selectID1).value;
    let updateValue2 = document.getElementById(selectID2).value;
    // console.log("eee--->>>",e.options[e.selectedIndex].value);
    swal({
      title: "Updated",
      text: "The function is updated",
      icon: "success",

    });
    axios.get('http://localhost:3300/update/roles/' + key + '/' + updateValue1 + '/' + updateValue2).then(
      res => {
        console.log("delete->", res.data.rolesData)
        this.setState({
          rolesData: res.data.rolesData
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

  displayedit = (key) => {
    let getElementIDs = ["table1", "table2"];
    swal(
      <div>
        <h5 style={{ color: "grey", fontSize: "30px", paddingTop: "20px", textAlign: "left", paddingBottom: "10px" }}>Add Function</h5>
        <h5 style={{ textAlign: "left" }}>Role&nbsp;<span style={{ color: "red" }}>*</span></h5>
        <input type="text" id={getElementIDs[0]} style={{ width: "100%", padding: "10px" }} defaultValue={this.state.rolesData[key][1]} />
        <h5 style={{ textAlign: "left" }}>Function&nbsp;<span style={{ color: "red" }}>*</span></h5>
        <input type="text" id={getElementIDs[1]} style={{ width: "100%", padding: "10px" }} defaultValue={this.state.rolesData[key][2]} />
        <button className="outer" className="btn " style={{ float: "left", color: "white", backgroundColor: "#7cd1f9", marginTop: "30px", outline: "none", border: "none", marginBottom: "20px", width: "120px" }} onClick={() => { this.update(key, getElementIDs[0], getElementIDs[1]) }}>save</button>
        <button className="inner" className="btn btn-danger" style={{ float: "right", color: "white", backgroundColor: "#fa1825", marginTop: "30px", marginBottom: "20px", width: "120px" }} onClick={this.canceled}>cancel</button>
      </div>, {
        buttons: false,
      }
    )
  }

  oncheck(event) {
    console.log("hello")
    const checkboxes = this.form;
    console.log(this.form);
    console.log("checkboxes", checkboxes);
    console.log(checkboxes.name)
    if (checkboxes.name === "pet") {
      event.target.checked
    }
    if (this.state.on === "") {
      this.setState({
        on: "checked",
        on1: "checked"
      })
    }
    if (this.state.on === "checked") {
      this.setState({
        on: "",
        on1: ""
      })
    }
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

  sortBy = (key) => {
    console.log("sortBy", key)
    let arrayCopy = this.state.rolesData;
    if (this.state.icon === "fa fa-sort-desc") {
      console.log("this.state.icon", this.state.icon)
      arrayCopy.reverse(arrayCopy.sort(this.compareBy(key)));
      this.setState({ rolesData: arrayCopy });
    }
    if (this.state.icon === "fa fa-sort-asc") {
      arrayCopy.sort(this.compareBy(key));
      this.setState({ rolesData: arrayCopy });
    }
  }
  displaytext(value) {
    console.log(value)
    console.log(this.state.rolesData)
    console.log(this.state.rolesData[value])
    if (this.state.rolesData && this.state.rolesData.length > 1 && this.state.rolesData[value] && this.state.rolesData[value].length > 1) {
      console.log(this.state.rolesData[value][1])
      swal(
        <div>
          <h5 style={{ color: "grey", fontSize: "30px", paddingTop: "20px" }}>Role Information</h5>
          <h5>
            <b>Name&nbsp;: </b>{this.state.rolesData[value][1]}
          </h5>
          <h5>
            <b>Description&nbsp;: </b>{this.state.rolesData[value][2]}
          </h5>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Functions"
                category="Settings"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <div>
                    <button className="rose" title="Add Function Access" style={{ outline: "none", float: "right", paddingLeft: "15px", paddingRight: "15px", paddingTop: "10px", paddingBottom: "10px", border: "2px solid  #777777", borderRadius: "20px", marginRight: "20px" }}  ><i className="fa fa-user-plus fa-1x "> </i></button>
                    <br></br>
                    <br></br>

                    <button className="rose" title="Toggle" style={{ float: "left", outline: "none", paddingLeft: "15px", paddingRight: "15px", paddingTop: "10px", paddingBottom: "10px", border: "2px solid  #777777", borderRadius: "20px", marginLeft: "20px" }} ><i className="fa fa-th-list fa-1x"> </i></button>

                    <div className="dropdown" style={{ display: "inline" }}>
                      &nbsp;&nbsp;&nbsp;
    <button title="columns" className="btn dropdown-toggle rose " type="button" data-toggle="dropdown" style={{ borderRadius: "30px", padding: "10px" }}><i class="fa fa-columns" aria-hidden="true"></i>
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
                          {this.state.rolesHeader.map((prop, key) => {

                            if (key === 0)
                              return <th key={key} className="text-center"><input type="checkbox" /></th>
                            else if (key === 3)
                              return <th key={key} className="text-right">{prop}</th>;
                            else if (key === 2)
                              return <th key={key} className="text-center">{prop}
                                <button className="ssss" onClick={this.iconclick}>
                                  <i className={this.state.icon}></i>

                                </button>
                              </th>;
                            else
                              return <th key={key} className="text-center">{prop}</th>;
                          })}
                        </tr>

                      </thead>

                      <tbody>
                        {
                          this.state.rolesData.map((prop, key) => {
                            return (
                              <tr key={key}>
                                <td className="text-center"><input type="checkbox" onClick={() => this.rowCheckboxClick(key)} checked={prop[0]} /></td>
                                <td className="text-left left1">{prop[1]}</td>
                                <td className="text-left left2">{prop[2]}</td>
                                <td className="text-right td-actions">
                                  <a rel="tooltip" title="View" className="btn btn-link btn-info table-action view" href="javascript:void(0)"><i className="fa fa-image" onClick
                                    ={() => { this.displaytext(key) }}></i></a>
                                  <a rel="tooltip" title="Edit" className="btn btn-link btn-warning table-action edit" href="javascript:void(0)"><i class="fa fa-edit" onClick={() => { this.displayedit(key) }}></i></a>
                                  <a rel="tooltip" title="Remove" className="btn btn-link btn-danger table-action remove" href="javascript:void(0)"><i className="fa fa-trash" onClick={() => { this.displaywarn(key) }}></i></a>
                                </td>
                              </tr>
                            );
                          })
                        }

                      </tbody>
                    </Table>
                    <button style={{ marginLeft: "20px", outline: "none", borderRadius: "19px", padding: "7px", paddingLeft: "13px", border: "2px solid  #777777", backgroundColor: "white" }}><span>6<i className="fa fa-sort-asc" aria-hidden="true"></i></span>
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

export default TableList;
