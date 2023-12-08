import {
  useLoaderData,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";
import GoogleAuth from "../../components/auth/GoogleAuth";
export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

function AuthPage() {
  const message = useLoaderData();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isLogin = pathname == "/auth";

  function handleFormSwitch() {
    if (isLogin) return navigate("/auth/signup");
    else navigate("/auth");
  }
  return (
    <section className="flex flex-col min-h-screen text-center py-16 px-8 justify-between ">
      <div className="flex flex-col gap-4 mt-8">
        <h1 className="text-4xl font-bold text-blue-950">
          Become a Host on CarLife!
        </h1>
        <h2 className="text-xl font-medium text-blue-500">
          Start making money by renting out your car on our platform.
        </h2>
      </div>
      {message && <h3>{message}</h3>}
      <div className="mt-12 border-[1px] border-blue-300 rounded-lg shadow-lg p-8 flex flex-col gap-8 w-[100%] md:w-[60%] lg:w-[45%] xl:w-[30%] mx-auto">
        <h3 className="uppercase font-[900] bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-2xl text-transparent text-blue-900">
          #Carlife
        </h3>
        <Outlet />
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
          onClick={handleFormSwitch}
        >
          {isLogin ? "Sign up" : "Log in"}
        </button>
      </div>

      <div className="flex items-center flex-col justify-center gap-2">
        <h4 className="font-bold">Download the app.</h4>
        <div className="flex  gap-4">
          <img
            className="max-h-[50px] sm:max-h-[30px]"
            src="/microsoft.png"
            alt="Microsoft"
          />

          <img
            className="max-h-[50px] sm:max-h-[30px]"
            src="/playstore.png"
            alt="Playstore"
          />
        </div>
      </div>
    </section>
  );
}

export default AuthPage;
