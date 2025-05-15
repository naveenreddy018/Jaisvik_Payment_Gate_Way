import { Container, Row, Col, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../../Footer/paymentFooter";
import { Nav} from 'react-bootstrap';
const JasivikAPIIntegrationDoc = () => {
    return (
        <>
            <Container className="mt-5 p-5" >
                <Nav.Link href="/checkoutpage" className="fw-medium mt-5 text-primary ">
               View checkOutPage
              </Nav.Link>
                <Row className="my-5">
                    <Col>
                        <h1 className="mb-4">Jasivik Payment Gateway API Integration Guide</h1>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Text>
                                    The Jasivik Payment Gateway API allows businesses to accept online payments via credit/debit cards, wallets, and other payment methods. This document will guide you through the integration process, including how to obtain API credentials, make requests, and handle responses from the API.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Prerequisites</Card.Title>
                                <ul>
                                    <li>Jasivik Account: You need to create a Jasivik account to obtain your API credentials.</li>
                                    <li>Development Environment: A working development environment where you can make HTTP requests and process responses.</li>
                                </ul>
                            </Card.Body>
                        </Card>

                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Step 1: Create a Jasivik Account</Card.Title>
                                <ol>
                                    <li>Visit the Jasivik Dashboard: <a href="https://www.jasivik.com" target="_blank" rel="noopener noreferrer">Jasivik Payment Gateway Dashboard</a></li>
                                    <li>API Key Generation: Go to API Settings and generate your API keys.</li>
                                    <li>Use the Test API Key for development.</li>
                                    <li>Use the Live API Key for real transactions.</li>
                                </ol>
                            </Card.Body>
                        </Card>

                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Step 2: API Authentication</Card.Title>
                                <p>The Jasivik API uses Bearer Token Authentication. Include your API key in the request headers.</p>
                                <code>Authorization: Bearer &lt;YOUR_API_KEY&gt;</code>
                            </Card.Body>
                        </Card>

                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Step 3: API Endpoints</Card.Title>

                                <h5 className="mt-3">Create Payment Request</h5>
                                <ul>
                                    <li><strong>Endpoint:</strong> /payment</li>
                                    <li><strong>Method:</strong> POST</li>
                                    <li><strong>Description:</strong> Initiates a payment request.</li>
                                </ul>
                                <p><strong>Body Parameters:</strong></p>
                                <ul>
                                    <li>amount (required): Amount to be charged.</li>
                                    <li>card_number (required): The card number.</li>
                                    <li>card_expiry (required): Expiry in MM/YY.</li>
                                    <li>card_cvc (required): Card CVC.</li>
                                </ul>

                                <h5 className="mt-4">Retrieve Payment Status</h5>
                                <ul>
                                    <li><strong>Endpoint:</strong> /payment/</li>
                                    <li><strong>Method:</strong> GET</li>
                                    <li><strong>Description:</strong> Retrieves payment status using transaction ID.</li>
                                </ul>
                            </Card.Body>
                        </Card>

                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Step 4: Handling Payment Responses</Card.Title>
                                <p>Responses indicate whether payment succeeded or failed, with details.</p>

                                <h6>Success Response Example</h6>
                                <pre style={{ fontSize: "0.85rem", background: "#f8f9fa", padding: "10px", borderRadius: "4px", overflowX: "auto" }}>
                                    <code>
                                        {`{
  "status": "success",
  "transaction_id": "12345",
  "message": "Payment successful",
  "amount": 1000,
  "currency": "USD",
  "payment_method": "Credit Card"
}`}
                                    </code>
                                </pre>

                                <h6>Failure Response Example</h6>
                                <pre style={{ fontSize: "0.85rem", background: "#f8f9fa", padding: "10px", borderRadius: "4px", overflowX: "auto" }}>
                                    <code>
                                        {`{
  "status": "failure",
  "error_code": "CARD_DECLINED",
  "message": "The card was declined by the bank."
}`}
                                    </code>
                                </pre>
                            </Card.Body>
                        </Card>

                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Step 5: Security Guidelines</Card.Title>
                                <ul>
                                    <li>Use HTTPS for all API requests.</li>
                                    <li>Ensure PCI DSS compliance.</li>
                                    <li>Use tokenization for storing sensitive payment data.</li>
                                </ul>
                            </Card.Body>
                        </Card>

                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Step 6: Testing</Card.Title>
                                <ul>
                                    <li>Use your Test API Key.</li>
                                    <li><strong>Test Card Details:</strong></li>
                                    <li>Card Number: 4111 1111 1111 1111</li>
                                    <li>Expiry: 12/23</li>
                                    <li>CVC: 123</li>
                                </ul>
                            </Card.Body>
                        </Card>

                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Step 7: Going Live</Card.Title>
                                <p>Switch to your Live API Key and test thoroughly before launching.</p>
                            </Card.Body>
                        </Card>

                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Step 8: Support and Troubleshooting</Card.Title>
                                <p>Refer to the official docs or email <a href="mailto:support@jasivik.com">support@jasivik.com</a> for help.</p>
                            </Card.Body>
                        </Card>

                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Conclusion</Card.Title>
                                <p>This guide explains how to integrate Jasivik Payment Gateway API. For advanced features, visit the official docs.</p>
                            </Card.Body>
                        </Card>

                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>Resources</Card.Title>
                                <ul>
                                    <li><a href="https://www.jasivik.com/docs" target="_blank" rel="noopener noreferrer">Jasivik API Documentation</a></li>
                                    <li><a href="https://react-bootstrap.github.io/" target="_blank" rel="noopener noreferrer">React-Bootstrap Documentation</a></li>
                                    <li><a href="https://axios-http.com/docs/intro" target="_blank" rel="noopener noreferrer">Axios Documentation</a></li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default JasivikAPIIntegrationDoc;
