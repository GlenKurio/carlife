import { useForm } from "react-hook-form";
import useSignup from "../../hooks/useSignUpWithPassword";
import { toast } from "react-hot-toast";

function CheckoutForm() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  return (
    <div>
      <form className="min-h-[150vh]">
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
      </form>
    </div>
  );
}

export default CheckoutForm;
