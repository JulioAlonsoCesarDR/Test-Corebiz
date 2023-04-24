import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const Context = createContext();
const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState(parseInt(localStorage.getItem('countProduct')));

  useEffect(() => {
    localStorage.setItem('countProduct', products)
  }, [products])
  const addProduct = () => setProducts(products + 1);
  
  return (
    <Context.Provider
      value={{
        products,
        addProduct,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider };
export default Context;
