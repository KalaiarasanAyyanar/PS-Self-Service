import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NotificationSystem from "react-notification-system";

import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";

import { style } from "variables/Variables.jsx";

import dashboardRoutes from "routes/dashboard.jsx";
import "./Dashboard.css"
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovering:false,
      isCollapseOnButtonClick:false,
      isCollapsed: false,
    };
  }
  
  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
    }
    if (e.history.action === "PUSH") {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.mainPanel.scrollTop = 0;
    }
  }
  handleCollapseButtonClick = () => {
    this.setState({
      isCollapseOnButtonClick:!this.state.isCollapseOnButtonClick,
      isCollapsed : !this.state.isCollapsed})
  }

  collapseSideBarOnHover = () => {
    this.setState({
      hovering : !this.state.hovering})
  }

  collapseSideBar = () => {
    if(this.state.isCollapseOnButtonClick){
    this.setState({isCollapsed : !this.state.isCollapsed})
  }
  }

  render() {
   return (
      <div className="wrapper">
        <NotificationSystem ref="notificationSystem" style={style} />
        <Sidebar 
        {...this.props} 
        collapseSideBarOnHover={this.collapseSideBarOnHover} 
        collapseSideBar={this.collapseSideBar} 
        isCollapsed={this.state.isCollapsed} 
        hovering={this.state.hovering} 
        isCollapseOnButtonClick={this.state.isCollapseOnButtonClick}
        />
        <div id={(!this.state.isCollapsed)?"main-panel ":" main-panel main-panel-collapse"} className={(!this.state.isCollapsed)?"main-panel ":"main-panel main-panel-collapse"} ref="mainPanel">
          <Header {...this.props} handleCollapseButtonClick={this.handleCollapseButtonClick} />
          <Switch>
            {dashboardRoutes.map((prop, key) => {
              if (prop.name === "Notifications")
                return (
                  <Route
                    path={prop.path}
                    key={key}
                    render={routeProps => (
                      <prop.component
                        {...routeProps}
                      />
                    )}
                  />
                );
              if (prop.redirect)
                return <Redirect from={prop.path} to={prop.to} key={key} />;
              return (
                <Route path={prop.path} component={prop.component} key={key} />
              );
            })}
          </Switch>
        </div>
      </div>
    );
  }
}

export default Dashboard;