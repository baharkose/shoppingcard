import React, { createContext, useState } from "react";
import { useCallback } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState({
    id: "",
    image: "",
    amount: "",
    price: "",
    dampingRate: "",
  });

  //  tekrar eden render işlemini
  const productF = (newProduct) => {
    setProduct(newProduct);

    // - yukarıdaki ifade de üstüne obje ekleme işlemi yapılmaktadır.
  };
  return (
    <ProductContext.Provider value={{ product, productF }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
