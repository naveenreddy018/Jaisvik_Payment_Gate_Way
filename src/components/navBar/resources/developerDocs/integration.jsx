import React from "react";
import { Container, Card } from "react-bootstrap";

const PaymentIntegrationGuide = () => {
    return (
        <Container style={{ maxWidth: "80%", marginTop: "150px", fontFamily: "Arial, sans-serif" }}>
            <h2 style={{ color: "#007bff", marginBottom: "20px" }}>
                How to Integrate Payment Gateway in Your Website
            </h2>

            <h4>1. Front-End Integration</h4>
            <p>
                The front-end is where users initiate payments. Typically, you embed the payment gateway's JavaScript SDK or widget into your checkout page. This handles payment form rendering, tokenization of sensitive payment data, and secure transmission.
            </p>
            <ul>
                <li>Include the gateway's SDK script in your HTML or import it in your React app.</li>
                <li>Create a payment form collecting necessary details like card info, UPI ID, or net banking.</li>
                <li>Use the SDK methods to tokenize or encrypt payment data before sending it to your server.</li>
                <li>Handle UI feedback — loading states, validation errors, and success messages.</li>
            </ul>

            <Card className="mb-3">
                <Card.Body>
                    <h6>Example Front-End React Code:</h6>
                    <pre style={{ fontSize: "14px", backgroundColor: "#f8f9fa", padding: "10px", borderRadius: "5px" }}>
                        {`function PaymentButton() {
  const handlePayment = async () => {
    // Use payment gateway SDK to create payment token
    const paymentToken = await window.PaymentGateway.createToken({
      cardNumber: "4242 4242 4242 4242",
      expiry: "12/25",
      cvv: "123"
    });

    // Send payment token to backend
    const response = await fetch("/api/process-payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: paymentToken }),
    });

    const result = await response.json();
    if(result.success) alert("Payment Successful!");
    else alert("Payment Failed!");
  };

  return <button onClick={handlePayment}>Pay Now</button>;
}`}
                    </pre>
                </Card.Body>
            </Card>

            <h4>2. Back-End Integration</h4>
            <p>
                The back-end processes the actual payment request by communicating securely with the payment gateway's APIs.
            </p>
            <ul>
                <li>Receive the tokenized payment data from your front-end.</li>
                <li>Use the payment gateway's REST API to create a payment transaction, passing required parameters like amount, currency, and payment token.</li>
                <li>Handle the API response to determine if the payment succeeded, failed, or requires further action.</li>
                <li>Store transaction details securely in your database for record-keeping and reconciliation.</li>
            </ul>

            <Card className="mb-3">
                <Card.Body>
                    <h6>Example Back-End Node.js Code:</h6>
                    <pre style={{ fontSize: "14px", backgroundColor: "#f8f9fa", padding: "10px", borderRadius: "5px" }}>
                        {`const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

// Mock payment gateway SDK
const PaymentGateway = {
  charge: async ({ token, amount }) => {
    if (token && amount > 0) return { success: true, transactionId: "12345" };
    return { success: false };
  },
};

app.post("/api/process-payment", async (req, res) => {
  const { token } = req.body;
  const amount = 1000; // smallest currency unit

  const paymentResult = await PaymentGateway.charge({ token, amount });
  if(paymentResult.success) {
    res.json({ success: true, transactionId: paymentResult.transactionId });
  } else {
    res.status(400).json({ success: false, message: "Payment failed" });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));`}
                    </pre>
                </Card.Body>
            </Card>

            <h4>3. Webhooks & Callbacks</h4>
            <p>
                Payment gateways send asynchronous notifications for events such as payment success, failure, refunds, and chargebacks.
            </p>
            <ul>
                <li>Set up webhook endpoints on your back-end to receive these notifications.</li>
                <li>Validate webhook signatures to ensure authenticity.</li>
                <li>Update order/payment status in your system accordingly.</li>
                <li>Trigger business logic like email notifications or inventory updates.</li>
            </ul>

            <Card className="mb-3">
                <Card.Body>
                    <h6>Example Webhook Endpoint:</h6>
                    <pre style={{ fontSize: "14px", backgroundColor: "#f8f9fa", padding: "10px", borderRadius: "5px" }}>
                        {`app.post("/api/payment-webhook", (req, res) => {
  const event = req.body;
  // Verify webhook signature (important!)
  if(event.type === "payment.succeeded") {
    console.log("Payment succeeded:", event.data);
  }
  res.sendStatus(200);
});`}
                    </pre>
                </Card.Body>
            </Card>

            <h4>4. Testing & Deployment</h4>
            <p>
                Use sandbox or test environments provided by the payment gateway to simulate transactions without real money.
            </p>
            <ul>
                <li>Test various payment scenarios including success, failure, and edge cases.</li>
                <li>Verify webhook events and reconciliation processes.</li>
                <li>After thorough testing, switch API keys and endpoints to production mode.</li>
            </ul>

            <h4>Summary</h4>
            <p>
                Integrating a payment gateway involves securely capturing payment info on the front-end, processing payments on the back-end via APIs, handling asynchronous updates via webhooks, and testing thoroughly before going live.
            </p>
        </Container>
    );
};

export default PaymentIntegrationGuide;
