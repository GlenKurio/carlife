import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="min-h-screen  font-bold  p-8 flex flex-col items-center justify-center gap-8">
      <h1 className="text-center text-4xl text-blue-950">
        This page was not found...
      </h1>
      <h2 className="text-2xl font-semibold text-green-600 text-center">
        It can mean only one thing... Aliens! 👽
      </h2>
      <Link
        to="/"
        className="w-full md:w-1/3  bg-gradient-to-r from-sky-500 to-indigo-500 text-blue-50 px-6 py-2 rounded-md transition-all duration-200 ease-in-out text-sm font-semibold active:scale-95 text-center md:mx-auto"
      >
        Go back to home page
      </Link>
    </div>
  );
}

export default NotFoundPage;
