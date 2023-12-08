import { Form, redirect, useActionData } from "react-router-dom";
import { signupWithEmailAndPassword } from "../../services/firebase/apiAuth";

export async function action({ request }) {
  const formData = await request.formData();
  const inputs = Object.fromEntries(formData);

  const errors = {};
  if (inputs.password !== inputs.confirmPasswords) {
    errors.passwords = "Passwords doesn`t match";
  }

  if (Object.keys(errors).length > 0) return errors;

  await signupWithEmailAndPassword(inputs);
  return redirect("/host");
}

function SignupForm() {
  const errors = useActionData();
  console.log(errors);
  return (
    <div>
      <Form method="post" className="flex flex-col gap-4">
        <label htmlFor="fullname" className="block">
          <span className="inline-block text-left w-full text-sm font-semibold text-blue-950 after:content-['*'] after:ml-0.5 after:text-red-500 ">
            Full Name
          </span>
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            id="fullname"
            minLength="4"
            required
          />
        </label>

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
        <label htmlFor="confirmPassword" className="block">
          <span className="inline-block text-left w-full text-sm font-semibold text-blue-950 after:content-['*'] after:ml-0.5 after:text-red-500 ">
            Confirm Password
          </span>

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            id="confirmPassword"
            minLength="8"
            maxLength="16"
            required
          />
        </label>
        {errors?.passwords && (
          <span className="bg-pink-200 text-xs text-pink-600 rounded-md py-1">
            {errors.passwords}
          </span>
        )}
        <button className="bg-gradient-to-r from-sky-500 to-indigo-500 text-blue-50 px-6 py-2 rounded-md transition-all duration-200 ease-in-out text-sm font-semibold active:scale-95">
          Sign Up
        </button>
      </Form>
    </div>
  );
}

export default SignupForm;
