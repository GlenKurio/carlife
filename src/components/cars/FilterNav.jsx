import { Link } from "react-router-dom";

const filters = [
  { name: "Luxury", to: "?type=luxury" },
  { name: "Supercar", to: "?type=supercar" },
  { name: "SUV", to: "?type=suv" },
  { name: "Sport", to: "?type=sport" },
  { name: "Clear Filters", to: "" },
];

function FilterNav({ typeFilter }) {
  const filterVariants = {
    all: "bg-gradient-to-r from-sky-500 to-indigo-500",
    supercar: "bg-gradient-to-r from-lime-500 to-green-500",
    luxury: "bg-gradient-to-r from-amber-500 to-orange-500",
    sport: "bg-gradient-to-r from-violet-500 to-purple-500",
    suv: "bg-gradient-to-r from-emerald-500 to-teal-500",
  };
  return (
    <div className="mt-16 mb-8 text-center grid grid-cols-2 gap-2 py-4 md:grid-cols-5 justify-between px-8 border-y-[1px] border-blue-200">
      {filters.map((filter, idx) => (
        <Link
          key={idx}
          to={filter.to}
          className={
            typeFilter === filter.name.toLowerCase()
              ? `font-medium py-1 px-2 rounded-sm ${
                  filterVariants[filter.name.toLowerCase()]
                }`
              : "font-medium py-1 px-2 rounded-sm last:col-span-2 md:last:col-span-1 last:bg-gradient-to-r from-sky-500 to-indigo-500 active:scale-95 transition-all duration-200 last:text-blue-50"
          }
        >
          {filter.name}
        </Link>
      ))}
    </div>
  );
}

export default FilterNav;
