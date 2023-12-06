import { NavLink } from "react-router-dom";

const detailsLinks = [
  { name: "Details", to: "." },
  { name: "Pricing", to: "pricing" },
  { name: "Photos", to: "photos" },
];

function CarDetailsNav() {
  return (
    <nav className="">
      <ul className="flex items-center justify-between ">
        {detailsLinks.map((link) => (
          <li>
            <NavLink
              to={link.to}
              end
              className={({ isActive }) =>
                isActive
                  ? "p-2 w-full  inline-block font-medium text-blue-50  border-blue-600 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-sm"
                  : "p-2 w-full  inline-block font-medium text-blue-950 hover:text-blue-50 hover:bg-gradient-to-r from-sky-500 to-indigo-500 rounded-sm"
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default CarDetailsNav;
