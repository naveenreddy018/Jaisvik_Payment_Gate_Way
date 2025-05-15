import React from "react";
import assets from "../../../../../assets/assests";

const paymentMethods = [
  {
    name: "Credit/Debit Cards",
    imgSrc: assets.cardspayments,
    description:
      "Pay securely using your credit or debit cards including Visa, MasterCard, and more.",
  },
  {
    name: "UPI",
    imgSrc: assets.upi_id,
    description:
      "Instant and secure payments via Unified Payments Interface with any UPI app.",
  },
  {
    name: "Net Banking",
    imgSrc: assets.netBanking,
    description: "Direct bank transfer via internet banking for all major banks.",
  },
  {
    name: "Wallets",
    imgSrc: assets.cardSecurity,
    description: "Use popular digital wallets to pay quickly and easily.",
  },
];

const supportedApps = [
  {
    name: "Google Pay",
    logo: assets.googlePay,
    url: "https://pay.google.com/about/",
  },
  {
    name: "PhonePe",
    logo: assets.phonePay,
    url: "https://www.phonepe.com/",
  },
  {
    name: "Paytm",
    logo: assets.paypal,
    url: "https://paytm.com/",
  },
  {
    name: "BHIM",
    logo: assets.bhim,
    url: "https://www.bhimupi.org.in/",
  },
];

const PaymentInfo = () => {
  return (
    <div
      style={{
        maxWidth: "100%",
        margin: "150px auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        color: "#222",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "25px" }}>
        <h1 style={{ color: "#007bff" }}>How We Support Payments</h1>
        <p style={{ maxWidth: 600, margin: "auto", fontSize: "16px" }}>
          We provide a secure and seamless payment experience supporting multiple
          payment methods. Below are the options available for you.
        </p>
      </div>

      {/* Payment Methods */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          justifyContent: "center",
          marginBottom: "40px",
        }}
      >
        {paymentMethods.map(({ name, imgSrc, description }) => (
          <div
            key={name}
            style={{
              flex: "0 1 220px", // fixed basis for equal width
              boxSizing: "border-box",
              padding: "15px",
              textAlign: "center",
              border: "1px solid #ddd", // optional border for better visibility
              borderRadius: "8px",
              minWidth: "220px",
              maxWidth: "220px",
            }}
          >
            <img
              src={imgSrc}
              alt={name}
              style={{ width: "80px", marginBottom: "12px" }}
            />
            <h4 style={{ marginBottom: "10px", color: "#0056b3" }}>{name}</h4>
            <div style={{ fontSize: "14px", color: "#444" }}>{description}</div>
          </div>
        ))}
      </div>

      {/* UPI QR Section */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h2 style={{ color: "#007bff", marginBottom: "15px" }}>Pay Using UPI</h2>
        <img
          src={assets.qrcode}
          alt="UPI QR Code"
          style={{
            width: "200px",
            height: "200px",
            border: "3px solid #007bff",
            borderRadius: "12px",
            marginBottom: "15px",
          }}
        />
        <p style={{ fontSize: "16px", maxWidth: 400, margin: "auto" }}>
          Scan this QR code with any supported UPI app to pay instantly.
        </p>
      </div>

      {/* Supported UPI Apps */}
       
       <div style={{ textAlign: "center" }}>
  <h3 style={{ color: "#007bff", marginBottom: "20px" }}>
    Supported UPI Apps
  </h3>
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "35px",
      flexWrap: "wrap",
    }}
  >
    {supportedApps.map(({ name, logo, url }) => (
      <a
        key={name}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "#222" }}
      >
        <div
          style={{
            width: "140px",          // Fixed width
            height: "160px",         // Fixed height to keep cards equal
            cursor: "pointer",
            textAlign: "center",
            padding: "10px",
            borderRadius: "8px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#e6f0ff")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "transparent")
          }
        >
          <img
            src={logo}
            alt={name}
            style={{ width: "90px", marginBottom: "8px", flexShrink: 0 }}
          />
          <div style={{ fontWeight: "600" }}>{name}</div>
        </div>
      </a>
    ))}
  </div>
</div>;

    </div>
  );
};

export default PaymentInfo;
