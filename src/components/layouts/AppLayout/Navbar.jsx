import { Link, NavLink } from "react-router-dom";

const navigation = [{ name: "Cars", href: "/cars", current: true }];

function Navbar() {
  return (
    <nav className="rounded-md py-2 px-4 w-[90%] mx-auto flex bg-gray-800 items-center  shadow-md absolute left-[50%] translate-x-[-50%]">
      <div className="">
        <Link className="uppercase bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-2xl text-transparent font-black tracking-[3px] cursor-pointer hover:text-amber-50 duration-200 transition-all hidden md:block">
          <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
            #
          </span>
          CarLife
        </Link>
        <Link className="uppercase text-blue-500 text-xl font-black tracking-[3px] cursor-pointer hover:text-blue-50 duration-200 transition-all  md:hidden">
          <span className="text-blue-500">#</span>CL
        </Link>
      </div>
      <ul className="flex gap-4 mx-auto">
        {navigation.map((item, idx) => (
          <li key={idx} className="">
            <NavLink
              to={item.href}
              className={({ isActive }) =>
                isActive
                  ? " text-blue-500 font-[600] tracking-[1px] text-sm  cursor-pointer uppercase md:p-2"
                  : "text-blue-50 hover:text-blue-500 font-[600] tracking-[1px] transition-all duration-200 text-sm  cursor-pointer uppercase md:p-2"
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <Link to="/host" className="flex">
        <button className="bg-gradient-to-r from-sky-500 to-indigo-500 text-blue-50 px-6 py-2 rounded-md transition-all duration-200 ease-in-out text-sm font-semibold active:scale-95 hover:scale-105">
          Host
        </button>
      </Link>
    </nav>
  );
}
export default Navbar;
