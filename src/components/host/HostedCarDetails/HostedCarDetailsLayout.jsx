import { useParams, Outlet, Link } from "react-router-dom";
import CarDetailsNav from "./CarDetailsNav";

function HostedCarDetailsLayout() {
  const params = useParams();
  return (
    <>
      <Link
        to=".."
        relative="path"
        className="text-xl font-medium text-blue-600  hover:text-blue-500"
      >
        &larr; <span className="hover:underline">Back to all cars</span>
      </Link>
      <div className="h-[300px] w-full bg-blue-400">
        <div>Some car info here</div>
        <CarDetailsNav carId={params.id} />
        <Outlet />
      </div>
    </>
  );
}

export default HostedCarDetailsLayout;
