import { useState } from "react";
import { createContext } from "react";

const Context = createContext();
const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState(0);
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
