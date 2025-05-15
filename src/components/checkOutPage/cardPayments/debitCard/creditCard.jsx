import React, { useState } from 'react';
import { Form, Row, Col, Button, Image, Alert } from 'react-bootstrap';
import assets from '../../../../assets/assests';

const CreditCardForm = ({
    cardDetails,
    setCardDetails,
    selectedMonth,
    setSelectedMonth,
    selectedYear,
    setSelectedYear,
    handlePayment
}) => {
    const [errors, setErrors] = useState({});
    const [cardNumber, setCardNumber] = useState("")
    // const [cardType,setCardType] = useState("")


    const isValidCardNumber = (number) => {
        const sanitized = number.replace(/\s+/g, '');
        let sum = 0;
        let shouldDouble = false;

        for (let i = sanitized.length - 1; i >= 0; i--) {
            let digit = parseInt(sanitized.charAt(i));
            if (shouldDouble) {
                digit *= 2;
                if (digit > 9) digit -= 9;
            }
            sum += digit;
            shouldDouble = !shouldDouble;
        }
        return sum % 10 === 0;
    };

    const validateForm = () => {
        const newErrors = {};
        const sanitizedNumber = cardDetails.number.replace(/\s+/g, '');

        if (!sanitizedNumber || sanitizedNumber.length < 13 || !isValidCardNumber(sanitizedNumber)) {
            newErrors.number = 'Invalid card number';
        }

        if (!cardDetails.name || !/^[a-zA-Z\s'-]{3,}$/.test(cardDetails.name)) {
            newErrors.name = 'Enter a valid name (letters only)';
        }

        if (!cardDetails.cvv || !/^\d{3,4}$/.test(cardDetails.cvv)) {
            newErrors.cvv = 'CVV must be 3 or 4 digits';
        }

        const month = parseInt(selectedMonth);
        const year = parseInt(selectedYear);

        if (!month || !year) {
            newErrors.expiry = 'Select valid expiry date';
        } else {
            const expDate = new Date(year, month - 1, 1);
            const now = new Date();
            if (expDate < new Date(now.getFullYear(), now.getMonth(), 1)) {
                newErrors.expiry = 'Card has expired';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const onSubmit = () => {
        if (validateForm()) {
            handlePayment();
        }
    };

    return (
        <Form>
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={3}>Card Type</Form.Label>
                <Col sm={9} className="d-flex align-items-center">
                    <Image src={assets.visaIcon} alt="Visa" width="50px" className="me-2" />
                    <Image src={assets.masterIcon} alt="Mastercard" width="50px" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={3}>Card Number</Form.Label>
                <Col sm={9}>
                    <Form.Control
                        type="text"
                        inputMode="numeric"
                        placeholder="XXXX XXXX XXXX XXXX"
                        value={cardDetails.number}
                        maxLength={19}
                        onChange={(e) => {
                            let val = e.target.value.replace(/\D/g, '').substring(0, 16);
                            val = val.replace(/(.{4})/g, '$1 ').trim();
                            setCardDetails({ ...cardDetails, number: val });
                        }}
                        isInvalid={!!errors.number}
                    />
                    <Form.Control.Feedback type="invalid">{errors.number}</Form.Control.Feedback>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={3}>Name on Card</Form.Label>
                <Col sm={9}>
                    <Form.Control
                        type="text"
                        placeholder="Enter name as on card"
                        value={cardDetails.name}
                        onChange={(e) => setCardDetails({ ...cardDetails, name: e.target.value })}
                        isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={3}>CVV Number</Form.Label>
                <Col sm={9} className="d-flex align-items-center">
                    <Form.Control
                        type="text"
                        inputMode="numeric"
                        maxLength={4}
                        placeholder="XXX"
                        className="me-2"
                        style={{ width: '100px' }}
                        value={cardDetails.cvv}
                        onChange={(e) => {
                            const val = e.target.value.replace(/\D/g, '').substring(0, 4);
                            setCardDetails({ ...cardDetails, cvv: val });
                        }}
                        isInvalid={!!errors.cvv}
                    />
                    <Form.Control.Feedback type="invalid">{errors.cvv}</Form.Control.Feedback>
                    <small className="text-muted ms-2">What is CVV number?</small>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={3}>Expiry Date</Form.Label>
                <Col sm={9} className="d-flex">
                    <Form.Select
                        className="me-2"
                        style={{ width: '120px' }}
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(e.target.value)}
                        isInvalid={!!errors.expiry}
                    >
                        <option value="">Month</option>
                        {Array.from({ length: 12 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                        ))}
                    </Form.Select>
                    <Form.Select
                        style={{ width: '120px' }}
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                        isInvalid={!!errors.expiry}
                    >
                        <option value="">Year</option>
                        {Array.from({ length: 10 }, (_, i) => {
                            const year = new Date().getFullYear() + i;
                            return <option key={year} value={year}>{year}</option>;
                        })}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">{errors.expiry}</Form.Control.Feedback>
                </Col>
            </Form.Group>

            {Object.keys(errors).length > 0 && (
                <Alert variant="danger" className="text-center">
                    Please correct the above errors before proceeding.
                </Alert>
            )}

            <div className="d-grid gap-2 col-md-6 mx-auto mt-4">
                <Button variant="success" onClick={onSubmit}>
                    Pay Now
                </Button>
            </div>
        </Form>
    );
};

export default CreditCardForm;
