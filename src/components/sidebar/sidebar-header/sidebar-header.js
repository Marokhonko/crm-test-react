import React from "react";

class SidebarHeader extends  React.Component {

  render() {
    return(
     <div className="sidebar-header">
       <div className="sidebar-avatar">
         <img className="sidebar-avatar__img" src= "/img/avatar.png" alt="avatar" />
       </div>
       <div className="sidebar-info">
         <div className="sidebar-info__name">Имя пользователя</div>
         <div className="sidebar-info__prof">Должность</div>
       </div>
     </div>
    );
  }
}
export default SidebarHeader;