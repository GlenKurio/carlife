import ClassBadge from "./ClassBadge";

function CarCard({ car }) {
  return (
    <div className="bg-blue-100 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
      <figure>
        <img
          className={
            car?.imgs.length > 0 ? "aspect-video object-cover" : " mx-auto"
          }
          src={car?.imgs.length > 0 ? car.imgs : "/car-placeholder.webp"}
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
        <div className=" inline-block">
          <button className="bg-gradient-to-r from-sky-500 to-indigo-500 text-blue-50 px-6 py-2 rounded-md transition-all duration-200 ease-in-out text-lg font-semibold w-full active:scale-95 hover:scale-105">
            Rent
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
