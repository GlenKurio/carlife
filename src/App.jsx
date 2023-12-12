import { Toaster } from "react-hot-toast";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./components/layouts/AppLayout/AppLayout";
import AuthPage from "./pages/AuthPage/AuthPage";
import HomePage from "./pages/HomePage/HomePage";
import CarsPage from "./pages/CarsPage/CarsPage";
import CarDetailsPage from "./pages/CarDetailsPage/CarDetailsPage";
import HostLayout from "./components/layouts/HostLayout/HostLayout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostedCars from "./components/host/HostedCars/HostedCars";
import HostedCarDetailsLayout from "./components/host/HostedCarDetails/HostedCarDetailsLayout";
import Details from "./components/host/HostedCarDetails/Details";
import Pricing from "./components/host/HostedCarDetails/Pricing";
import Photos from "./components/host/HostedCarDetails/Photos";
import NotFoundPage from "./pages/NotFoundPage";
import Error from "./pages/Error";
import LoginForm from "./components/auth/Login";
import SignupForm from "./components/auth/Signup";
import ProtectedRoute from "./components/layouts/HostLayout/ProtectedRoute";
import Checkout from "./pages/CheckoutPage/Checkout";
import Success from "./pages/Success";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} errorElement={<Error />} />

        <Route path="auth" element={<AuthPage errorElement={<Error />} />}>
          <Route index element={<LoginForm />} errorElement={<Error />} />
          <Route
            path="signup"
            element={<SignupForm />}
            errorElement={<Error />}
          />
        </Route>
        <Route path="cars" element={<CarsPage />} errorElement={<Error />} />
        <Route
          path="cars/:id"
          element={<CarDetailsPage />}
          errorElement={<Error />}
        />
        <Route
          path="host"
          element={
            <ProtectedRoute>
              <HostLayout />
            </ProtectedRoute>
          }
          errorElement={<Error />}
        >
          <Route index element={<Dashboard />} errorElement={<Error />} />
          <Route path="income" element={<Income />} errorElement={<Error />} />
          <Route
            path="reviews"
            element={<Reviews />}
            errorElement={<Error />}
          />
          <Route
            path="cars"
            element={<HostedCars />}
            errorElement={<Error />}
          />
          <Route
            path="cars/:id"
            element={<HostedCarDetailsLayout />}
            errorElement={<Error />}
          >
            <Route index element={<Details />} errorElement={<Error />} />
            <Route
              path="pricing"
              element={<Pricing />}
              errorElement={<Error />}
            />
            <Route
              path="photos"
              element={<Photos />}
              errorElement={<Error />}
            />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} errorElement={<Error />} />
      </Route>
      <Route path="success" element={<Success />} />
      <Route path="checkout" element={<Checkout />} />
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />;
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "4px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 3000,
          },
          style: {
            fontSize: "14px",
            fontWeight: "text-bold",
            maxWidth: "400px",
            padding: "8px 16px",
            backgroundColor: "bg-blue-300",
            color: "text-blue-900",
          },
        }}
      />
    </>
  );
}

export default App;
