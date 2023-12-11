// Import necessary dependencies
import { create } from "zustand";

// Create a Zustand store
const useOrderStore = create((set) => ({
  order: JSON.parse(localStorage.getItem("order")) || {
    total: 0,
    carId: null,
    range: 1,
    make: "",
    model: "",
    img: "",
    price: 0,
    type: "",
  },
  setOrder: (newOrder) =>
    set((state) => {
      const updatedOrder = { ...state.order, ...newOrder };
      localStorage.setItem("order", JSON.stringify(updatedOrder));
      return { order: updatedOrder };
    }),
}));

// // Component where you want to use the order state
// const YourComponent = () => {
//   // Access the order state and setOrder function from the store
//   const { order, setOrder } = useOrderStore();

//   // Function to update order state
//   const updateOrder = () => {
//     const newOrder = {
//       total: 500, // Replace with your value
//       carId: 123, // Replace with your value
//       range: 200, // Replace with your value
//     };
//     setOrder(newOrder);
//   };

//   // Call the updateOrder function somewhere in your component when needed
//   // For example, onClick of a button
//   return (
//     <div>
//       <button onClick={updateOrder}>Update Order</button>
//       <p>Total: {order.total}</p>
//       <p>Car ID: {order.carId}</p>
//       <p>Range: {order.range}</p>
//     </div>
//   );
// };

export default useOrderStore;
