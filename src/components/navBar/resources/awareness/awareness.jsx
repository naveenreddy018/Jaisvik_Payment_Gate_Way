import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const LearnItem = ({ title, link }) => (
  <li className="py-2 text-base md:text-lg font-medium hover:text-blue-600 cursor-pointer transition-all duration-200 text-center">
    {link ? (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    ) : (
      title
    )}
  </li>
);

const PaymentGatewayLearn = () => {
  const learnLinks = [
    { title: "Developer Docs", link: "#" },
    { title: "Integrations", link: "#" },
    { title: "API Reference", link: "#" },
    { title: "API Playground", link: "#" },
    { title: "Onboarding APIs", link: "#" },
    { title: "SDK Downloads", link: "#" },
    { title: "Error Code Reference", link: "#" },
    { title: "Webhooks & Events", link: "#" },
    { title: "Security Best Practices", link: "#" },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <h2 className="text-3xl font-bold text-center mb-4 text-blue-800">
        Learn About Payment Gateways
      </h2>

      <section className="mb-6">
        <p className="text-gray-700 text-base md:text-lg mb-4">
          A <strong>Payment Gateway</strong> is a service that authorizes and processes payments for online and offline businesses. It connects a merchant's website with the payment processing network and ensures that sensitive card details are handled securely.
        </p>
        <p className="text-gray-700 text-base md:text-lg">
          It acts as a bridge between the customer's bank and the merchant’s bank, handling encryption, fraud detection, and transaction routing in real time.
        </p>
      </section>

      <section className="bg-gray-100 p-5 rounded-md mb-6">
        <h3 className="text-xl font-semibold mb-3 text-center text-blue-700">
          What Jsvik Payment Gateway Offers
        </h3>
        <ul className="list-disc list-inside text-gray-800 space-y-2 pl-4">
          <li>RESTful APIs and SDKs for seamless integration</li>
          <li>Support for UPI, NetBanking, Wallets, and Cards</li>
          <li>Smart routing and retry logic for higher success rate</li>
          <li>Real-time settlement and transaction reporting</li>
          <li>In-depth analytics and dashboard monitoring</li>
          <li>Customizable checkout experience</li>
          <li>PCI-DSS Level 1 certified security</li>
          <li>Merchant onboarding in less than 24 hours</li>
          <li>Support for recurring payments and subscriptions</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold text-center text-blue-700 mb-3">
          Resources to Get You Started
        </h3>
        <ul>
          {learnLinks.map((item, index) => (
            <LearnItem key={index} title={item.title} link={item.link} />
          ))}
        </ul>
      </section>

      <section className="text-center mt-8">
        <h4 className="text-lg font-semibold mb-2">Need help integrating?</h4>
        <p className="text-gray-600 mb-2">
          Our developer support team is available 24/7 to help you go live faster. Contact us at <a href="mailto:support@jsvik.com" className="text-blue-600 underline">support@jsvik.com</a>.
        </p>
      </section>
    </div>
  );
};

export default PaymentGatewayLearn;
