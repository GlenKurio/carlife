import { useParams, useLocation, Link } from "react-router-dom";

function CarDetailsPage() {
  const params = useParams();
  const location = useLocation();
  const search = location.state?.search || "";
  return (
    <div className="min-h-screen p-16">
      <Link to={`/cars/${search}`}>
        &larr; Go back to {search?.split("=")[1]} cars
      </Link>
      <p>Details page for carId: {params.id}</p>
    </div>
  );
}

export default CarDetailsPage;
