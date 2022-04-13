import "./NavItem.css";
import { NavLink } from "react-router-dom";


function NavItem(props) {
  return (
    <li className="NavItem">
      <Link to={props.url}>
        {props.children}
      </Link>
    </li>
  );
}

export default NavItem;