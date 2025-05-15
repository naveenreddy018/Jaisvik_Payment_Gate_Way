
// PaymentHeader.jsx
import React from 'react';
import { Card } from 'react-bootstrap';

import assets from '../../../assets/assests';

const PaymentHeader = ({ primaryColor }) => {
    return (
        <Card.Header className="d-flex justify-content-between align-items-center bg-white border-bottom py-3">
            <div>
                <img src={assets.jaisvikPayLogo} width="200px" height="50px" />
            </div>
            <h3 className="m-0" style={{ color: primaryColor }}>
                Jaisvik<span style={{ color: '#00B5E2' }}>Pay</span>
            </h3>
        </Card.Header>
    );
};



export default PaymentHeader;
