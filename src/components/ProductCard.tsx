import { useContext, useState } from "react";
import { ProductType } from "../types/types";
import { DataContext } from "../App";

const ProductCard = ({ product }: { product: ProductType }) => {
  const { cart, setCart } = useContext(DataContext);
  const [showMessage,setShowMessage] = useState(false)
  const handleClick = () => {
    setShowMessage(true)
    setTimeout(()=>setShowMessage(false),1000)
    if (!cart.includes(product)) {
      setCart((t) => {
        const newer = t.filter((i) => i.title !== product.title);
        return [...newer, { id: product.id, title: product.title, price: product.price, quantity: 1 }];
      });
    }
  };

  return (
    <div className="flex flex-col hover:scale-105 transition-all z-10  hover:border-green-600 duration-300 gap-10 min-h-[450px] max-w-[400px] pt-4 border-[3px] rounded bg-white">
      <div className="max-w-[400px] flex items-center justify-center border-b pb-4">
        <img src={product.image} className="object-contain h-[160px] object-center" alt="" />
      </div>
      <div className="flex flex-col h-full pb-4 items-center justify-between">
        <h1 className="text-lg text-center">{product.title}</h1>
        <span className="text-green-600 text-xl">${product.price}</span>
        {showMessage && <span> Item added to cart</span>}
        <button onClick={ handleClick} className={`flex hover:bg-green-800 bg-green-500 items-center justify-center hover:text-white rounded text-xl  p-3 transition-all duration-200 hover:scale-105`} >Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
