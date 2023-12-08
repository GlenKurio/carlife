import HostNav from "./HostNav";
import { Outlet } from "react-router-dom";
import LogoutButton from "../../auth/Logout";

function HostPage() {
  const isAuth = localStorage.getItem("isAuth");

  if (!isAuth) {
    return (
      <div className="min-h-screen grid place-content-center">Login First</div>
    );
  }
  return (
    <section className="min-h-screen pt-16 px-4">
      <div className="flex justify-end">
        <LogoutButton />
      </div>
      <HostNav />
      <Outlet />
    </section>
  );
}

export default HostPage;
