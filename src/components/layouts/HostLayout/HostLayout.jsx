import HostNav from "./HostNav";
import { Outlet } from "react-router-dom";
import LogoutButton from "../../auth/Logout";
import HostProfile from "../../host/HostProfile/HostProfile";

function HostPage() {
  return (
    <section className="min-h-screen pt-16 px-4">
      <div className="flex justify-between">
        <HostProfile />
        <LogoutButton />
      </div>
      <HostNav />
      <Outlet />
    </section>
  );
}

export default HostPage;
