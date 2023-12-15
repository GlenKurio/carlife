import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useEffect, useRef } from "react";
import usePreviewImg from "../../../hooks/usePreviewImg";
import useEditProfile from "../../../hooks/useEditProfile";
import useAuthStore from "../../../store/authStore";

function EditProfileForm() {
  const { reset, register, formState, handleSubmit, getValues } = useForm();
  const { errors } = formState;
  const fileRef = useRef(null);
  const { handleImageChange, selectedFile, setSelectedFile } = usePreviewImg();
  const { isUpdating, editProfile } = useEditProfile();
  const user = useAuthStore((state) => state.user);
  async function onSubmit({ fullName, email, password }) {
    const inputs = {
      fullName,
      email,
    };
    await editProfile(inputs, selectedFile);
    setSelectedFile(null);
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 mt-8"
    >
      <span className="inline-block text-left w-full text-sm font-semibold text-blue-950 mb-[-10px]">
        Profile image
      </span>
      <label className="flex gap-8 items-center justify-start">
        <div className="h-16 w-16 rounded-full object-cover overflow-hidden object-center">
          <img
            src={
              selectedFile || user.profilePicURL || "/avatar-placeholder.png"
            }
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
      <label htmlFor="fullname" className="block">
        <span className="inline-block text-left w-full text-sm font-semibold text-blue-950 ">
          Full Name
        </span>
        <input
          className={
            errors?.fullName?.message
              ? " bg-pink-100 focus:border-pink-500 text-pink-600 focus:ring-pink-500 placeholder:text-pink-500"
              : ""
          }
          {...register("fullName", {})}
          type="text"
          placeholder="Full Name"
          id="fullname"
        />
      </label>
      {errors?.fullName?.message && (
        <span className="bg-pink-200 text-xs text-pink-600 rounded-md py-1 mt-[-8px]">
          {errors?.fullName?.message}
        </span>
      )}

      <label htmlFor="email" className="block">
        <span className="inline-block text-left w-full text-sm font-semibold text-blue-950  ">
          Email
        </span>
        <input
          className={
            errors?.email?.message
              ? " bg-pink-100 focus:border-pink-500 text-pink-600 focus:ring-pink-500 placeholder:text-pink-500"
              : ""
          }
          {...register("email", {
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
          type="email"
          placeholder="Email"
          id="email"
        />
      </label>
      {errors?.email?.message && (
        <span className="bg-pink-200 text-xs text-pink-600 rounded-md py-1 mt-[-8px]">
          {errors?.email?.message}
        </span>
      )}

      <button
        type="submit"
        className="bg-gradient-to-r from-sky-500 to-indigo-500 text-blue-50 px-6 py-2 rounded-md transition-all duration-200 ease-in-out text-sm font-semibold active:scale-95"
      >
        {isUpdating ? "Updating profile ..." : "Update Profile"}
      </button>
    </form>
  );
}

export default EditProfileForm;
