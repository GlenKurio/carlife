import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  return (
    <section className="min-h-screen grid place-content-center">
      <h1>There is an error occured 😬</h1>
      <p>{error.message}</p>
    </section>
  );
}

export default Error;
