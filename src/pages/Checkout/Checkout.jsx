import { useSearchParams } from "react-router-dom";
import useOrderStore from "../../store/orderStore";
import ClassBadge from "../../components/cars/ClassBadge";
import CheckoutForm from "./CheckoutForm";
import { Link } from "react-router-dom";
function Checkout() {
  const { order } = useOrderStore();
  // total: 0,
  // carId: null,
  // range: 1,
  // make: "",
  // model: "",
  // img: "",
  // price: 0,
  // type: "",
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
        <article className="flex flex-col gap-2 p-4 border-blue-200 border-[1px] rounded-md shadow-md lg:w-1/3 lg:sticky lg:top-24 right-2">
          <h2 className="text-center text-3xl font-medium text-blue-900 mb-8">
            Your Order:
          </h2>
          <div className="w-full flex items-center border-b-[1px] border-solid pb-2 border-blue-200 justify-center">
            <img
              className="w-1/3 rounded-md"
              src={order.img}
              alt={`img of ${order.make} ${order.model}`}
            />
            <span className="mx-auto font-semibold text-2xl text-blue-950 md:text-1xl md:text-center">
              {order.make} {order.model}
            </span>

            <ClassBadge type={order.type} />
          </div>
          <div className="text-xl w-full flex items-center border-b-[1px] border-solid pb-2 border-blue-200 justify-between">
            <span>Price for 1 day: </span>
            <span className="font-semibold">${order.price}</span>
          </div>
          <div className="text-xl w-full flex items-center border-b-[1px] border-solid pb-2 border-blue-200 justify-between">
            <span>Rent term: </span>
            <span className="font-semibold">{order.range} days</span>
          </div>
          <div className="text-xl w-full flex items-center  py-2 border-blue-200 justify-between">
            <span>Total: </span>
            <span className="font-semibold">${order.total}</span>
          </div>
        </article>
        <div
          className="bg-blue-300 bg-opacity-25 w-full mt-24 lg:mt-0  lg:w-2/3  px-8 
      "
        >
          <h3>Please fill out this form to finalize tour order</h3>
          <CheckoutForm />
        </div>
      </div>
    </>
  );
}

export default Checkout;
