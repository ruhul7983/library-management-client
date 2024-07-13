import { Link } from "react-router-dom";

const Navbar = () => {
    const links = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/'}>Home</Link></li>
    </>
    return (
        <div className="navbar bg-[#fff0e7] text-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn bg-[#fff0e7] lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu  menu-sm dropdown-content bg-[#fff0e7] hover:bg-[#fff0e7] rounded-box hover:text-orange-300 z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to={'/'} className="btn text-black bg-[#fff0e7] hover:bg-[#fff0e7] text-base hover:text-orange-300">Our Library</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={"/login"} className="btn text-base text-black bg-[#fff0e7] hover:bg-[#fff0e7] hover:text-orange-300">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;