import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import HeaderLinks from "../Header/HeaderLinks.jsx";
import Collapsible from 'react-collapsible'
import imagine from "assets/img/sidebar-3.jpg";
import ReactTooltip from "react-tooltip";
import "./Sidebar.css";
import dashboardRoutes from "routes/dashboard.jsx";

const logo = "https://test-purpleslate.in/psselfservice/assets/img/psSidebar.png";

const sidebarBackground = {
  backgroundImage: "url(" + imagine + ")"
};


class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarExists: true,
      openOnClick: true,
      voiceInputOn: false,
      width: window.innerWidth,
    };
  }

  handleVoiceInputClick = (e) => {
    this.setState({
      voiceInputOn: !this.state.voiceInputOn
    })
  }

  handleSidebarMouseEnter = () => {
    if (this.props.isCollapseOnButtonClick) {
      this.props.collapseSideBarOnHover();
    }
  };
  handleSidebarMouseLeave = () => {
    if (this.props.isCollapseOnButtonClick) {
      this.props.collapseSideBarOnHover();
    }
  };

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  render() {

    return (
      <div>
         { console.log("innerWidth->",window.innerWidth)}
        <div
          id="sidebar"
          className={(window.innerWidth>991)?(this.props.isCollapseOnButtonClick?(this.props.hovering?"sidebar":"sidebarMinimized sidebar" ):"sidebar"):"sidebar"}
          style={{ height: "1000px"}}
          data-color="purple"
          data-image={imagine}
          onMouseEnter={this.handleSidebarMouseEnter}
          onMouseLeave={this.handleSidebarMouseLeave}
        >
          <div className="sidebar-background" style={sidebarBackground} />
          <div className={(window.innerWidth>991)?(this.props.isCollapseOnButtonClick?(this.props.hovering?"sidebar-wrapper":"sidebarMinimized sidebar-wrapper" ):"sidebar-wrapper"):"sidebar-wrapper"}>
            <div className="logo">
              <a
                href="https://www.purpleslate.io/"
                className="simple-text logo-mini"
              >
                <div>
                  <img className="ps-logo" src={logo} alt="logo_image" />
                </div>
              </a>
              <a
                className={(window.innerWidth>991)?(this.props.isCollapseOnButtonClick?(this.props.hovering?"simple-text logo-normal":"noFont" ):"simple-text logo-normal"):"simple-text logo-normal"}
              >
                PURPLESLATE
          </a>
              <hr className="HIconLine" />
            </div>
            <div className="user">
              <div className="info ">
                <Collapsible trigger={
                  <div className="mainContainerAdmin">
                    <div className="userImageContainer">
                      <img className="sidebarAdminImg" src="&#10;                        data:image/PNG;base64,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"></img>
                    </div>
                    <a data-toggle="collapse" href="#collapseExample" className="collapsed" style={{ paddingBottom: "10px" }}>
                      <p className=
                      {(window.innerWidth>991)?(this.props.isCollapseOnButtonClick?(this.props.hovering?"simple-texts logo-normal":"noFont" ):"simple-texts logo-normal"):"simple-texts logo-normal"}
                      >admin
                        <b className="caret carets"></b>
                      </p>
                    </a>
                  </div>
                }>
                  <div className="userDropdownContainer">
                    <a data-toggle="collapse" href="#collapseExample" className="collapsed" style={{ paddingBottom: "10px" }}>
                      <p className={(window.innerWidth>991)?(this.props.isCollapseOnButtonClick?(this.props.hovering?"simple-texts logo-normal":"noFont" ):"simple-texts logo-normal"):"simple-texts logo-normal"}>MP
                    </p>
                    </a>
                    <a data-toggle="collapse" href="#collapseExample" className="collapsed" style={{ paddingBottom: "10px", paddingLeft: "20px" }}>
                      <p className={(window.innerWidth>991)?(this.props.isCollapseOnButtonClick?(this.props.hovering?"simple-texts logo-normal":"noFont" ):"simple-texts logo-normal"):"simple-texts logo-normal"}>MY PROFILE
                    </p>
                    </a>
                  </div>
                </Collapsible>
              </div>
            </div>
            <hr className={(window.innerWidth>991)?(this.props.isCollapseOnButtonClick?(this.props.hovering?"HAdminLine":"HAdminLineCollapsed" ):"HAdminLine"):"HAdminLine"}/>
            <ul className="nav">
              {this.state.width <= 991 ? <HeaderLinks parent="sidebar"/> : null}
              {dashboardRoutes.map((prop, key) => {
                if (!prop.redirect && !prop.hidden)
                  return (
                    <li
                      className={
                        prop.upgrade
                          ? "active active-pro"
                          : this.activeRoute(prop.path)
                      }
                      key={key}
                    >
                      <NavLink
                        to={prop.path}
                        className={(window.innerWidth>991)?(this.props.isCollapseOnButtonClick?(this.props.hovering?"nav-link":"nav-link-collapsed" ):"nav-link"):"nav-link"}
                        activeClassName="active"
                      >
                        <div className={(window.innerWidth>991)?(this.props.isCollapseOnButtonClick?(this.props.hovering?"":"iconCollapsed" ):""):""}>
                          <i className={prop.icon} style={{ fontSize: '1.1em', marginRight: "20px" }} />
                        </div>
                        <p className={(window.innerWidth>991)?(this.props.isCollapseOnButtonClick?(this.props.hovering?"LinksFontSize":"noFont" ):"LinksFontSize"):""}>{prop.name}</p>
                        {(prop.hasOwnProperty("userName")) &&
                          <p className={(window.innerWidth>991)?(this.props.isCollapseOnButtonClick?(this.props.hovering?"logged-user":"noFont" ):"logged-user"):"logged-user"}>{prop.userName}</p>}
                      </NavLink>
                    </li>
                  );
                return null;
              })}
            </ul>
            <div className={(window.innerWidth>991)?(this.props.isCollapseOnButtonClick?(!this.props.hovering?"sidebarMiccollapsed":"sidebarMic" ):"sidebarMic"):"sidebarMic"}>
              <i className={this.state.voiceInputOn ? "fas fa-microphone-slash" : "fas fa-microphone"} onClick={this.handleVoiceInputClick}></i>
            </div>
            <div>
              <textarea className="phraseBox"></textarea>
            </div>
            <div className="tool-tip-icon">
              <i data-tip="React-tooltip" className="fas fa-question">
              </i>
              <ReactTooltip style={{ margin: "0px", padding: "0px" }} >
                <div className="tool-tip">
                  <p className="something">Some things you can ask me:</p>
                  <center>
                    Open Chatter!
                <br />
                    <i className='fas fa-comment-alt'>
                    </i>
                    <br />
                    Open Functions!
                <br />
                    <i className='fas fa-user-friends'>
                    </i>
                    <br />
                    Open Users!
                <br />
                    <i className='fas fa-user'>
                    </i>
                    <br />
                    Open Roles!
                <br />
                    <i className='fas fa-users-cog'>
                    </i>
                    <br />
                    Log out!
                <br />
                    <i className='fas fa-sign-out-alt'>
                    </i>
                    <br />
                  </center>
                </div>
              </ReactTooltip>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;