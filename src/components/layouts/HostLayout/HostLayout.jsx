import HostNav from "./HostNav";
import { Outlet } from "react-router-dom";

function HostPage() {
  return (
    <section className="min-h-screen pt-16 px-4">
      <HostNav />
      <Outlet />
    </section>
  );
}

export default HostPage;
