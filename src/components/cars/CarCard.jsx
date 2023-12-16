import ClassBadge from "./ClassBadge";

function CarCard({ car }) {
  return (
    <div className="bg-blue-100 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
      <figure>
        <img
          className="aspect-video object-cover"
          src={car.imgs}
          alt={`Image of ${car.make} ${car.model}`}
        />
      </figure>
      <div className="flex flex-col p-4 text-center gap-4 justify-between">
        <h2 className="text-2xl font-medium ">
          {car.make} {car.model}
        </h2>
        <span>Year: {car.year}</span>
        <div className="flex justify-between items-center">
          <ClassBadge type={car.type} />
          <span className="font-semibold">${car.price} / day</span>
        </div>
        <div className="relative inline-block">
          <button className="bg-gradient-to-r from-sky-500 to-indigo-500 text-blue-50 px-6 py-2 rounded-md transition-all duration-200 ease-in-out text-lg font-semibold w-full">
            Rent
          </button>
          <button className="w-full absolute top-0 left-[50%] translate-x-[-50%] bg-gradient-to-l from-sky-500 to-indigo-500 text-blue-50 px-6 py-2 rounded-md opacity-0 hover:opacity-100 transition-all duration-300 linear text-lg font-semibold ">
            Rent
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
