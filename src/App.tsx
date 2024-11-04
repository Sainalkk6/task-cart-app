import { createContext, useEffect, useState } from "react";
import { usegetPost } from "./api/useGetPosts";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { CartType, DataContextType, ProductType } from "./types/types";
import CustomContainer from "./components/CustomContainer";

export const DataContext = createContext({} as DataContextType);

const App = () => {
  const [products, setProducts] = useState([] as ProductType[]);
  const [cart, setCart] = useState([] as CartType[]);
  const { data, isLoading } = usegetPost();
  useEffect(() => {
    setProducts(data);
  }, [data]);

  return (
    <div className="w-full no-scroll flex-col flex min-h-screen">
      <DataContext.Provider value={{ cart, products, setCart, setProducts }}>
        <Navbar />
        {isLoading ? <CustomContainer label="Loading..." /> : <Main />}
      </DataContext.Provider>
    </div>
  );
};

export default App;
