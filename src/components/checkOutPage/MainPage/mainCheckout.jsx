
import React, { useState } from 'react';
import { Card, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import all components
import PaymentHeader from '../header/header';
import AmountBar from '../amountBar/amountBar';
import PaymentMethodSidebar from '../paymentMethod/paymentMethod';
import CreditCardForm from '../cardPayments/debitCard/creditCard';
import UpiPaymentForm from '../upi/upiPayment';
import NetBankingForm from '../netBanking/netBanking';


const JaisvikPaymentGateway = ({ amount = "106.00", transactionId = "38" }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [upiId, setUpiId] = useState('');
    const [userUpi, setUserUpi] = useState('');
    const [bank, setBank] = useState('');
    const [cardDetails, setCardDetails] = useState({ number: '', name: '', expiry: '', cvv: '' });
    const [message, setMessage] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [paymentAmount] = useState(amount);
    console.log(selectedOption)
    console.log(upiId)
    console.log(userUpi)
    console.log(bank)
    console.log(bank)
    console.log(cardDetails)
    console.log(message)
    console.log(selectedMonth)
    console.log(selectedYear)
    console.log(selectedYear)
    console.log(showAlert)
    console.log(paymentAmount)

    const primaryColor = '#0078BE';

    const handlePayment = () => {
        setShowAlert(true);

        switch (selectedOption) {
            case 'UPI':
                if (!upiId) return setMessage('Please enter your UPI ID.');
                return setMessage(`Processing UPI Payment with ID: ${upiId} for ₹${paymentAmount}`);
            case 'Credit Card':
            case 'Debit Card':
                if (!cardDetails.number || !selectedMonth || !selectedYear || !cardDetails.cvv)
                    return setMessage('Please fill all card details.');
                return setMessage(`Processing Card Payment of ₹${paymentAmount}...`);
            case 'Net Banking':
                if (!bank) return setMessage('Please select your bank.');
                return setMessage(`Processing Net Banking through ${bank} for ₹${paymentAmount}`);
            default:
                return;
        }
    };

    const renderPaymentForm = () => {
        switch (selectedOption) {
            case 'UPI':
                return (
                    <UpiPaymentForm
                        upiId={upiId}
                        setUpiId={setUpiId}
                        userUpi={userUpi}
                        setUserUpi={setUserUpi}
                        handlePayment={handlePayment}
                        paymentAmount={paymentAmount}
                    />
                );
            case 'Credit Card':
            case 'Debit Card':
                return (
                    <CreditCardForm
                        cardDetails={cardDetails}
                        setCardDetails={setCardDetails}
                        selectedMonth={selectedMonth}
                        setSelectedMonth={setSelectedMonth}
                        selectedYear={selectedYear}
                        setSelectedYear={setSelectedYear}
                        handlePayment={handlePayment}
                    />
                );
            case 'Net Banking':
                return (
                    <NetBankingForm
                        bank={bank}
                        setBank={setBank}
                        handlePayment={handlePayment}
                    />
                );
            default:
                return (
                    <div className="text-center py-5 text-muted">
                        Sign in to your Jaisvik Pay account to proceed
                    </div>
                );
        }
    };

    return (
        <div   className="container  " style={{ maxWidth: '1000px' ,marginTop : "150px" }}>
            <div className="card border shadow-sm">
                {/* Header */}
                <PaymentHeader primaryColor={primaryColor} />

                {/* Amount Bar */}
                <AmountBar
                    paymentAmount={paymentAmount}
                    transactionId={transactionId}
                    primaryColor={primaryColor}
                />

                <div className="row g-0">
                    <div className="col-md-3 border-end">
                        <PaymentMethodSidebar
                            selectedOption={selectedOption}
                            setSelectedOption={setSelectedOption}
                        />
                    </div>

                    <div className="col-md-9">
                        <div className="p-4">
                            <h4>Choose a payment method</h4>

                            {renderPaymentForm()}

                            {showAlert && (
                                <Alert
                                    variant="primary"
                                    className="mt-4"
                                    onClose={() => setShowAlert(false)}
                                    dismissible
                                >
                                    {message}
                                </Alert>
                            )}

                            {/* <div className="text-center mt-5">
                <small className="d-block text-primary mb-2">
                  Note: In the next step you will be redirected to your bank's website to verify yourself.
                </small>
                <div>or Go back to <a href="#">www.example.com</a></div>
              </div> */}
                        </div>
                    </div>
                </div>
                {/* Footer */}
                {/* <PaymentFooter /> */}
            </div>
        </div>
    );
};

export default JaisvikPaymentGateway;
