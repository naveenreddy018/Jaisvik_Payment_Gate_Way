
// AmountBar.jsx
import React from 'react';

const AmountBar = ({ paymentAmount, transactionId, primaryColor }) => {
    return (
        <div className="d-flex justify-content-between p-3" style={{ backgroundColor: primaryColor, color: 'white' }}>
            <div>Amount: ₹{paymentAmount}</div>
            <div>Transaction ID: {transactionId}</div>
        </div>
    );
};

export default AmountBar;