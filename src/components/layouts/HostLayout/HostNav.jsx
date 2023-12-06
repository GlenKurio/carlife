import { NavLink, useSearchParams } from "react-router-dom";

const hostLinks = [
  {
    name: "Dashboard",
    to: ".",
  },
  {
    name: "Income",
    to: "income",
  },
  {
    name: "Reviews",
    to: "reviews",
  },
  {
    name: "Cars",
    to: "cars",
  },
];

function HostNav() {
  return (
    <nav className="w-full py-2 border-y-2 border-blue-100 overflow-hidden mx-auto">
      <ul className="grid grid-cols-2 md:grid-cols-4 justify-center gap-2">
        {hostLinks.map((link, idx) => (
          <li className="w-full text-center " key={idx}>
            <NavLink
              end
              className={({ isActive }) =>
                isActive
                  ? "p-2 w-full  inline-block font-medium text-blue-50  border-blue-600 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-sm"
                  : "p-2 w-full  inline-block font-medium text-blue-950 hover:text-blue-50 hover:bg-gradient-to-r from-sky-500 to-indigo-500 rounded-sm"
              }
              to={link.to}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HostNav;
