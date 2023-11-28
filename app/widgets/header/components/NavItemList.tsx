import { NavList } from "../constant";
import { NavItem } from "./NavItem";

const NavItemList = () => {
  return (
    <div className="navbar-center lg_up:flex lg:hidden">
      <ul className="menu menu-horizontal px-1">
        {NavList.map((item) => (
          <li key={item.name}>
            <NavItem name={item.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavItemList;
