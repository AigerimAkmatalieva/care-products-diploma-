import "./NavItem.css";
import { NavLink } from "react-router-dom";


function NavItem(props) {
  return (
    <li className="NavItem">
      <NavLink to={props.url}>
        {props.children}
      </NavLink>
    </li>
  );
}

export default NavItem;