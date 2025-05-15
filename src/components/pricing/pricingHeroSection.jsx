import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { BsInfoCircle, BsHeadset } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import assets from '../../assets/assests';

const PaymentGatewayPromoSmall = () => {
  const handleSignUp = () => alert('Redirecting to Sign Up...');
  const handleSales = () => alert('Contacting Sales...');

  return (
    <section style={{ padding: '200px 0 30px 0' }}>
      <Container>
        <Row className="justify-content-center">
          {/* Main Content */}
          <Col xs={12} md={6} className="text-center mb-4 mb-md-0">
            <div>
              <h5 className="fw-bold text-dark">Accept Payments Easily</h5>
              <p className="text-muted small">Fast and affordable payment solutions.</p>
            </div>

            <div className="text-center mb-3">
              <h6 className="fw-semibold text-primary">Transaction Fee: </h6>
              <div className="d-flex justify-content-center align-items-baseline mt-1">
                <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e293b' }}>2%</span>
                <div className="ms-2">
                  <p className="mb-0 small">Platform Charges</p>
                  <BsInfoCircle className="text-muted mt-1" />
                </div>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <Row className="mb-3">
              <Col xs={12} sm={6}>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={handleSignUp}
                  className="w-100 py-1 fw-semibold"
                  style={{
                    border: 'none',
                  }}
                >
                  Get Started
                </Button>
              </Col>
              <Col xs={12} sm={6} className="mt-3 mt-sm-0">
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={handleSales}
                  className="w-100 py-1 fw-semibold"
                  style={{
                    border: '2px solid #0077b6',
                  }}
                >
                  <BsHeadset className="me-1" /> Talk to Sales
                </Button>
              </Col>
            </Row>

            {/* Info Card (commented out as it is empty) */}
            <Card className="shadow-sm border-0 rounded-2 bg-white">
              <Card.Body className="text-center p-2"></Card.Body>
            </Card>
          </Col>

          {/* Right-Side Image Section */}
          <Col xs={12} md={6} className="d-flex justify-content-center mt-3 mt-md-0">
            <div
              className="payment-graphic"
              style={{
                background: 'url(https://via.placeholder.com/250) no-repeat center center',
                backgroundSize: 'cover',
                borderRadius: '6px',
                width: '100%',
                height: '200px',
                // boxShadow: '0 3px 8px rgba(0,0,0,0.1)',
              }}
            >
              <img
                src={assets.contact}
                alt="contact sales"
                style={{
                  maxWidth: '100%',
                  height: '400px',
                  objectFit: 'contain',
                  paddingLeft: "100px",
                  marginBottom: "100px"
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PaymentGatewayPromoSmall;
