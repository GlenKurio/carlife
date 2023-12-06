import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./components/layouts/AppLayout/AppLayout";
import HomePage from "./pages/HomePage/HomePage";
import CarsPage from "./pages/CarsPage/CarsPage";
import CarDetailsPage from "./pages/CarDetailsPage/CarDetailsPage";
import HostLayout from "./components/layouts/HostLayout/HostLayout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostedCars from "./pages/Host/HostedCars/HostedCars";
import HostedCarDetailsLayout from "./pages/Host/HostedCars/HostedCarDetails/HostedCarDetailsLayout";
import Details from "./pages/Host/HostedCars/HostedCarDetails/Details";
import Pricing from "./pages/Host/HostedCars/HostedCarDetails/Pricing";
import Photos from "./pages/Host/HostedCars/HostedCarDetails/Photos";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<HomePage />} />
      <Route path="cars" element={<CarsPage />} />
      <Route path="cars/:id" element={<CarDetailsPage />} />
      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="cars" element={<HostedCars />} />
        <Route path="cars/:id" element={<HostedCarDetailsLayout />}>
          <Route index element={<Details />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="photos" element={<Photos />} />
        </Route>
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
