import { NavList } from "../constant";
import { NavItem } from "./NavItem";

const NavItemList = () => {
  return (
    <ul className="menu menu-horizontal px-1">
      {NavList.map((item) => (
        <li key={item.name}>
          <NavItem {...item} />
        </li>
      ))}
    </ul>
  );
};

export default NavItemList;
