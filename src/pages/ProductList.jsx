import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductProvider";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { productF } = useContext(ProductContext);

  const getData = async () => {
    try {
      const { data } = await axios(
        "https://63f4e5583f99f5855db9e941.mockapi.io/products"
      );
      console.log(data);
      setProducts(data);
      setLoading(false);
      productF(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    //- sayfa her render olduğunda istek atabilmesi için
  }, []);

  return (
    <div className="container mt-3">
      <div className={"bg-light d-sm-block d-md-flex"}>
        {loading ? (
          <p className="text-center text-danger w-100">Loading....</p>
        ) : products.length === 0 ? (
          <p className="text-center text-danger w-100">No products data...</p>
        ) : (
          <>
            <article id="product-panel" className="col-md-5">
              {products.map((product) => (
                <ProductCard key={product.id} getData={getData} {...product} />
              ))}
            </article>
            <article className="col-md-5 m-3">
              <CardTotal products={products} />
            </article>
          </>
        )}

        {/* //- burada öenmli bir nokta var jsx alanı içerisinde ternary yapabiliyoruz ancaf if else gibi koşullar kullanamıyoruz. */}
      </div>
    </div>
  );
};

export default ProductList;
