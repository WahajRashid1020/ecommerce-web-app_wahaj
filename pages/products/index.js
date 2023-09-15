import React, { useState } from "react";

import { Product } from "../../components";
import { client } from "../../lib/client";

const Products = ({ products }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="productspage">
      <div className="search">
        <input
          className="searchbar"
          type="text"
          placeholder="Search products"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div id="products-container" className="products-container">
        {filteredProducts.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <div />
    </div>
  );
};
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products },
  };
};

export default Products;
