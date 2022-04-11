import "./NavItem.css";

function NavItem(props) {
 
  return (
    <li className="NavItem">
      <a href={props.url}>{props.children}</a>
    </li>
  )
}

export default NavItem;