import React, { useState } from "react";
import { client } from "../lib/client";

import { FooterBanner, HeroBanner, Product } from "../components";
const Home = ({ products, bannerData }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <HeroBanner id="banner" HeroBanner={bannerData.length && bannerData[0]} />
      <div id="best-selling-products" className="products-heading">
        <br />
        <br />
        <h2>Best Selling Products</h2>
      </div>
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
        <FooterBanner id="footer" FooterBanner={bannerData && bannerData[0]} />
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
