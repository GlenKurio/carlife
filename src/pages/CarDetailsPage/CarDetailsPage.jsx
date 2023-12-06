import { useParams } from "react-router-dom";

function CarDetailsPage() {
  const params = useParams();
  return (
    <div className="min-h-screen p-16">Details page for carId: {params.id}</div>
  );
}

export default CarDetailsPage;
