import { useForm } from "react-hook-form";
import { useRef } from "react";
import { toast } from "react-hot-toast";
import usePreviewImg from "../../../hooks/usePreviewImg";
import useAddCar from "../../../hooks/useAddCar";

function AddHostedCarForm() {
  const { reset, register, formState, handleSubmit, getValues } = useForm();
  const { errors } = formState;
  const fileRef = useRef(null);
  const { handleImageChange, selectedFile, setSelectedFile } = usePreviewImg();
  const { isLoading, addCar, error } = useAddCar();
  if (error) toast.error(error.message);

  async function onSubmit({ make, model, year, type, price, description }) {
    const carInfo = {
      make,
      model,
      year,
      type,
      price,
      description,
    };

    if (!selectedFile) return toast.error("Please Select a cover image!");
    await addCar(carInfo, selectedFile);
    setSelectedFile(null);
  }

  return (
    <div className="min-h-screen flex flex-col gap-8 ">
      <h1 className="text-center text-3xl font-bold text-blue-950 mt-8 ">
        Add new car
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-2 flex flex-col gap-4 md:w-[50%] md:mx-auto border-[1px] border-solid border-blue-700 shadow-lg p-4 rounded-lg"
      >
        {" "}
        <span className="inline-block text-left w-full text-sm font-semibold text-blue-950 after:content-['*'] after:ml-0.5 after:text-red-500 -mb-3">
          Add cover image
        </span>
        <label className="flex gap-8 items-center ">
          <div className="rounded-md max-w-[129px] object-cover overflow-hidden object-center">
            <img
              className="aspect-video object-cover"
              src={selectedFile || "/car-placeholder.webp"}
              alt=""
            />
          </div>
          <span
            className="cursor-pointer py-2 px-4 bg-blue-300 rounded-md text-sm hover:bg-blue-400"
            onClick={() => fileRef.current.click()}
          >
            Choose File
          </span>

          <input
            type="file"
            hidden
            ref={fileRef}
            onChange={handleImageChange}
          />
        </label>
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
            {...register("make", { required: "This field is required." })}
            type="text"
            placeholder="Make"
            id="make"
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
            {...register("model", { required: "This field is required." })}
            type="text"
            placeholder="Model"
            id="model"
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
            {...register("year", { required: "This field is required." })}
            type="number"
            placeholder="Year"
            id="year"
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
              validate: (value) =>
                value !== null || "Please select the category",
            })}
            type="text"
            placeholder="Type"
            id="type"
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
            Price for 1 day of rent
          </span>
          <input
            className={
              errors?.price?.message
                ? " bg-pink-100 focus:border-pink-500 text-pink-600 focus:ring-pink-500 placeholder:text-pink-500"
                : ""
            }
            {...register("price", { required: "This field is required." })}
            type="number"
            placeholder="Price"
            id="price"
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
              required: "This field is required.",
            })}
            type="text"
            placeholder="Description"
            id="description"
          />
        </label>
        {errors?.description?.message && (
          <span className="bg-pink-200 text-xs text-pink-600 rounded-md py-1 mt-[-8px]">
            {errors?.description?.message}
          </span>
        )}
        <button
          disabled={isLoading}
          type="submit"
          className="bg-gradient-to-r from-sky-500 to-indigo-500 text-blue-50 px-6 py-2 rounded-md transition-all duration-200 ease-in-out text-sm font-semibold active:scale-95"
        >
          {isLoading ? "Adding new car ..." : "Add Car"}
        </button>
      </form>
    </div>
  );
}

export default AddHostedCarForm;
