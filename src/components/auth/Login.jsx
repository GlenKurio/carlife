import { Form, redirect, useActionData } from "react-router-dom";
import { loginWithEmailAndPassword } from "../../services/firebase/apiAuth";

export async function action({ request }) {
  const formData = await request.formData();
  const inputs = Object.fromEntries(formData);

  const errors = {};
  const { userData, error } = await loginWithEmailAndPassword(inputs);

  if (error) return (errors.creds = "No user found with provided credentials!");

  return redirect("/host");
}

function LoginForm() {
  const errors = useActionData();

  return (
    <div>
      <Form method="post" className="flex flex-col gap-4">
        <label htmlFor="email" className="block">
          <span className="inline-block text-left w-full text-sm font-semibold text-blue-950 after:content-['*'] after:ml-0.5 after:text-red-500 ">
            Email
          </span>
          <input
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            required
          />
        </label>
        <label htmlFor="password" className="block">
          <span className="inline-block text-left w-full text-sm font-semibold text-blue-950 after:content-['*'] after:ml-0.5 after:text-red-500 ">
            Password
          </span>
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            minLength="8"
            maxLength="16"
            required
          />
        </label>
        {errors && (
          <span className="bg-pink-200 text-xs text-pink-600 rounded-md py-1">
            {errors}
          </span>
        )}
        <button className="bg-gradient-to-r from-sky-500 to-indigo-500 text-blue-50 px-6 py-2 rounded-md transition-all duration-200 ease-in-out text-sm font-semibold active:scale-95">
          Login
        </button>
      </Form>
    </div>
  );
}

export default LoginForm;
