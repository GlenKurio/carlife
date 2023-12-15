import { useForm } from "react-hook-form";
import useUpdateCar from "../../../hooks/useUpdateCar";
import { toast } from "react-hot-toast";
import useCarDataStore from "../../../store/useCarDataStore";

function Details() {
  const { formState, handleSubmit, register } = useForm();
  const { errors } = formState;
  const car = useCarDataStore((state) => state.car);

  const { isUpdating, updateCar, error } = useUpdateCar();

  async function onSubmit(inputs) {
    await updateCar(inputs);
  }

  if (error) toast.error(`There was an error: ${error}`);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 my-4"
    >
      <label htmlFor="make" className="block">
        <span className="inline-block text-left w-full text-sm font-semibold text-blue-950 after:content-['*'] after:ml-0.5 after:text-red-500 ">
          Make of the car
        </span>
        <input
          className={
            errors?.make?.message
              ? " bg-pink-100 focus:border-pink-500 text-pink-600 focus:ring-pink-500 placeholder:text-pink-500"
              : ""
          }
          {...register("make", {
            validate: (value) => value !== "" || "This field can`t be empty",
          })}
          type="text"
          placeholder="Make"
          id="make"
          defaultValue={car.make}
        />
      </label>
      {errors?.make?.message && (
        <span className="bg-pink-200 text-xs text-pink-600 rounded-md py-1 mt-[-8px]">
          {errors?.make?.message}
        </span>
      )}
      <label htmlFor="model" className="block">
        <span className="inline-block text-left w-full text-sm font-semibold text-blue-950 after:content-['*'] after:ml-0.5 after:text-red-500 ">
          Model of the car
        </span>
        <input
          className={
            errors?.model?.message
              ? " bg-pink-100 focus:border-pink-500 text-pink-600 focus:ring-pink-500 placeholder:text-pink-500"
              : ""
          }
          {...register("model", {
            validate: (value) => value !== "" || "This field can`t be empty",
          })}
          type="text"
          placeholder="Model"
          id="model"
          defaultValue={car.model}
        />
      </label>
      {errors?.model?.message && (
        <span className="bg-pink-200 text-xs text-pink-600 rounded-md py-1 mt-[-8px]">
          {errors?.model?.message}
        </span>
      )}
      <label htmlFor="year" className="block">
        <span className="inline-block text-left w-full text-sm font-semibold text-blue-950 after:content-['*'] after:ml-0.5 after:text-red-500 ">
          Production Year
        </span>
        <input
          className={
            errors?.year?.message
              ? " bg-pink-100 focus:border-pink-500 text-pink-600 focus:ring-pink-500 placeholder:text-pink-500"
              : ""
          }
          {...register("year", {
            validate: (value) => value !== "" || "This field can`t be empty",
          })}
          type="number"
          placeholder="Year"
          id="year"
          defaultValue={car.year}
        />
      </label>
      {errors?.year?.message && (
        <span className="bg-pink-200 text-xs text-pink-600 rounded-md py-1 mt-[-8px]">
          {errors?.year?.message}
        </span>
      )}
      <label htmlFor="type" className="block">
        <span className="inline-block text-left w-full text-sm font-semibold text-blue-950 after:content-['*'] after:ml-0.5 after:text-red-500 ">
          Category
        </span>
        <select
          className={
            errors?.type?.message
              ? " bg-pink-100 focus:border-pink-500 text-pink-600 focus:ring-pink-500 placeholder:text-pink-500 block w-full p-2 rounded-md  placeholder:font-semibold shadow-inner font-semibold focus:outline-none  focus:ring-2 focus:placeholder:text-opacity-50 focus:invalid:placeholder:text-opacity-50disabled:bg-gray-200 disabled:text-gray-400 disabled:border-slate-200 disabled:shadow-none disabled:placeholder:text-gray-500"
              : "block w-full p-2 rounded-md bg-blue-100 placeholder:text-blue-300 placeholder:font-semibold shadow-inner text-blue-900 font-semibold focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:placeholder:text-opacity-50 focus:invalid:placeholder:text-opacity-50disabled:bg-gray-200 disabled:text-gray-400 disabled:border-slate-200 disabled:shadow-none disabled:placeholder:text-gray-500"
          }
          {...register("type", {
            required: "This field is required.",
            validate: (value) => value !== null || "Please select the category",
          })}
          type="text"
          placeholder="Type"
          id="type"
          defaultValue={car.type}
        >
          <option value="">--Select Category</option>
          <option value="luxury">Luxury</option>
          <option value="sport">Sport</option>
          <option value="supercar">Supercar</option>
          <option value="suv">SUV</option>
        </select>
      </label>
      {errors?.type?.message && (
        <span className="bg-pink-200 text-xs text-pink-600 rounded-md py-1 mt-[-8px]">
          {errors?.type?.message}
        </span>
      )}

      <label htmlFor="price" className="block">
        <span className="inline-block text-left w-full text-sm font-semibold text-blue-950 after:content-['*'] after:ml-0.5 after:text-red-500 ">
          Price for 1 day
        </span>
        <input
          className={
            errors?.price?.message
              ? " bg-pink-100 focus:border-pink-500 text-pink-600 focus:ring-pink-500 placeholder:text-pink-500"
              : ""
          }
          {...register("price", {
            validate: (value) => value !== "" || "This field can`t be empty",
          })}
          type="number"
          placeholder="Price"
          id="price"
          defaultValue={car.price}
        />
      </label>
      {errors?.price?.message && (
        <span className="bg-pink-200 text-xs text-pink-600 rounded-md py-1 mt-[-8px]">
          {errors?.price?.message}
        </span>
      )}

      <label htmlFor="description" className="block">
        <span className="inline-block text-left w-full text-sm font-semibold text-blue-950 after:content-['*'] after:ml-0.5 after:text-red-500 ">
          Description
        </span>
        <textarea
          className={
            errors?.description?.message
              ? " bg-pink-100 focus:border-pink-500 text-pink-600 focus:ring-pink-500 placeholder:text-pink-500"
              : "block w-full p-2 rounded-md bg-blue-100 placeholder:text-blue-300 placeholder:font-semibold shadow-inner text-blue-900 font-semibold focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:placeholder:text-opacity-50 focus:invalid:placeholder:text-opacity-50disabled:bg-gray-200 disabled:text-gray-400 disabled:border-slate-200 disabled:shadow-none disabled:placeholder:text-gray-500"
          }
          {...register("description", {
            validate: (value) => value !== "" || "This field can`t be empty",
          })}
          type="text"
          placeholder="Description"
          id="description"
          defaultValue={car.description}
        />
      </label>
      {errors?.description?.message && (
        <span className="bg-pink-200 text-xs text-pink-600 rounded-md py-1 mt-[-8px]">
          {errors?.description?.message}
        </span>
      )}
      <button className="w-full  bg-gradient-to-r from-sky-500 to-indigo-500 text-blue-50 px-6 py-2 rounded-md transition-all duration-200 ease-in-out text-sm font-semibold active:scale-95">
        {isUpdating ? " Saving changes ..." : "Save"}
      </button>
    </form>
  );
}

export default Details;
