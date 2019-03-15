import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import "./ManageApplications.css"
class ManageApplications extends React.Component{
    render() {
        return (
          <div className="content">
            <Grid fluid>
              <Row>
                <Col md={12}>
                  <Card style={{marginBottom:"0px"}}
                    title="Manage Applications"
                    category="Settings"
                   content={
    //                  <div>
                    
    
    //   <a className="btn btn-primary" style={{width:"100%",backgroundColor:"white",color:"black",border:"none",fontSize:"17px",fontWeight:"light",padding:"0px"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" >
    //   <span style={{float:"left"}}>Google Analytics</span> <i className="fa fa-sort-desc" style={{float:"right"}}></i>
       
    //   </a>
    //   <hr style={{marginTop:"15px"}}></hr>
    //   <div className="collapse" id="collapseExample" style={{border:"none",backgroundColor:"white"}}>
    //   <div className="card card-body" style={{border:"none",backgroundColor:"white"}}>
    //     {/* Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. */}
    //     <table style={{width:"100%"}}>
    //     <thead>
    //     <col width="50%" />
    //   <col width="50%" />
    //       <tr>
    //         <th>APPLICATION</th>
    //         <th>VIEW ID</th>
           
    //       </tr>
    //     </thead>
    //     <tbody>
    //       <tr>
    //         <td>purpleslate New</td>
    //         <td>183045738</td>
            
    //       </tr>
         
         
    //     </tbody>
    //   </table>
    //   </div>
    // </div>
    
    
    // <a className="btn btn-primary" style={{width:"100%",backgroundColor:"white",color:"black",border:"none",fontSize:"17px",fontWeight:"light",padding:"0px"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" >
    //   <span style={{float:"left"}}>Twilio</span> <i className="fa fa-sort-desc" style={{float:"right"}}></i>
       
    //   </a>
    //   <hr style={{marginTop:"15px"}}></hr>
    //   <div className="collapse" id="collapseExample">
    //   <div className="card card-body">
    //   Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
    //    </div>
    // </div>
    
    
    
    // <a class="btn btn-primary" style={{width:"100%",backgroundColor:"white",color:"black",border:"none",fontSize:"17px",fontWeight:"light",padding:"0px"}} data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" >
    //   <span style={{float:"left"}}>Zoho</span> <i className="fa fa-sort-desc" style={{float:"right"}}></i>
       
    //   </a>
    //   <hr style={{marginTop:"15px"}}></hr>
    //   <div className="collapse" id="collapseExample">
    //   <div className="card card-body">
    //     Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
    //   </div>
    // </div>
    // </div>
    
    <div id="accordion">
      <div className="card">
        <div className="card-header" id="headingOne">
          <h5 className="mb-0" style={{marginTop:"0px",marginBottom:"0px"}}>
            <button style={{width:"100%",backgroundColor:"white",color:"black",border:"none",fontSize:"17px",fontWeight:"light",padding:"0px"}}class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseTwo">
            <span style={{float:"left"}}>Google Analytics</span> <i className="fa fa-sort-desc" style={{float:"right"}}></i>
       
            </button>
          </h5>
        </div>
        <hr style={{marginTop:"5px",marginBottom:"0px"}}></hr>
        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
          <div className="card-body">
        
          <center>
          <table style={{width:"100%"}}>
        
      
        <tr style={{borderLeft:"none",borderRight:"none",borderBottom:"1px solid #dcdcdc"}}>
          <th style={{textAlign:"left",padding:"15px",fontWeight:"250"}} >
           Application
          </th>
          <th style={{fontWeight:"200"}}>
            View ID
          </th>
        </tr>
        <tr>
          <td style={{padding:"10px",fontWeight:"200",fontSize:"15px"}}>purpleslate New</td>
          <td  style={{fontWeight:"200",fontSize:"15px"}}>183045738</td>
        </tr>
      </table>
          </center>
    
        {/* <a href="#" title="Google+" className="btn btn-googleplus btn-lg"><i className="fa fa-google-plus fa-fw"></i> Google+</a> */}
       <br></br>   
       <button className="googlework" style={{border:"1px solid #DD4B39",borderRadius:"3px",padding:"10px",outline:"none"}}><i className="googlein" className="fa fa-google-plus-square"></i>&nbsp;Google</button>
         
    
    
            </div>
        </div>
      </div>
      
      
      
      
       <div className="card">
        <div className="card-header" id="headingTwo">
          <h5 className="mb-0" style={{marginTop:"0px",marginBottom:"0px"}}>
            <button style={{width:"100%",backgroundColor:"white",color:"black",border:"none",fontSize:"17px",fontWeight:"light",padding:"0px"}} class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <span style={{float:"left"}}>Twilio</span> <i className="fa fa-sort-desc" style={{float:"right"}}></i>
        
            </button>
          </h5>
        </div>
        <hr style={{marginTop:"5px",marginBottom:"0px"}}></hr>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
          <div className="card-body">
          <br></br>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </div>
        </div>
      </div>
    
    
    
    
      <div className="card">
        <div className="card-header" id="headingThree">
          <h5 className="mb-0" style={{marginTop:"5px",marginBottom:"0px"}}>
            <button style={{width:"100%",backgroundColor:"white",color:"black",border:"none",fontSize:"17px",fontWeight:"light",padding:"0px"}}class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <span style={{float:"left"}}>Zoho</span> <i className="fa fa-sort-desc" style={{float:"right"}}></i>
       
            </button>
          </h5>
        </div>
        <hr style={{marginTop:"0px",marginBottom:"0px"}}></hr>
        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
          <div className="card-body">
          <br></br>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </div>
        </div>
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

export default ManageApplications;