import useOrderStore from "../../store/orderStore";
import { Link } from "react-router-dom";
import CheckoutForm from "../../components/checkout/CheckoutForm";
import OrderSummary from "../../components/checkout/OrderSummary";

function Checkout() {
  const { order } = useOrderStore();

  return (
    <section className="bg-blue-50">
      <header className="w-full bg-blue-500 bg-opacity-30 p-4">
        <Link
          to="/"
          className="uppercase bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-2xl text-transparent font-black tracking-[3px] cursor-pointer hover:scale-110 duration-200 transition-all  mx-auto text-center flex justify-center w-1/2"
        >
          <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
            #
          </span>
          CarLife
        </Link>
      </header>
      <Link
        className="m-4 inline-block hover:underline hover:text-blue-500"
        to={`/cars/${order.carId}`}
      >
        &larr; Go back to car
      </Link>
      <h1 className="text-5xl font-bold text-blue-950 text-center my-4">
        Checkout
      </h1>
      <div className=" items-center pt-8 px-4 min-h-screen flex flex-col lg:flex-row-reverse lg:justify-end lg:items-start lg:min-h-screen lg:gap-8">
        <OrderSummary order={order} />
        <div className="  w-full mt-8 lg:mt-0 lg:w-2/3 px-8 ">
          <h3 className="text-xl font-semibold text-blue-950 text-center mb-8">
            Please fill out form below to finalize your order
          </h3>
          {/* TODO: Finish Checkout Form */}

          <CheckoutForm order={order} />
        </div>
      </div>
    </section>
  );
}

export default Checkout;
