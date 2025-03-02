import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar mt-5 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            
            <NavLink className={({isActive}) =>
              isActive ? "text-green-600 rounded-md border-2 p-3 border-[green] font-bold" : "font-bold p-3"
            } to={'/'}><button className="">Home</button></NavLink>
        <NavLink className={({isActive}) =>
              isActive ? "text-green-600 rounded-md border-2 p-1 border-[green] font-bold" : "font-bold"
            } to={'/listed'}><button className="">Listed Books</button></NavLink>
        <NavLink className={({isActive}) =>
              isActive ? "text-green-600 rounded-md border-2 p-1 border-[green] font-bold" : "font-bold"
            } to={'/pages'}><button className="">Pages To Read</button></NavLink>
        <NavLink className={({isActive}) =>
              isActive ? "text-green-600 rounded-md border-2 p-1 border-[green] font-bold" : "font-bold"
            } to={'/about'}><button className="">About Us</button></NavLink>
            <NavLink className={({isActive}) =>
              isActive ? "text-green-600 rounded-md border-2 p-1 border-[green] font-bold" : "font-bold"
            } to={'/contact'}><button className="">Contact Us</button></NavLink>
              
          </ul>
        </div>
        <Link to={'/'} className="btn btn-ghost text-xl">Books Mania</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal items-center space-x-5 px-1">
        <NavLink className={({isActive}) =>
              isActive ? "text-green-600 rounded-md border-2 p-3  border-[green] font-bold" : " p-3 border-none font-bold"
            } to={'/'}><button className="">Home</button></NavLink>
        <NavLink className={({isActive}) =>
              isActive ? "text-green-600 rounded-md border-2 p-3 border-[green] font-bold" : "p-3 border-none font-bold"
            } to={'/listed'}><button className="">Listed Books</button></NavLink>
        <NavLink className={({isActive}) =>
              isActive ? "text-green-600 rounded-md border-2 p-3 border-[green] font-bold" : "p-3 border-none font-bold"
            } to={'/pages'}><button className="">Pages To Read</button></NavLink>
            <NavLink className={({isActive}) =>
              isActive ? "text-green-600 rounded-md border-2 p-3 border-[green] font-bold" : "font-bold"
            } to={'/about'}><button className="">About Us</button></NavLink>
            <NavLink className={({isActive}) =>
              isActive ? "text-green-600 rounded-md border-2 p-3 border-[green] font-bold" : "font-bold"
            } to={'/contact'}><button className="">Contact Us</button></NavLink>
          
        </ul>
      </div>
      <div className="navbar-end space-x-5">
        <Link to={'/signin'} className="btn bg-success">Sign In</Link>
        <Link to={'/signup'} className="btn bg-info">Sign Up</Link>
      </div>
    </div>
  );
};

export default Nav;
