import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { firestore } from "../services/firebase/firebase";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useCreateOrder() {
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();
  const navigate = useNavigate();

  async function placeOrder(order) {
    try {
      setIsLoading(true);
      setError(null);

      const orderDoc = {
        email: order.email,
        fullName: order.fullName,
        car: order.car,
        days: order.days,
        total: order.total,
        createdAt: Date.now(),
      };

      await addDoc(collection(firestore, "orders"), orderDoc);
      localStorage.setItem("order-details", JSON.stringify(orderDoc));

      setIsLoading(false);
      toast.success("Order placed!");
      return navigate("/success");
    } catch (e) {
      setError(e.message);
      setIsLoading(false);
      toast.error("There was an error");
      throw new Error(e.message);
    }
  }
  return { placeOrder, isLoading, error };
}

export default useCreateOrder;
