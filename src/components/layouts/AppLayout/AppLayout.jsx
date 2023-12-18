import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <section className="bg-blue-50 pt-4">
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
}

export default AppLayout;
