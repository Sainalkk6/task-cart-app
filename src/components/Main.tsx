import { useContext } from "react";
import { DataContext } from "../App";
import ProductCard from "./ProductCard";

const Main = () => {
  const { products } = useContext(DataContext);
  return (
    <>
      {products && products.length > 0 ? (
        <div className="w-full no-scroll grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 px-8 gap-5 py-5">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex item-center justify-center mt-40 text-3xl">Sorry we could'nt find what you are looking for</div>
      )}
    </>
  );
};

export default Main;

