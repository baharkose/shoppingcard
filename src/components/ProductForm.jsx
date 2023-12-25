import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductProvider";

const ProductForm = ({formData, handleChange, handleSubmit}) => {
  // const { product, productF } = useContext(ProductContext);
  // const [name, setName] = useState("");
  // const [price, setPrice] = useState("");
  // const [amount, setAmount] = useState("");
  // const [image, setImage] = useState("");

  // const [newProduct, setNewProduct] = useState({
  //   amount: "",
  //   dampingRate: "",
  //   id: new Date().getTime(),
  //   image: "",
  //   name: "",
  //   price: "",
  //   dampingRate: 3,
  // });

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const newProduct = {
  //     id: new Date().getTime(),
  //     name: name,
  //     price: price,
  //     amount: amount,
  //     image: image,
  //     dampingRate: 3,
  //   };

  //   console.log(newProduct);
  //   productF(newProduct);
  // };


  return (
    <div style={{witdh:"100%"}}>
      <article id="add-product" className="mb-4 mt-4" style={{width:"70%"}}>
      <h1 className="text-center">Product</h1>
      <form className="p-2">
        <div className="mb-3">
          <label htmlFor="add-name" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="add-name"
            required
            id="name"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="add-price" className="form-label">
            Product Price
          </label>
          <input
            type="number"
            className="form-control"
            id="add-price"
            required
            id="price"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="add-quantity" className="form-label">
            Product Quantity
          </label>
          <input
            type="number"
            className="form-control"
            id="add-quantity"
            required
            id="amount"
            onChange={handleChange}
          />
        </div>
        <label htmlFor="add-image" className="form-label">
          Product Image
        </label>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            https://example.com/
          </span>
          <input
            type="url"
            className="form-control"
            id="add-image"
            aria-describedby="basic-addon3"
            required
            id="image"
            onChange={handleChange}
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="add-to-cart btn btn-success btn-sm"
            onClick={handleSubmit}
          >
            <i className="fa-solid fa-cart-plus me-2"></i>Save To Product
          </button>
        </div>
      </form>
    </article>
    </div>
    
  );
};

export default ProductForm;
