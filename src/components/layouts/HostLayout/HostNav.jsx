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
];

function HostNav() {
  return (
    <nav className="w-full border-t-[2px] border-solid border-blue-600  overflow-hidden">
      <ul className="flex justify-between ">
        {hostLinks.map((link, idx) => (
          <li className="w-full text-center " key={idx}>
            <NavLink
              end
              className={({ isActive }) =>
                isActive
                  ? "p-2 w-full  inline-block font-medium text-blue-600 hover:text-blue-600 border-b-[2px]  border-blue-600"
                  : "p-2 w-full  inline-block font-medium text-blue-950 hover:text-blue-600 border-b-[2px] border-transparent hover:border-b-[2px] hover:border-blue-600"
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
