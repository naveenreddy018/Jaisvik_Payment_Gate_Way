
// PaymentMethodSidebar.jsx
import React from 'react';
import { Nav, Form } from 'react-bootstrap';

const PaymentMethodSidebar = ({ selectedOption, setSelectedOption }) => {
    const paymentOptions = [
        'Credit Card',
        'Debit Card',
        'Net Banking',
        'UPI',
        // 'Jaisvik Pay'
    ];

    return (
        <Nav className="flex-column">
            {paymentOptions.map((option) => (
                <Nav.Link
                    key={option}
                    className={`border-bottom py-3 px-3 ${selectedOption === option ? 'active bg-light border-start border-5 border-primary' : ''}`}
                    onClick={() => setSelectedOption(option)}
                    style={{ cursor: 'pointer' }}
                >
                    <Form.Check
                        type="radio"
                        inline
                        checked={selectedOption === option}
                        onChange={() => setSelectedOption(option)}
                        label={
                            option === 'Jaisvik Pay' ? (
                                <span className="text-success fw-bold">{option}</span>
                            ) : option
                        }
                    />
                </Nav.Link>
            ))}
        </Nav>
    );
};

export default PaymentMethodSidebar;