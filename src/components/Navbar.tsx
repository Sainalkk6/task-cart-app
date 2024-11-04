import { useContext, useEffect, useRef, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { DataContext } from "../App";

import Cart from "./Cart";
import { usegetPost } from "../api/useGetPosts";
import { ProductType } from "../types/types";
import ThankyouComponent from "./ThankyouComponent";

const Navbar = () => {
  const { setProducts, cart, setCart } = useContext(DataContext);
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState("");
  const [checkout, setCheckout] = useState(false);
  const { data } = usegetPost();
  const visibilityRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);
  const handleVisibility = () => setVisible(true);
  useEffect(() => {
    if (search === "") {
      setProducts(data);
    } else {
      const filterBySearch =
        data &&
        data.filter((item: ProductType) => {
          if (item.title.toLowerCase().includes(search.toLowerCase())) {
            return item;
          }
        });
      setProducts(filterBySearch);
    }
  }, [search]);

  const closeMenu = (e: any) => {
    if (visible && !visibilityRef.current?.contains(e.target)) {
      setVisible(false);
    }
  };

  const handleCheckout = () => {
    setCart([]);
    setCheckout(true);
    setTimeout(() => setCheckout(false), 4000);
  };

  document.addEventListener("mousedown", closeMenu);

  return (
    <div className="px-10 flex w-full z-20 bg-white/10 backdrop-blur-xl  gap-10 justify-between items-center border-b h-20 sticky top-0">
      <h1 className="font-bold hidden sm:block text-lg">Shopify</h1>
      <input type="text" onChange={handleChange} placeholder="Search for products..." className="rounded-[40px] max-w-[600px] text-black w-full text-lg px-5 py-2 outline-none border" />
      <button className="relative" onClick={handleVisibility}>
        {cart.length > 0 && <div className="bg-red-700 w-5 h-5 rounded-full absolute -right-3 -top-3 flex items-center justify-center text-sm font-bold">{cart.length}</div>}
        <FaCartShopping size={25} />
      </button>

      <div ref={visibilityRef} className={`absolute right-0 h-[665px] overflow-y-scroll transition-all duration-700 border bg-white z-40 top-20 ${visible ? "md:w-[500px]  w-[400px]" : "w-0"}`}>
        {visible && (
          <div className="flex flex-col pb-3 gap-10">
            <Cart />
            {cart.length > 0 && (
              <div className="flex w-full items-center justify-center">
                <button onClick={handleCheckout} className="flex items-center justify-center px-4 py-2 rounded transition-all bg-slate-700 text-white hover:bg-green-500 duration-200">
                  Checkout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      {checkout && <ThankyouComponent />}
    </div>
  );
};

export default Navbar;
