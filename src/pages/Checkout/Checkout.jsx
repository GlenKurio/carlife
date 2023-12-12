import useOrderStore from "../../store/orderStore";
import { Link } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import OrderSummary from "./OrderSummary";

function Checkout() {
  const { order } = useOrderStore();

  return (
    <>
      <header className="w-full bg-blue-500 bg-opacity-30 p-4">
        <Link className="uppercase bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-2xl text-transparent font-black tracking-[3px] cursor-pointer hover:scale-110 duration-200 transition-all  mx-auto text-center flex justify-center w-1/2">
          <span className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">
            #
          </span>
          CarLife
        </Link>
      </header>
      <h1 className="text-5xl font-bold text-blue-950 text-center my-8">
        Checkout
      </h1>
      <div className=" items-center pt-8 px-4 min-h-screen flex flex-col lg:flex-row-reverse lg:justify-end lg:items-start lg:min-h-screen lg:gap-8">
        <OrderSummary order={order} />
        <div className="bg-blue-300 bg-opacity-25 w-full mt-24 lg:mt-0 lg:w-2/3 px-8">
          <h3>Please fill out this form to finalize tour order</h3>
          {/* TODO: Finish Checkout Form */}

          <CheckoutForm order={order} />
        </div>
      </div>
    </>
  );
}

export default Checkout;
