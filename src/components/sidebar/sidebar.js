import React from "react";
import SidebarHeader from "./sidebar-header/sidebar-header"
import Menu from "./menu/menu";


class Sidebar extends  React.Component {
  render() {
    return(
     <div className="sidebar">
        <SidebarHeader/>
        <Menu/>
     </div>
    );
  }
}
export default Sidebar;