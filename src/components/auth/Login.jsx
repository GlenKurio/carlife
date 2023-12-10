import { useForm } from "react-hook-form";
import useLogin from "../../hooks/useLoginWithEmailAndPassword";
import { toast } from "react-hot-toast";

function LoginForm() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { isLoading, error, loginWithEmailAndPassword } = useLogin();
  const userInStorage = localStorage.getItem("user-info");

  async function onSubmit({ email, password }) {
    await loginWithEmailAndPassword({ email, password });
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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
            type="email"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide a valid email address",
              },
            })}
            placeholder="Email"
            id="email"
          />
        </label>
        {errors?.email?.message && (
          <span className="bg-pink-200 text-xs text-pink-600 rounded-md py-1 mt-[-8px]">
            {errors?.email?.message}
          </span>
        )}
        <label htmlFor="password" className="block">
          <span className="inline-block text-left w-full text-sm font-semibold text-blue-950 after:content-['*'] after:ml-0.5 after:text-red-500 ">
            Password
          </span>
          <input
            className={
              errors?.password?.message
                ? " bg-pink-100 focus:border-pink-500 text-pink-600 focus:ring-pink-500 placeholder:text-pink-500"
                : ""
            }
            type="password"
            placeholder="Password"
            id="password"
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 6,
                message: "Password needs a minimum of 6 characters",
              },
            })}
            minLength={6}
          />
        </label>
        {errors?.password?.message && (
          <span className="bg-pink-200 text-xs text-pink-600 rounded-md py-1 mt-[-8px]">
            {errors?.password?.message}
          </span>
        )}
        <button
          className="bg-gradient-to-r from-sky-500 to-indigo-500 text-blue-50 px-6 py-2 rounded-md transition-all duration-200 ease-in-out text-sm font-semibold active:scale-95 disabled:bg-sky-300"
          disabled={isLoading}
        >
          {isLoading ? "Logging in" : "Login"}
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
