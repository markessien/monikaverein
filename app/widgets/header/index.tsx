import MobileDropdown from "./components/MobileDropdown";
import NavItemList from "./components/NavItemList";
import SearchAction from "./components/SearchAction";

const Header = () => {
  return (
    <header className="navbar bg-base-100 lg_up:px-24 py-5 md:px-5">
      <MobileDropdown />

      <div className="navbar-start">
        <a className="btn btn-ghost text-black text-4xl font-inter font-black">
          LOGO
        </a>
      </div>

      <NavItemList />

      <div className="navbar-end">
        <SearchAction />

        <a className="btn btn-error text-white">Donate Now</a>
      </div>
    </header>
  );
};

export default Header;
