import { ReactNode, createContext, useEffect, useState } from "react";

interface Product {
  id: string;
  name: string;
  priceFormatted: string;
  price: number;
  imageUrl: string;
}

interface ShoppingCartContextProps {
  productList: Product[];
  openModalCart: "true" | "false";
  addProductToChart: (value: Product) => void;
  removeProductFromChart: (productId: string) => void;
  toggleModalCart: () => void;
}

export const ShoppingCartContext = createContext(
  {} as ShoppingCartContextProps
);

interface ShoppingCartContextProviderProps {
  children: ReactNode;
}

export function ShoppingCartContextProvider({
  children,
}: ShoppingCartContextProviderProps) {
  const [productList, setProductList] = useState<Product[]>([]);
  const [openModalCart, setModalCart] = useState<"true" | "false">("false");

  useEffect(() => {
    if (!productList.length) {
      setModalCart("false");
    }
  }, [productList]);

  function addProductToChart(value: Product) {
    setProductList((state) => [...state, value]);
  }

  function removeProductFromChart(productId: string) {
    setProductList((state) => {
      const newProductList = state.filter(
        (product) => product.id !== productId
      );
      return newProductList;
    });
  }

  function toggleModalCart() {
    setModalCart((state) => (state === "false" ? "true" : "false"));
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        productList,
        openModalCart,
        addProductToChart,
        removeProductFromChart,
        toggleModalCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
