import { CartType } from "../types/types";
import { LuPlus } from "react-icons/lu";
import { AiOutlineMinus } from "react-icons/ai";
import { useContext } from "react";
import { DataContext } from "../App";


const CartCard = ({ item }: { item: CartType }) => {
  const { setCart } = useContext(DataContext);

  const handleAdd = (id: number) => setCart((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: item?.quantity! + 1 } : item)));

  const handleMinus = (id: number) => setCart((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity === 0 ? item.quantity - 1 : 1 } : item)));

  const handleDelete = (id: number) => setCart((prev) => prev.filter((item) => item.id !== id));

  return (
    <div className="border pb-4 font-medium gap-2 text-lg p-5 flex w-full flex-col">
      <span className=" text-wrap">Name : {item.title}</span>
      <span>Price : ${item.price}</span>
      <div className="flex gap-6 text-xl w-full items-center justify-center">
        <button onClick={() => handleMinus(item.id)}>
          <AiOutlineMinus size={25} />
        </button>
        <span>${(item.price * (item.quantity || 1)).toFixed(2)}</span>
        <button onClick={() => handleAdd(item.id)}>
          <LuPlus size={25} />
        </button>
      </div>
      
      <div className="flex items-center justify-center mt-4"><button onClick={()=>handleDelete(item.id)} className="flex hover:opacity-80 items-center justify-center bg-red-600 rounded text-xl  p-3 transition-all duration-200 hover:scale-105">Remove Item</button></div>
    </div>
  );
};

export default CartCard;
