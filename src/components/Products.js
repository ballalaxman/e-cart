import React from "react";
import Product from "./Product";
const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "MacBook Pro",
    imgURL: "https://cdn.mos.cms.futurecdn.net/uWjEogFLUTBc8mSvagdiuP.jpg",
    price: 2500,
  },
  {
    id: 2,
    name: "Apple iPhone 13",
    imgURL: "https://m.media-amazon.com/images/I/71gm8v4uPBL._SL1500_.jpg",
    price: 800,
  },
  {
    id: 3,
    name: "Oppo A96",
    imgURL:
      "https://image.oppo.com/content/dam/oppo/product-asset-library/a/a96-global/v1/assets/module-feature/module-feature-3-1920.png",
    price: 299,
  },
  {
    id: 4,
    name: "Chrome Book",
    imgURL: "https://m.media-amazon.com/images/I/71ihb0lKsYL._SL1500_.jpg",
    price: 1199,
  },
  {
    id: 5,
    name: "bOAT Bluetooth ",
    imgURL:
      "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-2_0a0b0dd1-2a5d-4887-afad-7593ecf06ca1_600x.png",
    price: 69,
  },
];
const Products = () => {
  return (
    <div>
      <ul className="products-container">
        {DUMMY_PRODUCTS.map((product, index) => (
          <li key={index}>
            <Product
              id={product.id}
              name={product.name}
              imgURL={product.imgURL}
              price={product.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
