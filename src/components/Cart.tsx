import { useContext } from "react";
import { DataContext } from "../App";
import CartCard from "./CartCard";


const Cart = () => {
  const { cart } = useContext(DataContext);

  return (
    <div>
      <h1 className="mt-4 text-nowrap ml-5 text-3xl font-bold flex gap-10 items-center border-b pb-4">My Cart {cart.length === 0 && <span className="text-lg font-light flex justify-between ">&nbsp;(Your cart is empty) </span>}</h1>
      <div className="flex items-center flex-col">{cart.length > 0 && cart.map((item, index) => <CartCard key={index} item={item} />)}</div>
    </div>
  );
};

export default Cart;
