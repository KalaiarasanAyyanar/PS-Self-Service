import DashBoard from "views/Dashboard/Dashboard";
import Functions from "../views/Functions/Functions.jsx";
import Roles from "../views/Roles/Roles.jsx";
import ManageApplications from "../views/ManageApplications/ManageApplications.jsx"
import Logout from "../views/Logout/Logout.jsx"
import SmallTalk from "../views/SmallTalk/SmallTalk.jsx"

const dashboardRoutes = [
  {
    path: "/smalltalk",
    name: "SMALL TALK",
    icon: "fas fa-comment-alt",
    component: SmallTalk,
    hidden:false
  },
  {
    path: "/functions",
    name: "FUNCTIONS",
    icon: "fas fa-user-friends",
    component: Functions,
    hidden:false
  },
  {
    path: "/roles",
    name: "ROLES",
    icon: "fas fa-users-cog",
    component: Roles,
    hidden:false
  },
  {
     path: "/manageapplications",
     name: "MANAGE APPLICTIONS",
     icon: "fas fa-layer-group",
     component: ManageApplications,
     hidden:false
  },
  {
    path: "/log-out",
    name: "LOGOUT",
    userName:"ADMIN",
    icon: "fas fa-sign-out-alt",
    component: Logout,
    hidden:false
  },
  {
    path: "/",
    component: DashBoard,
    hidden:true
  }
];

export default dashboardRoutes;



