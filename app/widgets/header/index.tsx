import MobileDropdown from "./components/MobileDropdown";
import NavItemList from "./components/NavItemList";
import SearchAction from "./components/SearchAction";
import Image from "next/image";
import spendenSiegel from "./images/spenden-siegel.png";

const Header = () => {
  return (
    <header className="navbar bg-base-100 lg_up:px-20 py-5 md:px-5">
      <MobileDropdown />

      <div className="navbar-start">
        <a className="btn btn-ghost text-black text-4xl font-inter font-black">
          LOGO
        </a>

        <div className="shrink-0 ml-5 lg_up:flex lg:hidden">
          <NavItemList />
        </div>
      </div>

      <div className="navbar-end">
        <SearchAction />

        <button className="btn btn-error text-white mr-4 ml-10 md:ml-4">
          Donate Now
        </button>

        <Image src={spendenSiegel} alt="" height={50} />
      </div>
    </header>
  );
};

export default Header;
