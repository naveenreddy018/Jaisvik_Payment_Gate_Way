// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import "./App.css"

// import PaymentCarousel from './components/Carousel/paymentCasoursel'
// import BankScroll from './components/bankIconsroll/scroll'
// import Herosection from './components/heroSection/heroSection'
// import Header from './components/Header/paymentHeader'
// import ApiCodeIntegration from './components/apiIntergrationCode/ApiCodeSection'
// import Footer from './components/Footer/paymentFooter'
// import PricingPage from './components/pricing/mainPricingSection'
// import TestimonialCarousel from './components/review/review'
// import JasivikAPIIntegrationDoc from './components//navBar/documentPage/docsPage'
// import AboutPage from './components/navBar/about/About'
// import JaisvikPaymentGateway from './components/checkOutPage/MainPage/mainCheckout'
// import SignUp from './components/authentication/authentication'

// function App() {
//   return (
//     <Router>
//       <Header/>

//       <Routes>
//           <Route path="/signup"  element={<SignUp />} />
//         <Route
//           path="/"
//           element={
//             <>
//               <PaymentCarousel />
//               <BankScroll />
//               <Herosection />
//               <ApiCodeIntegration />
//               <TestimonialCarousel />
//               <Footer />

//             </>
//           }
//         />
//         <Route path="/docs" element={<JasivikAPIIntegrationDoc />} />
//         <Route path="/pricing" element={<PricingPage />} />
//          <Route   path="/about" element={<AboutPage />}          />
//          <Route   path="/checkoutpage" element={<JaisvikPaymentGateway />} />


//       </Routes>
//     </Router>
//   )
// }

// export default App

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import "./App.css";

import PaymentCarousel from './components/Carousel/paymentCasoursel';
import BankScroll from './components/bankIconsroll/scroll';
import Herosection from './components/heroSection/heroSection';
import Header from './components/Header/paymentHeader';
import ApiCodeIntegration from './components/apiIntergrationCode/ApiCodeSection';
import Footer from './components/Footer/paymentFooter';
import PricingPage from './components/pricing/mainPricingSection';
import TestimonialCarousel from './components/review/review';
import JasivikAPIIntegrationDoc from './components/navBar/documentPage/docsPage';
import AboutPage from './components/navBar/about/About';
import JaisvikPaymentGateway from './components/checkOutPage/MainPage/mainCheckout';
import SignUp from './components/authentication/authentication';

import { useEffect } from 'react';
import BlogSection from './components/blog/blog';
import FAQAccordion from './components/navBar/resources/awareness/learn/learn';
import UpiPayment from './components/navBar/resources/awareness/qrcodes/qrCodes';
import UpiPaymentInfo from './components/navBar/resources/awareness/qrcodes/qrCodes';
import PaymentIntegrationGuide from './components/navBar/resources/developerDocs/integration';
import ApiReference from './components/navBar/resources/developerDocs/apireference';
import SigninStatusProvider from './components/useContext/useContext.jsx'


const AppContent = () => {
  const location = useLocation();

  const isAuthPage = location.pathname === '/signup';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {!isAuthPage &&

        <Header />

      }

      <Routes>
        <Route path="/signup" element={<SignUp />} />

        <Route
          path="/"
          element={
            <>
              <PaymentCarousel />
              <BankScroll />
              <Herosection />
              <ApiCodeIntegration />
              <TestimonialCarousel />
              <Footer />
            </>
          }
        />

        <Route path="/docs" element={<JasivikAPIIntegrationDoc />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/checkoutpage" element={<JaisvikPaymentGateway />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/learn" element={<FAQAccordion />} />
        <Route path="/qrcodes" element={<UpiPaymentInfo />} />
        <Route path="/integrations" element={<PaymentIntegrationGuide />} />
        <Route path="/api-reference" element={<ApiReference />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <SigninStatusProvider >
      <Router>
        <AppContent />
      </Router>
    </SigninStatusProvider>

  );
}

export default App;
