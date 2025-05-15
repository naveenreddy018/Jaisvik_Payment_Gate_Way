
// UpiPaymentForm.jsx
import React from 'react';
import { Row, Col, Form, Button, InputGroup, Card } from 'react-bootstrap';
import UpiQRCode from '../qrCode/qrCode';

const UpiPaymentForm = ({
    upiId,
    setUpiId,
    userUpi,
    setUserUpi,
    handlePayment,
    paymentAmount
}) => {
    return (
        <div>
            <Row className="mt-4">
                <Col md={7}>
                    <Form.Group className="mb-3">
                        <Form.Check
                            type="radio"
                            id="upi-id-option"
                            label="Your UPI ID"
                            checked={userUpi === 'User-id'}
                            onChange={() => setUserUpi('User-id')}
                        />
                    </Form.Group>

                    <InputGroup className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Enter UPI ID"
                            value={upiId}
                            onChange={(e) => setUpiId(e.target.value)}
                        />
                        <Button variant="outline-primary">Verify</Button>
                    </InputGroup>

                    <Button
                        variant="success"
                        className="mt-3"
                        onClick={handlePayment}
                    >
                        Pay Now
                    </Button>
                </Col>

                <Col md={5} className="text-center border-start">
                    <h5 className="mb-3">Scan Here</h5>
                    <Card className="d-inline-block p-3">
                        <UpiQRCode amount={paymentAmount} upiId="7732002429@ybl" />
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default UpiPaymentForm;
