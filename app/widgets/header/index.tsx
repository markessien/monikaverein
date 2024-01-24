import MobileDropdown from "./components/MobileDropdown";
import NavItemList from "./components/NavItemList";
import SearchAction from "./components/SearchAction";
import Image from "next/image";
import spendenSiegel from "./images/spenden-siegel.png";
import Logo from "../components/Logo";
import Link from "next/link";
import { AppRoutes } from "@/shared/utilities/routes";

const Header = () => {
  return (
    <header className="navbar px-20 py-5 md:px-5 sticky top-0 z-10 bg-white-f9">
      <MobileDropdown />

      <div className="navbar-start w-fit">
        <Logo />
      </div>

      <div className="shrink-0 ml-5 flex xl:hidden">
        <NavItemList />
      </div>

      <div className="navbar-end ml-auto w-auto sm:hidden">
        <SearchAction />

        <Link href={AppRoutes.Donate} className="btn btn-error text-white ml-10">
          Donate Now
        </Link>

        {/* <Image src={spendenSiegel} alt="" height={50} /> */}
      </div>
    </header>
  );
};

export default Header;
