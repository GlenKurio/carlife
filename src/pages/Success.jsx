import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="min-h-screen grid place-content-center text-center gap-4">
      <h1 className="text-3xl text-blue-950 font-bold">Success!</h1>{" "}
      <h2 className="text-2xl text-blue-300 font-semibold">
        We sent order confirmation on your email!
      </h2>
      <Link
        to="/"
        className="bg-gradient-to-r from-sky-500 to-indigo-500 text-blue-50 px-6 py-2 rounded-md transition-all duration-200 ease-in-out text-sm font-semibold active:scale-95"
      >
        Go to home page
      </Link>
    </div>
  );
}

export default Success;
