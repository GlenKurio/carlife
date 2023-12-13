import { useForm } from "react-hook-form";
import { useRef } from "react";
import { toast } from "react-hot-toast";
import usePreviewImg from "../../../hooks/usePreviewImg";

function AddHostedCarForm() {
  const { reset, register, formState, handleSubmit, getValues } = useForm();
  const { errors } = formState;
  const fileRef = useRef(null);
  const { handleImageChange, selectedFile, setSelectedFile } = usePreviewImg();

  return (
    <form className="my-8 flex flex-col gap-4">
      {" "}
      <label className="flex gap-8 items-center justify-center">
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
        <input type="file" hidden ref={fileRef} onChange={handleImageChange} />
      </label>
      <label htmlFor="make" className="block">
        <span className="inline-block text-left w-full text-sm font-semibold text-blue-950 after:content-['*'] after:ml-0.5 after:text-red-500 ">
          Make
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
          Model
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
          Year
        </span>
        <input
          className={
            errors?.year?.message
              ? " bg-pink-100 focus:border-pink-500 text-pink-600 focus:ring-pink-500 placeholder:text-pink-500"
              : ""
          }
          {...register("year", { required: "This field is required." })}
          type="text"
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
              ? " bg-pink-100 focus:border-pink-500 text-pink-600 focus:ring-pink-500 placeholder:text-pink-500"
              : ""
          }
          {...register("type", {
            required: "This field is required.",
            validate: (value) => value !== null || "Please select the category",
          })}
          type="text"
          placeholder="Type"
          id="type"
        >
          <option value={null}>--Select Category</option>
          <option value="luxury">Luxury</option>
          <option value="sport">Sport</option>
          <option value="supercar">Supercar</option>
          <option value="suv">SUV</option>
        </select>
      </label>
      {errors?.type?.message && (
        <span className="bg-pink-200 text-xs text-pink-600 rounded-md py-1 mt-[-8px]">
          {errors?.make?.message}
        </span>
      )}
      <label htmlFor="make" className="block">
        <span className="inline-block text-left w-full text-sm font-semibold text-blue-950 after:content-['*'] after:ml-0.5 after:text-red-500 ">
          Make
        </span>
        <input
          className={
            errors?.make?.message
              ? " bg-pink-100 focus:border-pink-500 text-pink-600 focus:ring-pink-500 placeholder:text-pink-500"
              : ""
          }
          {...register("fullName", { required: "This field is required." })}
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
      <label htmlFor="make" className="block">
        <span className="inline-block text-left w-full text-sm font-semibold text-blue-950 after:content-['*'] after:ml-0.5 after:text-red-500 ">
          Make
        </span>
        <input
          className={
            errors?.make?.message
              ? " bg-pink-100 focus:border-pink-500 text-pink-600 focus:ring-pink-500 placeholder:text-pink-500"
              : ""
          }
          {...register("fullName", { required: "This field is required." })}
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
      <button
        type="submit"
        className="bg-gradient-to-r from-sky-500 to-indigo-500 text-blue-50 px-6 py-2 rounded-md transition-all duration-200 ease-in-out text-sm font-semibold active:scale-95"
      >
        Add Car
      </button>
    </form>
  );
}

export default AddHostedCarForm;
