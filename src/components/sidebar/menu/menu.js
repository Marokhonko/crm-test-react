import React from "react";
import {NavLink} from "react-router-dom"

class Menu extends  React.Component {
  render() {
    return(
     <div className="menu">
       <nav className="navigation">
         <ul className="menu-block">
           <li className="menu-block__item" ><NavLink to = "/dashboard">Доска</NavLink></li>
           <li className="menu-block__item">Задачи</li>
           <li className="menu-block__item">Сотрудники</li>
           <li className="menu-block__item">Предприятие</li>
         </ul>
       </nav>
     </div>
    );
  }
}

export default Menu;