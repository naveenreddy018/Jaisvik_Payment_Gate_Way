
// NetBankingForm.jsx
import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import PopularBanks from './popularBanks/popularBank'

const NetBankingForm = ({ bank, setBank, handlePayment }) => {
    return (
        <div>
            <PopularBanks selectedBank={bank} onChange={setBank} />

            <Form.Group className="mb-3">
                <Form.Select
                    value={bank}
                    onChange={(e) => setBank(e.target.value)}
                >
                    <option value="">Select Bank</option>
                    <option value="HDFC">HDFC</option>
                    <option value="SBI">SBI</option>
                    <option value="ICICI">ICICI</option>
                    <option value="Axis Bank">Axis Bank</option>
                    <option value="Kotak Mahindra Bank">Kotak Mahindra Bank</option>
                    <option value="Punjab National Bank">Punjab National Bank</option>
                    <option value="Bank of Baroda">Bank of Baroda</option>
                    <option value="Indian Bank">Indian Bank</option>
                    <option value="Bank of India">Bank of India</option>
                    <option value="Canara Bank">Canara Bank</option>
                    <option value="Union Bank of India">Union Bank of India</option>
                    <option value="UCO Bank">UCO Bank</option>
                </Form.Select>
            </Form.Group>

            {/* <Alert variant="warning" className="mt-3">
        This instrument has low success, use UPI or cards for better experience
      </Alert>
       */}
            <div className="d-grid gap-2 col-md-6 mx-auto mt-4">
                <Button
                    variant="success"
                    onClick={handlePayment}
                >
                    Pay Now
                </Button>
            </div>
        </div>
    );
};

export default NetBankingForm;