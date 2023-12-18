import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex bg-blue-950 h-[100px] items-center px-4 py-2 justify-between">
      <Link
        to="/"
        className="uppercase bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-2xl text-transparent font-black tracking-[3px] cursor-pointer hover:text-amber-50 duration-200 transition-all "
      >
        <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
          #
        </span>
        CarLife
      </Link>
      <nav>
        <ul className="flex gap-4 text-blue-50 font-semibold">
          <li className="hover:underline">
            <Link to="/cars">Cars</Link>
          </li>
          <li className="hover:underline ">
            <Link to="/host">Host Login</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
