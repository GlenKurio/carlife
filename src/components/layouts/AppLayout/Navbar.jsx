import { Link } from "react-router-dom";

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
          <li
            key={idx}
            className="text-blue-50 hover:text-blue-500 font-[600] tracking-[1px] transition-all duration-200 text-sm  cursor-pointer uppercase "
          >
            <Link to={item.href} className="md:p-2">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <Link to="/host" className="relative flex">
        <button className="bg-gradient-to-r from-sky-500 to-indigo-500 text-blue-50 px-6 py-2 rounded-md transition-all duration-200 ease-in-out text-sm font-semibold">
          Host
        </button>
        <button className="w-full absolute top-0 left-[50%] translate-x-[-50%] bg-gradient-to-l from-sky-500 to-indigo-500 text-blue-50 px-6 py-2 rounded-md opacity-0 hover:opacity-100 transition-all duration-300 linear text-sm font-semibold">
          Host
        </button>
      </Link>
    </nav>
  );
}
export default Navbar;
