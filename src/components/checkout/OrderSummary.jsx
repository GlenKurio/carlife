import ClassBadge from "../cars/ClassBadge";
function OrderSummary({ order }) {
  return (
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
  );
}

export default OrderSummary;
