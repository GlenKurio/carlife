import { Link } from "react-router-dom";

const navigation = [
  { name: "Cars", href: "/cars", current: true },
  { name: "About", href: "/about", current: false },
];

function Navbar() {
  return (
    <nav className="py-4 px-4 w-full flex bg-gray-800 items-center justify-between">
      <div className="">
        <Link className="uppercase bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-2xl text-transparent font-black tracking-[3px] cursor-pointer hover:text-amber-50 duration-200 transition-all hidden md:block">
          <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
            #
          </span>
          CarLife
        </Link>
        <Link className="uppercase text-blue-500 text-2xl font-black tracking-[3px] cursor-pointer hover:text-blue-50 duration-200 transition-all  md:hidden">
          <span className="text-blue-500">#</span>CL
        </Link>
      </div>
      <ul className="flex gap-4">
        {navigation.map((item, idx) => (
          <li
            key={idx}
            className="text-blue-50 hover:text-blue-500 font-[600] tracking-[1px] transition-all duration-200 text-sm  cursor-pointer uppercase "
          >
            <Link to={item.href} className="p-2">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <button className="bg-gradient-to-r from-sky-500 to-indigo-500 text-blue-50  duration-200 transition-all active:scale-95  hover:bg-gradient-to-l from-sky-500 to-indigo-500 py-2 px-4 rounded-sm text-sm font-[600] ">
        Host
      </button>
    </nav>
  );
}
export default Navbar;
