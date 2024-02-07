import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-slate-800">
      <div className="flex md:flex-row flex-col justify-between p-4">
        <Link href={"/"} className="font-bold text-white text-2xl">
          Anime List
        </Link>

        <input id="search" placeholder="Search anime..." className="p-2" />
      </div>
    </header>
  );
};

export default Navbar;
