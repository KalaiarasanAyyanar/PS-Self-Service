import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col, Table } from "react-bootstrap";
import "./DashboardMap.css";
import "./Dashboard.css";
import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";
import imageUSA from "./photos/iconfinder_flag-usa_748050.png";
import imageAustralia from "./photos/iconfinder_flag-australia_748002.png";
import imageBrazil from "./photos/iconfinder_flag-brazil_748057.png";
import imageGermany from "./photos/iconfinder_flag-germany_748067.png";
import imageRomania from "./photos/iconfinder_flag-romania2x_748052.png";
import imageUK from "./photos/iconfinder_flag-united-kingdom_748024.png";
import {
} from "variables/Variables.jsx";
import {VectorMap,handleClick } from "react-jvectormap";
import axios from "axios";
class Dashboard extends Component {
  constructor(){
    super();
    this.state={
      tdArrayMap:[],
      persons:{},
    }
    axios.get(`http://localhost:3300`)
      .then(res => {
        console.log("printing",res.data)
        this.setState({
          persons:res.data,
          tdArrayMap:res.data.tdArrayMap,
        })
      })
  }
  createLegend(json) {
    console.log("json------",json)
    if(json==={})
    {console.log("json",json)
    var legend = [];
    for (var i = 0; i < json.names.length; i++) {
      var type = "fa fa-circle text-" + json.types[i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json.names[i]);
    }
    return legend;}
  }
 
