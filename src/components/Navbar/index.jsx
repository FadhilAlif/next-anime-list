import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionBtn from "./UserActionBtn";

const Navbar = () => {
  return (
    <header className="bg-color-accent shadow-lg">
      <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
        <Link href={"/"} className="font-bold text-2xl">
          Anime List
        </Link>
        <InputSearch />
        <UserActionBtn />
      </div>
    </header>
  );
};

export default Navbar;
