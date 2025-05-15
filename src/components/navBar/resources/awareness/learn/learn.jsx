
import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const faqs = [
  {
    question: "What is a Payment Aggregator?",
    answer: `A payment aggregator is an authorised service provider that enables customers to make and businesses to accept payments online. The payment aggregator thus makes settlements of the payments received from customers to online businesses and merchants. Payment aggregators enable businesses to accept various payment methods such as debit cards, credit cards, cardless EMIs, UPI, bank transfers, e-wallets, and e-mandates. Payment aggregators secure a license from the Reserve Bank of India for processing payments by enabling them with infrastructure to accept digital payments.

Payment aggregators simplify payment processes by providing a single platform to handle multiple payment methods, reducing the need for merchants to integrate separately with banks or payment gateways. They offer features like fraud detection, risk management, reporting, and settlement reconciliation, enabling seamless transaction experiences for both customers and merchants.`,
  },
  {
    question: "How is a payment aggregator different from an online/digital wallet?",
    answer: `An online/digital wallet stores a user’s payment information and allows them to make purchases electronically. Examples include Paytm, Google Pay, and Amazon Pay. Users preload money into wallets or link them to bank accounts.

In contrast, a payment aggregator facilitates payment processing for merchants by aggregating multiple payment methods but does not store user funds like a wallet. Aggregators act as intermediaries between merchants and payment networks, ensuring transactions are routed correctly and securely. They provide unified reporting and settlement services but do not hold user balances.`,
  },
  {
    question: "What payment modes are supported by Jaisvik?",
    answer: `Jaisvik supports multiple payment modes to cater to diverse customer preferences, including:

- Credit cards (Visa, Mastercard, American Express)
- Debit cards
- Net banking from major Indian banks
- UPI (Unified Payments Interface) for instant bank-to-bank transfers


This extensive support allows merchants to offer flexible payment options to their customers, improving conversion rates and customer satisfaction.`,
  },
  {
    question: "What platforms does Jaivik payment aggregator support?",
    answer: `Jaisvik supports a wide range of platforms to enable seamless payment processing across different sales channels, including:

- Websites through easy integration with popular ecommerce platforms such as Shopify, WooCommerce, Magento, and custom-built websites
- Mobile applications on both iOS and Android using SDKs for native payment processing
- Marketplaces and third-party sales platforms
- APIs for developers to integrate payment processing into custom applications or ERP systems

Additionally, Jaisvik provides dashboard tools for merchants to monitor transactions, manage settlements, and generate reports, facilitating smooth business operations across multiple channels.`,
  },
];


const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ maxWidth: 1200, margin: "150px auto", fontFamily: "Arial, sans-serif" }}>
      {faqs.map((faq, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            borderRadius: 5,
       
            marginBottom: 15,
            boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
          }}
        >
          <div
            onClick={() => toggleIndex(index)}
            style={{
              cursor: "pointer",
              padding: "15px 20px",
              backgroundColor: "#f8f9fa",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontWeight: "600",
              fontSize: 18,
              userSelect: "none",
            }}
          >
            {faq.question}
            <span
              style={{
                display: "inline-block",
                transition: "transform 0.3s ease",
                transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                fontSize: 22,
                lineHeight: 1,
              }}
            >
              ▼
            </span>
          </div>
          <Collapse in={openIndex === index}>
            <div
              style={{
                padding: "15px 20px",
                backgroundColor: "white",
                fontSize: 16,
                color: "#444",
                lineHeight: 1.5,
                borderTop: "1px solid #ddd",
              }}
            >
              {faq.answer}
            </div>
          </Collapse>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
