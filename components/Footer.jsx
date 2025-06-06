import React from "react";
import {
  FaMapMarkerAlt,
  FaWhatsapp,
  FaPhone,
  FaMailchimp,
} from "react-icons/fa";
import ReactWhatsapp from "react-whatsapp";

const Footer = () => {
  const phoneNumber = "+923002259901";
  const emailAddress = "qraza1020@gmail.com"; // Replace with your actual email address
  const location =
    "Qasim electronics, Shop no 10, bismillah market, 236 Shambhu Nath St, Artillery Maidan, Karachi, Karachi City, Sindh"; //
  const handleCallButtonClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  const handleEmailButtonClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  const handleLocationButtonClick = () => {
    window.open(
      `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.1199536583904!2d67.02290197537083!3d24.85975237792987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fb4041276a3%3A0x61aa4a4e8b0e4c3e!2sQasim%20electronics!5e0!3m2!1sen!2s!4v1696689891287!5m2!1sen!2s
    `,
      "_blank"
    );
  };
  return (
    <div className="footer-container">
      <div>
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          2023 -{" "}
          <img
            width="100px"
            height="50px"
            style={{ padding: "5px", borderRadius: "8px", cursor: "pointer" }}
            src="/logo.png"
            alt="QASIM ELECTRONICS"
          />{" "}
          All rights reserverd
        </span>
      </div>
      <div>
        <p className="icons">
          <FaMapMarkerAlt onClick={handleLocationButtonClick} />

          <FaPhone onClick={handleCallButtonClick} />
          <ReactWhatsapp style={{ all: "unset" }} number={phoneNumber}>
            <FaWhatsapp />
          </ReactWhatsapp>
        </p>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.1199530122954!2d67.0254769!3d24.8597524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fb4041276a3%3A0x61aa4a4e8b0e4c3e!2sQasim%20electronics!5e0!3m2!1sen!2s!4v1696690123950!5m2!1sen!2s"
          width="300"
          height="200"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
