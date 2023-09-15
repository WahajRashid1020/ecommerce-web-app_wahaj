import React, { useEffect } from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const { showCart, setshowCart, totalQuantities } = useStateContext();

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar-container");
      const offset = 100; // Change this value based on when you want the color change to happen

      if (window.scrollY > offset) {
        navbar.classList.add("scrolled-navbar");
      } else {
        navbar.classList.remove("scrolled-navbar");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar-container">
      <div className="logo">
        <Link href="/">{"𝒬𝒶𝓈𝒾𝓂 𝐸𝓁𝑒𝒸𝓉𝓇𝑜𝓃𝒾𝒸𝓈"}</Link>
      </div>
      <div className="nav-items">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="logo">
        <button
          type="button"
          className="cart-icon"
          onClick={() => setshowCart(true)}
        >
          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>
      </div>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
