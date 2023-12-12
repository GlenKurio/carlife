import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

function EditProfileForm() {
  const { reset, register, formState, handleSubmit, getValues } = useForm();
  const { errors } = formState;

  async function onSubmit({ fullName, email, password, confirmPassword }) {}
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <label htmlFor="fullname" className="block">
        <span className="inline-block text-left w-full text-sm font-semibold text-blue-950 after:content-['*'] after:ml-0.5 after:text-red-500 ">
          Full Name
        </span>
        <input
          className={
            errors?.fullName?.message
              ? " bg-pink-100 focus:border-pink-500 text-pink-600 focus:ring-pink-500 placeholder:text-pink-500"
              : ""
          }
          {...register("fullName", {
            required: "This field is required",
          })}
          type="text"
          placeholder="Full Name"
          id="fullname"
          required
        />
      </label>
      {errors?.fullName?.message && (
        <span className="bg-pink-200 text-xs text-pink-600 rounded-md py-1 mt-[-8px]">
          {errors?.fullName?.message}
        </span>
      )}

      <label htmlFor="email" className="block">
        <span className="inline-block text-left w-full text-sm font-semibold text-blue-950 after:content-['*'] after:ml-0.5 after:text-red-500 ">
          Email
        </span>
        <input
          className={
            errors?.email?.message
              ? " bg-pink-100 focus:border-pink-500 text-pink-600 focus:ring-pink-500 placeholder:text-pink-500"
              : ""
          }
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
          type="email"
          placeholder="Email"
          id="email"
          required
        />
      </label>
      {errors?.email?.message && (
        <span className="bg-pink-200 text-xs text-pink-600 rounded-md py-1 mt-[-8px]">
          {errors?.email?.message}
        </span>
      )}

      <label htmlFor="password" className="block">
        <span className="inline-block text-left w-full text-sm font-semibold text-blue-950 after:content-['*'] after:ml-0.5 after:text-red-500 ">
          New Password
        </span>

        <input
          className={
            errors?.password?.message
              ? " bg-pink-100 focus:border-pink-500 text-pink-600 focus:ring-pink-500 placeholder:text-pink-500"
              : ""
          }
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 6,
              message: "Password needs a minimum of 6 characters",
            },
          })}
          type="password"
          placeholder="Password"
          id="password"
        />
      </label>
      {errors?.password?.message && (
        <span className="bg-pink-200 text-xs text-pink-600 rounded-md py-1 mt-[-8px]">
          {errors?.password?.message}
        </span>
      )}
      <label htmlFor="confirmPassword" className="block">
        <span className="inline-block text-left w-full text-sm font-semibold text-blue-950 after:content-['*'] after:ml-0.5 after:text-red-500 ">
          Confirm New Password
        </span>

        <input
          className={
            errors?.confirmPassword?.message
              ? " bg-pink-100 focus:border-pink-500 text-pink-600 focus:ring-pink-500 placeholder:text-pink-500"
              : ""
          }
          {...register("confirmPassword", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Passwords need to match",
            minLength: {
              value: 6,
              message: "Password needs a minimum of 6 characters",
            },
          })}
          type="password"
          placeholder="Confirm Password"
          id="confirmPassword"
        />
      </label>
      {errors?.confirmPassword?.message && (
        <span className="bg-pink-200 text-xs text-pink-600 rounded-md py-1 mt-[-8px]">
          {errors?.confirmPassword?.message}
        </span>
      )}
      <button className="bg-gradient-to-r from-sky-500 to-indigo-500 text-blue-50 px-6 py-2 rounded-md transition-all duration-200 ease-in-out text-sm font-semibold active:scale-95">
        Update Profile
      </button>
    </form>
  );
}

export default EditProfileForm;
