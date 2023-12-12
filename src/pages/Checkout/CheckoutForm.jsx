import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import useCreateOrder from "../../hooks/useCreateOrder";
function CheckoutForm({ order }) {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { placeOrder, isLoading, error } = useCreateOrder();
  const { carId, range, total } = order;

  async function onSubmit({ fullName, email }) {
    const customerOrder = {
      fullName: fullName,
      email: email,
      car: carId,
      days: range,
      total: total,
    };

    console.log(customerOrder);

    await placeOrder(customerOrder);
  }

  if (error) {
    return toast.error(error);
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="min-h-[150vh]">
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

        <button> {isLoading ? "Placing order ..." : "Place order"} </button>
      </form>
    </div>
  );
}

export default CheckoutForm;
