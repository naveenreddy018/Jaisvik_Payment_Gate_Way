// UpiQRCodeComponent.jsx
import React from 'react';
import QRCode from 'react-qr-code';

const UpiQRCode = ({ amount, upiId }) => {
    // Generate UPI payment link
    // const payload = upi://pay?pa=${upiId}&am=${amount};
    const payload = "http://jaisvik.com?upid=&"

    return (
        <div style={{ position: 'relative', padding: '10px' }}>
            <QRCode value={payload} size={120} />
            <div style={{
                position: 'absolute',
                bottom: '-30px',
                left: '0',
                width: '100%',
                fontSize: '10px',
                textAlign: 'center',
                color: '#666'
            }}>
                UPI: {upiId} - ₹{amount}
            </div>
        </div>
    );
};

export default UpiQRCode;