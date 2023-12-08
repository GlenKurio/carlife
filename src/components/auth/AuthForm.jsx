import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import GoogleAuth from "./GoogleAuth";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <div className="border-[1px] border-blue-300 rounded-lg shadow-lg p-8 flex flex-col gap-8">
        <h3 className="uppercase">#Carlife</h3>
        {isLogin ? <Login /> : <Signup />}

        <div>
          {/* -------OR--------- */}
          <div className="flex items-center mb-4 w-full">
            <span className="h-[1px] bg-blue-900 flex-2 w-full"></span>
            <span className="font-medium text-blue-800 mx-2">OR</span>
            <span className="h-[1px] bg-blue-900 w-full"></span>
          </div>

          <GoogleAuth prefix={isLogin ? "Log in" : "Sign up"} />
        </div>
      </div>

      <div className="flex flex-col gap-2 text-center mt-8 mb-8">
        <p className="text-sm font-semibold">
          {isLogin ? "Don`t have an account ?" : "Already have an account ?"}
        </p>
        <button
          className="text-blue-500 hover:text-blue-600 hover:underline font-medium"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Sign up" : "Log in"}
        </button>
      </div>
    </>
  );
}

export default AuthForm;
