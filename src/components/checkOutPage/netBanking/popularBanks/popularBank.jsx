// PopularBanksComponent.jsx
import React from 'react';
import { Row, Col, Card, Form, Image } from 'react-bootstrap';
import assets from '../../../../assets/assests';

const PopularBanks = ({ selectedBank, onChange }) => {
    // Bank data
    const BANKS = [
        { id: 'SBI', label: 'State Bank of India', icon: assets.sbiIcon },
        { id: 'HDFC', label: 'HDFC Bank', icon: assets.hdfcIcon },
        { id: 'ICICI', label: 'ICICI Bank', icon: assets.iciciIcon },
        { id: 'KOTAK', label: 'Kotak Mahindra Bank', icon: assets.kotakIcon },
        { id: 'AXIS', label: 'Axis Bank', icon: assets.AxisIcon },
        { id: 'FED', label: 'Federal Bank', icon: assets.FederalIcon },
        { id: 'IOB', label: 'Indian Overseas Bank', icon: assets.indian_Overseas_BankIcon },
        { id: 'IB', label: 'Indian Bank', icon: assets.indianBankIcon }
    ];

    return (
        <div>
            <h5 className="mb-3">Popular Banks</h5>
            <Row xs={2} md={4} className="g-3 mb-4">
                {BANKS.map((bank) => (
                    <Col key={bank.id}>
                        <Card
                            className={`h-100 text-center ${selectedBank === bank.id ? 'border-primary bg-light' : ''}`}
                            onClick={() => onChange(bank.id)}
                            style={{ cursor: 'pointer' }}
                        >
                            <Card.Body className="d-flex flex-column justify-content-center align-items-center p-2">
                                <Image
                                    src={bank.icon}
                                    alt={bank.label}
                                    width={30}
                                    height={30}
                                    className="mb-2"
                                />
                                <small>{bank.label}</small>
                                <Form.Check
                                    type="radio"
                                    name="bank"
                                    className="mt-2"
                                    checked={selectedBank === bank.id}
                                    onChange={() => onChange(bank.id)}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default PopularBanks;

