import React from "react";
import {
  FaMapMarkerAlt,
  FaWhatsapp,
  FaPhone,
  FaMailchimp,
} from "react-icons/fa";
import ReactWhatsapp from "react-whatsapp";

const Footer = () => {
  const phoneNumber = "+923433093451";
  const emailAddress = "contact@example.com"; // Replace with your actual email address
  const location =
    "Qasim electronics, Shop no 10, bismillah market, 236 Shambhu Nath St, Artillery Maidan, Karachi, Karachi City, Sindh"; //
  const handleCallButtonClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  const handleEmailButtonClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  const handleLocationButtonClick = () => {
    window.open(`https://www.google.com/maps?q=${location}`, "_blank");
  };
  return (
    <div className="footer-container">
      <p>2023 - {"𝒬𝒶𝓈𝒾𝓂 𝐸𝓁𝑒𝒸𝓉𝓇𝑜𝓃𝒾𝒸𝓈"} All rights reserverd</p>
      <p className="icons">
        <FaMapMarkerAlt onClick={handleLocationButtonClick} />
        <FaPhone onClick={handleCallButtonClick} />
        <ReactWhatsapp style={{ all: "unset" }} number={phoneNumber}>
          <FaWhatsapp />
        </ReactWhatsapp>
      </p>
    </div>
  );
};

export default Footer;
