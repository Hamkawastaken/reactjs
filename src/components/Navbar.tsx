import { Link } from "react-router";

const Navbar = () => {
    return (
        <>
        <nav className="w-full p-4 flex justify-center border-y">
            <ul className="flex flex-row gap-12 font-semibold">
                <Link to={"/"} className="cursor-pointer border-3 px-4 py-2 rounded-xl border-blue-500 hover:bg-slate-100 transition-all ease-in-out">Home</Link>
                <Link to={"/product"} className="cursor-pointer border-3 px-4 py-2 rounded-xl border-blue-500 hover:bg-slate-100 transition-all ease-in-out">Product</Link>
                <Link to={"/about"} className="cursor-pointer border-3 px-4 py-2 rounded-xl border-blue-500 hover:bg-slate-100 transition-all ease-in-out">About</Link>
                <Link to={"/contact"} className="cursor-pointer border-3 px-4 py-2 rounded-xl border-blue-500 hover:bg-slate-100 transition-all ease-in-out">Contact</Link>
            </ul>
        </nav>
        </>
    )
}

export default Navbar;