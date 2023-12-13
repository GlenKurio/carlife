import { Link } from "react-router-dom";
import Modal from "../../Modal";
import { useState } from "react";
import useDeleteCar from "../../../hooks/useDeleteCar";
import { toast } from "react-hot-toast";
function HostedCarsCard({ car }) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { isDeleting, handleDeleteCar } = useDeleteCar();
  async function handleClick() {
    const id = car.id;
    console.log(id);
    await handleDeleteCar(id);

    toast.success("Car successfully deleted!");

    setIsOpenModal(false);
  }
  return (
    <>
      <article className="flex gap-4 rounded-md overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 bg-blue-100">
        <img
          src={car.imgs}
          alt={`${car.make} ${car.model}`}
          className="aspect-video object-cover w-1/3"
        />
        <p className="flex flex-col justify-center gap-4 font-semibold w-full py-2 text-md md:text-2xl md:gap-8">
          <span>
            {car.make} {car.model}
          </span>
          <span>${car.price} / day</span>
        </p>
        <button onClick={() => setIsOpenModal((prev) => !prev)}>
          Delete car
        </button>
        <Link to={`/host/cars/${car.id}`}>Edit Car</Link>
      </article>
      {isOpenModal && (
        <Modal setIsOpenModal={setIsOpenModal}>
          <h2>Are you sure You want to delete this car?</h2>
          <button onClick={handleClick}>DELETE</button>
        </Modal>
      )}
    </>
  );
}

export default HostedCarsCard;
