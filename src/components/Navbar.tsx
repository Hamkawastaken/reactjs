import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <>
      <nav className="w-full p-4 flex justify-center border-y">
        <ul className="flex flex-row gap-12 font-semibold">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "cursor-pointer border-3 px-4 py-2 rounded-xl text-blue-500 border-blue-500 hover:bg-slate-100 transition-all ease-in-out"
                : "cursor-pointer border-3 px-4 py-2 rounded-xl border-blue-500 hover:bg-slate-100 transition-all ease-in-out"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/product"}
            className={({ isActive }) =>
              isActive
                ? "cursor-pointer border-3 px-4 py-2 rounded-xl text-blue-500 border-blue-500 hover:bg-slate-100 transition-all ease-in-out"
                : "cursor-pointer border-3 px-4 py-2 rounded-xl border-blue-500 hover:bg-slate-100 transition-all ease-in-out"
            }
          >
            Product
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive
                ? "cursor-pointer border-3 px-4 py-2 rounded-xl text-blue-500 border-blue-500 hover:bg-slate-100 transition-all ease-in-out"
                : "cursor-pointer border-3 px-4 py-2 rounded-xl border-blue-500 hover:bg-slate-100 transition-all ease-in-out"
            }
          >
            About
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) =>
              isActive
                ? "cursor-pointer border-3 px-4 py-2 rounded-xl text-blue-500 border-blue-500 hover:bg-slate-100 transition-all ease-in-out"
                : "cursor-pointer border-3 px-4 py-2 rounded-xl border-blue-500 hover:bg-slate-100 transition-all ease-in-out"
            }
          >
            Contact
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