  render() {
    
    console.log("render")
    console.log("printing render",this.state.persons.dataSales)
    const mapData = { 
      US:"rgb(68, 68, 68)",
       CA:"rgb(170, 170, 170)",
       BR:"rgb(129, 129, 129)",
       GB:"rgb(122, 122, 122)",
       DE:"rgb(100, 100, 100)",
       FR:"rgb(130, 130, 130)",
       RO:"rgb(127, 127, 127)",
       RU:"rgb(147, 147, 147)",
       GR:"rgb(158, 158, 158)",
       IN:"rgb(158, 158, 158)",
       AU:"rgb(119, 119, 119)",
};
    const Flags = ["", imageUSA, imageGermany, imageAustralia, imageUK, imageRomania, imageBrazil];
    let i = 0; console.log("length->",this.state.persons!=={})
    return (
      <div>
    { 
     
      (this.state.persons!=={})&&
      <div className="content">
        <Grid fluid>
        {console.log("dataInside",this.state.persons)}
          <Row>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<svg width="50px" height="50px" viewBox="0 0 500 500">
                <path fill="orange" xmlns="http://www.w3.org/2000/svg" d="M411.75,250.2h-185.6V64.6c0-7.5-6-13.5-13.5-13.5c-117.2,0-212.6,95.4-212.6,212.6s95.4,212.6,212.6,212.6    s212.6-95.4,212.6-212.6C425.25,256.3,419.15,250.2,411.75,250.2z M212.65,449.3c-102.3,0-185.6-83.3-185.6-185.6    c0-97.8,76-178.2,172.1-185.1v185.1c0,7.5,6,13.5,13.5,13.5h185.1C390.85,373.3,310.45,449.3,212.65,449.3z" />
                <path fill="orange" xmlns="http://www.w3.org/2000/svg" d="M476.25,211.9c-0.2-51.6-19.1-101.3-53.2-140C382.65,26.2,324.65,0,263.65,0c-7.5,0-13.5,6-13.5,13.5v199.1    c0,7.5,6,13.5,13.5,13.5h199.1l0,0c7.5,0,13.5-6,13.5-13.5C476.25,212.4,476.25,212.2,476.25,211.9z M277.15,199.2V27.6    c48.2,3.5,93.4,25.8,125.6,62.3c27,30.5,43,68.9,46,109.3H277.15z" />
              </svg>}
                statsText="Capacity"
                statsValue="105GB"
                statsIcon={<i className="fa fa-refresh1" />}
                statsIconText="Updated now"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<svg width="50px" height="50px" viewBox="0 0 500 500">
                <path fill="green" xmlns="http://www.w3.org/2000/svg" d="m272.449219 83.378906c-13.015625-12.980468-34.082031-12.980468-47.09375 0l-17.929688 17.933594c-7.769531 7.792969-13.742187 17.195312-17.496093 27.539062l-34.792969 96.324219-139.390625 139.386719c-21.105469 21.152344-21.105469 55.398438 0 76.554688l41.8125 41.804687c21.152344 21.109375 55.40625 21.109375 76.558594 0l139.269531-139.261719 96.636719-35.167968c10.210937-3.734376 19.5-9.632813 27.226562-17.296876l17.945312-17.84375c13.039063-12.972656 13.097657-34.058593.125-47.097656l-.0625-.0625zm-155.96875 381.910156c-11.40625 11.382813-29.871094 11.382813-41.28125 0l-41.808594-41.8125c-11.382813-11.40625-11.382813-29.875 0-41.285156l132.046875-132.046875 83.332031 82.851563zm281.125-209.628906-17.945313 17.851563c-5.15625 5.109375-11.359375 9.042969-18.171875 11.539062l-91.941406 33.457031-89.472656-88.964843 33.3125-92.222657c2.507812-6.898437 6.492187-13.171874 11.675781-18.375l17.933594-17.929687c3.257812-3.265625 8.546875-3.269531 11.816406-.011719l.007812.011719 142.800782 142.800781c3.261718 3.265625 3.261718 8.558594 0 11.828125l-.019532.019531zm0 0" />
                <path fill="green" xmlns="http://www.w3.org/2000/svg" d="m188.375 310.292969c-4.867188-4.867188-12.761719-4.867188-17.632812 0l-30.316407 30.324219c-4.769531 4.882812-4.714843 12.691406.105469 17.519531 4.828125 4.828125 12.636719 4.875 17.527344.113281l30.316406-30.324219c4.871094-4.871093 4.871094-12.761719 0-17.632812zm0 0" />
                <path fill="green" xmlns="http://www.w3.org/2000/svg" d="m379.710938 131.429688c3.304687.003906 6.480468-1.308594 8.816406-3.648438l42.851562-42.855469c4.710938-4.894531 4.636719-12.660156-.164062-17.460937-4.804688-4.804688-12.566406-4.878906-17.460938-.171875l-42.855468 42.851562c-3.566407 3.5625-4.632813 8.925781-2.703126 13.589844 1.929688 4.65625 6.472657 7.695313 11.515626 7.695313zm0 0" />
                <path fill="green" xmlns="http://www.w3.org/2000/svg" d="m482.480469 159.902344-42.855469 13.390625c-6.570312 2.054687-10.238281 9.050781-8.183594 15.625 2.058594 6.570312 9.050782 10.234375 15.621094 8.179687l42.855469-13.390625c6.574219-2.054687 10.238281-9.050781 8.183593-15.621093-2.054687-6.574219-9.050781-10.238282-15.621093-8.183594zm0 0" />
                <path fill="green" xmlns="http://www.w3.org/2000/svg" d="m309.753906 67.226562c6.566406 2.058594 13.558594-1.589843 15.617188-8.152343l.011718-.03125 13.386719-42.847657c2.058594-6.578124-1.605469-13.570312-8.179687-15.621093-6.574219-2.054688-13.566406 1.605469-15.621094 8.175781l-13.390625 42.855469c-2.054687 6.574219 1.605469 13.570312 8.175781 15.621093zm0 0" />
              </svg>}
                statsText="Revenue"
                statsValue="$1,345"
                statsIcon={<i className="fa fa-calendar-o1" />}
                statsIconText="Last day"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="fas fa-bezier-curve text-danger" />}
                statsText="Errors"
                statsValue="23"
                statsIcon={<i className="fa fa-clock-o1" />}
                statsIconText="In the last hour"
              />
            </Col>
            <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<svg width="46px" height="40px" viewBox="0 0 500 500">
                <path fill="blue" xmlns="http://www.w3.org/2000/svg" d="M378.667,21.333c-56.792,0-103.698,52.75-122.667,77.646c-18.969-24.896-65.875-77.646-122.667-77.646    C59.813,21.333,0,88.927,0,172c0,45.323,17.99,87.562,49.479,116.469c0.458,0.792,1.021,1.521,1.677,2.177l197.313,196.906    c2.083,2.073,4.802,3.115,7.531,3.115s5.458-1.042,7.542-3.125L467.417,283.74l2.104-2.042c1.667-1.573,3.313-3.167,5.156-5.208    c0.771-0.76,1.406-1.615,1.896-2.542C499.438,245.948,512,209.833,512,172C512,88.927,452.188,21.333,378.667,21.333z     M458.823,261.948c-0.292,0.344-0.563,0.708-0.802,1.083c-1,1.146-2.094,2.156-3.177,3.188L255.99,464.927L68.667,277.979    c-0.604-1.188-1.448-2.271-2.479-3.177C37.677,249.906,21.333,212.437,21.333,172c0-71.313,50.24-129.333,112-129.333    c61.063,0,113.177,79.646,113.698,80.448c3.938,6.083,14,6.083,17.938,0c0.521-0.802,52.635-80.448,113.698-80.448    c61.76,0,112,58.021,112,129.333C490.667,205.604,479.354,237.552,458.823,261.948z" />
              </svg>}
                statsText="Followers"
                statsValue="+45"
                statsIcon={<i className="fa fa-refresh1" />}
                statsIconText="Updated now"
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Card
                className="cardMap"
                title={<h4><div className='titleCard'>Global Sales by Top Locations</div></h4>}
                category="All products that were shipped"
                icon="fa-address-book"
                ctTableResponsive
                style={{ width: "100%" }}
                content={
                  <div style={{ width: "100px", display: "flex", flexDirection: "row" }} >
                    <div>
                      <Table style={{ width: "500px" }}>
                        <tbody className="tableBody">

                          {this.state.tdArrayMap.map((prop, key) => {
                            return (
                              <tr key={key} className="tableRowCard">
                                {prop.map((prop, key) => {
                                  if (key === 0) {
                                    i++;
                                    return <td className="cardTable" key={key}><img className="cardImages" src={Flags[i]} style={{
                                      width: "20px"
                                      , height: "14px", padding: "0px"
                                    }} /></td>
                                  }
                                  if (key === 1) {
                                    return <td className="cardItems" key={key}>{prop}</td>;
                                  }
                                  if (key === 2) {
                                    return <td className="cardPoint" key={key}>{prop}</td>;
                                  }
                                  if (key === 3) {
                                    return <td className="cardPercentage" key={key}>{prop}</td>;
                                  }
                                })}
                              </tr>
                            );

                          })}


                        </tbody>
                      </Table>
                    </div>
                    <div style={{ width: "500px", height: "300px" }} className="vectorMapCard">
                    <p style={{width:"600px"}}></p>
                         <VectorMap
      map={"world_mill"}
      backgroundColor="transparent" //change it to blue !!!
      zoomOnScroll={false}
      containerStyle={{
        width: "100%",
        height: "290px"
      }}
      onRegionClick={handleClick}  //gets the country code
      containerClassName="map"
      regionStyle={{
        initial: {
          fill: "#dcdcdc",
          "fill-opacity": 1.9,
          stroke: "none",
          "stroke-width": 0,
          "stroke-opacity": 0
        },
        hover: {
          "fill-opacity": 0.8,
          cursor: 'pointer'
        },
        selected: {
          fill: '#dcdcdc'  //what colour clicked country will be
        },
        selectedHover: {
        }      
      }}
      regionsSelectable={false}
      series={{
        regions: [
          {
            values: mapData,  //this is your data
             //your color game's here
          }
        ]
      }}
    />
                    </div>
                  </div>
                }
              />

            </Col>


          </Row>
          <Row>
            
            <Col md={4}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Email Statistics"
                category="Last Campaign Performance"
                stats="Campaign sent 2 days ago"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={this.state.persons.dataPie} type="Pie" />
                  </div>
                }
                
                legend={
                  <div className="legend">{this.createLegend(this.state.legendPie)}</div>
                }
              />
            </Col>
            <Col md={8}>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="Users Behavior"
                category="24 Hours performance"
                stats="Updated 3 minutes ago"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={this.state.persons.dataSales}
                      type="Line"
                      options={this.state.persons.optionsSales}
                      responsiveOptions={this.state.persons.responsiveSales}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(this.state.legendSales)}</div>
                }
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Card
                id="chartActivity"
                title="2014 Sales"
                category="All products including Taxes"
                stats="Data information certified"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={this.state.persons.dataBar}
                      type="Bar"
                      options={this.state.persons.optionsBar}
                      responsiveOptions={this.state.persons.responsiveBar}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(this.state.legendBar)}</div>
                }
              />
            </Col>

            <Col md={6}>
              <Card
                title="Tasks"
                category="Backend development"
                stats="Updated 3 minutes ago"
                statsIcon="fa fa-history"
                content={
                  <div className="table-full-width">
                    <table className="table">
                      <Tasks />
                    </table>
                  </div>
                }
              />
            </Col>
          </Row>
     
        </Grid>
      </div>
  }
      </div>
    );
  }
}

export default Dashboard;
