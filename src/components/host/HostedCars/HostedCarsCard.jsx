import { Link } from "react-router-dom";
import Modal from "../../Modal";
import { useState } from "react";
import useDeleteCar from "../../../hooks/useDeleteCar";
import { toast } from "react-hot-toast";
import ClassBadge from "../../cars/ClassBadge";

function HostedCarsCard({ car }) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { isDeleting, handleDeleteCar } = useDeleteCar();

  async function handleClick() {
    const id = car.id;

    await handleDeleteCar(id);

    toast.success("Car successfully deleted!");

    setIsOpenModal(false);
  }
  return (
    <>
      <article className="flex flex-col gap-2 rounded-md overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 bg-blue-100 items-center cursor-pointer user-select-none ">
        <Link to={`/cars/${car.id}`}>
          <div className="">
            <img
              src={car?.imgs.length > 0 ? car.imgs : "/car-placeholder.webp"}
              alt={`${car.make} ${car.model}`}
              className="object-cover aspect-video object-center "
            />
          </div>
        </Link>
        <div className="flex flex-col items-center juistify-between w-full p-4 gap-4  ">
          <p className="flex items-center justify-center w-full text-2xl font-bold text-center">
            {car.make} {car.model}
          </p>

          <p className="flex items-start justify-center w-full gap-2 text-center ">
            {" "}
            {car.description}
          </p>
          <p className="flex items-center justify-between w-full">
            <ClassBadge type={car.type} />
            <span className="text-sm font-medium">${car.price} / day</span>
          </p>
          <div className="flex flex-col justify-between w-full gap-2">
            <Link
              to={`/host/cars/${car.id}`}
              className=" p-2 flex items-center justify-center gap-2 bg-blue-500 text-blue-50 rounded-sm active:scale-95 transition-all duration-200 hover:bg-blue-800 hover:text-blue-100"
            >
              <span>Edit</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            </Link>
            <button
              onClick={() => setIsOpenModal((prev) => !prev)}
              className="p-2 flex justify-center items-center gap-2 text-rose-700 bg-rose-200 rounded-sm active:scale-95 transition-all duration-200 hover:bg-rose-300 hover:text-rose-800"
            >
              <span>Delete</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
        </div>
      </article>

      {isOpenModal && (
        <Modal setIsOpenModal={setIsOpenModal}>
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-bold">
              Are you sure You want to delete this car?
            </h2>
            <h2 className="text-xl font-semibold text-rose-500">
              You wont be able to undo this action
            </h2>

            <button
              onClick={handleClick}
              className="p-2 flex justify-center items-center gap-2 text-rose-700 bg-rose-200 rounded-sm active:scale-95 transition-all duration-200 hover:bg-rose-300 hover:text-rose-800"
            >
              <span>Delete</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}

export default HostedCarsCard;
