import React from "react";
const Contact = () => {
  const phoneNumber = "+923002259901";
  const emailAddress = "maxim786@gmail.com"; // Replace with your actual email address
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
    <>
      <h1 className="products-heading">Get In Touch With A Single Click</h1>

      <div className="outer-box">
        <div className="inner-box">
          <div className="contact-box">
            <button
              className="locate"
              type="button"
              onClick={handleEmailButtonClick}
            >
              Email US
            </button>
            <button
              className="call"
              type="button"
              onClick={handleCallButtonClick}
            >
              Call US
            </button>

            <button
              className="locate"
              type="button"
              onClick={handleLocationButtonClick}
            >
              Locate US
            </button>
          </div>

          <div className="visitingcard">
            <h3>Phone Numbers</h3>
            <p>021-35682653</p>
            <p>0300-2259901 </p>
            <p>0323-2487536</p>
            <br />
            <h3>Email</h3>
            <p>{emailAddress}</p>
            <br />
            <h3>Location</h3>
            <p>{location}</p>
            <p>loacted infront fo coperative market</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
