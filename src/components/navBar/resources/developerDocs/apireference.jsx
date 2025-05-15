import React from "react";
import { Container } from "react-bootstrap";

const ApiReference = () => {
  const apiEndpoints = [
    {
      endpoint: "/api/payments/create",
      method: "POST",
      description: "Create a new payment transaction and get a payment token.",
      request: `{
  amount: number,
  currency: string,
  paymentMethod: string
}`,
      response: `{
  transactionId: string,
  status: string,
  token: string
}`,
    },
    {
      endpoint: "/api/payments/status",
      method: "GET",
      description: "Check payment status by transaction ID.",
      request: `?transactionId=string`,
      response: `{
  transactionId: string,
  status: string,
  amount: number
}`,
    },
    {
      endpoint: "/api/payments/refund",
      method: "POST",
      description: "Request a refund for a completed payment.",
      request: `{
  transactionId: string,
  amount: number
}`,
      response: `{
  refundId: string,
  status: string
}`,
    },
    {
      endpoint: "/api/payments/cancel",
      method: "POST",
      description: "Cancel a pending or failed payment.",
      request: `{
  transactionId: string
}`,
      response: `{
  status: string,
  message: string
}`,
    },
    {
      endpoint: "/api/payments/list",
      method: "GET",
      description: "List all transactions with optional filters.",
      request: `?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD&status=string`,
      response: `[
  {
    transactionId: string,
    amount: number,
    status: string,
    date: string
  }
]`,
    },
  ];

  return (
    <Container style={{ marginTop: "150px", fontFamily: "Arial, sans-serif", maxWidth: "80%" }}>
      <h2 className="text-primary mb-4">API Reference</h2>
      {apiEndpoints.map(({ endpoint, method, description, request, response }, index) => (
        <div key={index} className="mb-4">
          <div className="d-flex justify-content-between align-items-center mb-1">
            <div>
              <strong>Endpoint:</strong> <code>{endpoint}</code>
            </div>
            <div>
              <strong>Method:</strong> <span className="text-uppercase">{method}</span>
            </div>
          </div>
          <div className="mb-1">
            <strong>Description:</strong> {description}
          </div>
          <div className="mb-1">
            <strong>Request:</strong>
            <pre style={{ backgroundColor: "#f1f1f1", padding: "8px", borderRadius: "3px" }}>{request}</pre>
          </div>
          <div>
            <strong>Response:</strong>
            <pre style={{ backgroundColor: "#f1f1f1", padding: "8px", borderRadius: "3px" }}>{response}</pre>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default ApiReference;
