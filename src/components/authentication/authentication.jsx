

import React, { useContext, useEffect, useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  InputGroup,
  Alert
} from 'react-bootstrap';
import {
  FaGoogle,
  FaFacebook,
  FaEye,
  FaEyeSlash,
  FaCreditCard,
} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { User } from 'lucide-react';
import {  SigninStatusContext } from '../useContext/useContext';

const SignUp = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [errors, setErrors] = useState({});
  const [loginErrors, setLoginErrors] = useState({});
  const [businessErrors, setBusinessErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate()
  const [getOtp, setGetOtp] = useState(false)
  const [otp, setOtp] = useState()
  const [otpVisible, setOtpVisible] = useState(false);
  const { setloggedIn} = useContext(SigninStatusContext)

  console.log(getOtp, otp)

  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    contact: '',
    password: '',
    confirmPassword: '',
    businessName: '',
    ownerName: '',
    phoneNumber: '',
    website: '',
    businessType: '',
    otp: ''
  });
  console.log(userDetails)
  // Toggle between Login and Sign Up
  const toggleForm = () => {
    setShowLogin(!showLogin);
    setErrors({});
    setLoginErrors({});
    setFormSubmitted(false);
  };

  const handleGetOTP = () => {

    setOtpVisible(prev => !prev)

  }

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Validate email format
  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate phone number format
  const isPhoneValid = (phone) => {
    // Allow formats like: +91 1234567890, 1234567890, 123-456-7890
    const phoneRegex = /^(\+\d{1,3}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    return phoneRegex.test(phone);
  };

  // Validate URL format
  const isUrlValid = (url) => {
    if (!url) return true; // Optional field
    try {
      new URL(url.startsWith('http') ? url : `https://${url}`);
      return true;
    } catch (e) {
      return false;
    }
  };

  // Validate password strength
  const isPasswordStrong = (password) => {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };

  // Handle Login Submit
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setloggedIn(prev => !prev)

    const newErrors = {};

    if (!userDetails.email) {
      newErrors.email = 'Email is required';
    } else if (!isEmailValid(userDetails.email)) {
      newErrors.email = 'Please enter a valid email address';
    } else if (!userDetails.password) {
      newErrors.password = 'Password is required';
    } else {
      navigate('/')
    }

    setLoginErrors(newErrors);

    // If no errors, proceed with login
    if (Object.keys(newErrors).length === 0) {
      console.log('Login form submitted successfully');
      // Add login API call here
    } else {
      console.log("otp not matched ")
    }
  };

  // Handle Sign Up Submit
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    // Validate signup form
    const newErrors = {};

    if (!userDetails.name) {
      newErrors.name = 'Full name is required';
    } else if (userDetails.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }


    if (userDetails.otp == otp.otp) {
      console.log("accpested")
    } else {
      console.log("noy matched ")
    }


    if (!userDetails.email) {
      newErrors.email = 'Email is required';
    } else if (!isEmailValid(userDetails.email)) {
      newErrors.email = 'Please enter a valid email address';
    }



    if (!userDetails.contact) {
      newErrors.contact = 'Phone number is required';
    } else if (!isPhoneValid(userDetails.contact)) {
      newErrors.contact = 'Please enter a valid phone number';
    }

    if (!userDetails.password) {
      newErrors.password = 'Password is required';
    } else if (!isPasswordStrong(userDetails.password)) {
      newErrors.password = 'Password must be at least 8 characters with 1 uppercase letter, 1 lowercase letter, and 1 number';
    }

    if (!userDetails.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (userDetails.confirmPassword !== userDetails.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    // If no errors, proceed to business details form
    if (Object.keys(newErrors).length === 0) {
      setShowConfirmation(true);
      setFormSubmitted(false);
    }
  };

  // Handle Business Details Submit
  const handleBusinessDetailsSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    // Validate business details form
    const newErrors = {};

    if (!userDetails.businessName) {
      newErrors.businessName = 'Business name is required';
    }

    if (!userDetails.ownerName) {
      newErrors.ownerName = 'Owner name is required';
    }

    if (!userDetails.email) {
      newErrors.email = 'Email is required';
    } else if (!isEmailValid(userDetails.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!userDetails.phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!isPhoneValid(userDetails.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }

    if (userDetails.website && !isUrlValid(userDetails.website)) {
      newErrors.website = 'Please enter a valid website URL';
    }

    if (!userDetails.businessType) {
      newErrors.businessType = 'Business type is required';
    }

    setBusinessErrors(newErrors);

    // If no errors, submit business details
    if (Object.keys(newErrors).length === 0) {
      console.log('Business details submitted successfully', userDetails);
      // Add business details API call here
    }
  };


  const hanldleNav = ()=>{
    setShowConfirmation(false)
  }
  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });


    // Clear error when user starts typing
    if (showLogin) {
      setLoginErrors({ ...loginErrors, [name]: '' });
    } else if (showConfirmation) {
      setBusinessErrors({ ...businessErrors, [name]: '' });
    } else {
      setErrors({ ...errors, [name]: '' });

      // Special case for password confirmation
      if (name === 'password' && userDetails.confirmPassword) {
        if (userDetails.confirmPassword !== value) {
          setErrors({ ...errors, confirmPassword: 'Passwords do not match' });
        } else {
          setErrors({ ...errors, confirmPassword: '' });
        }
      }

      if (name === 'confirmPassword') {
        if (userDetails.password !== value) {
          setErrors({ ...errors, confirmPassword: 'Passwords do not match' });
        } else {
          setErrors({ ...errors, confirmPassword: '' });
        }
      }
    }
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/details", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: userDetails,
          }),
        });

        if (res.ok) {
          const data = await res.json();
          console.log(data);
        } else {
          console.error("Failed to fetch data:", res.status);
        }
      } catch (error) {
        console.error("Error occurred:", error);
      }
    };

    fetchData();
  }, [formSubmitted]);


  useEffect(() => {
    if (!otp) {
      const fetchData = async () => {
        try {
          const res = await fetch('http://localhost:3000/getotp', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: userDetails.email,
            }),
          });

          if (res.ok) {
            const dataOtp = await res.json();
            console.log(dataOtp);
            // setOtpVisible(true);
            setOtp(dataOtp);
            setUserDetails(prev => ({
              ...prev,
              otp: dataOtp.otp
            }));
          } else {
            console.log('Error occurred while fetching OTP');
          }
        } catch (error) {
          console.log('Error:', error);
        }
      };

      fetchData();
    }
  }, [userDetails.email, getOtp]);  // Run when the email changes


  return (
    <Container
      fluid
      style={{
        minHeight: '100vh',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Row className="flex-grow-1">
        {/* Left Side - Branding */}
        <Col
          md={5}
          className="d-flex flex-column justify-content-center align-items-center p-4 bg-primary text-white"
        >
          <div className="logo-area mb-4 d-flex align-items-center">
            <div
              className="logo-icon bg-white text-primary rounded d-flex justify-content-center align-items-center me-2"
              style={{ width: '48px', height: '48px' }}
            >
              <FaCreditCard size={24} />
            </div>
            <h2 className="mb-0 fw-bold">Jasvik Pay</h2>
          </div>

          <div className="text-center mb-5">
            <h3 className="mb-3">Secure Your Financial Future</h3>
            <p className="opacity-75">
              We at Jasvik Pay are committed to providing fast, secure, and reliable payment solutions for all your needs.
            </p>
          </div>

          <div
            className="illustration-container rounded-circle d-flex justify-content-center align-items-center mb-4"
            style={{
              width: '160px',
              height: '160px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            }}
          >
            <FaCreditCard size={80} className="text-white opacity-75" />
          </div>
        </Col>

        {/* Right Side - Form */}
        <Col
          md={7}
          className="d-flex align-items-center justify-content-center p-4 bg-light"
          style={{
            overflowY: 'auto',
            paddingBottom: '50px',
          }}
        >
          <Card
            className="form-card border-0 shadow-sm"
            style={{ maxWidth: '550px', width: '100%' }}
          >
            <Card.Body className="px-4"  >
              {showLogin ? (
                <>
                  {/* Login Form */}
                  <div  className="text-center mb-4">
                    <h2 className="fw-bold">Log In</h2>
                  </div>

                  {/* Google and Facebook Social Login */}
                  {/* <div className="social-buttons d-flex justify-content-between mb-4">
                    <Button variant="outline-secondary" className="w-100 me-2 d-flex align-items-center justify-content-center">
                      <FaGoogle className="me-2" /> Google
                    </Button>
                    <Button variant="outline-secondary" className="w-100 ms-2 d-flex align-items-center justify-content-center">
                      <FaFacebook className="me-2" /> Facebook
                    </Button>
                  </div> */}
                  {/* 
                  <div className="divider text-center mb-4" style={{ position: 'relative' }}>
                    <span className="divider-text" style={{ backgroundColor: '#fff', padding: '0 15px', color: '#6c757d' }}>OR</span>
                  </div> */}

                  {/* Login Form Fields */}
                  <Form style={{
                    width: "500px"
                  }} onSubmit={handleLoginSubmit} noValidate>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={userDetails.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        className="py-2"
                        isInvalid={formSubmitted && !!loginErrors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {loginErrors.email}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Password</Form.Label>
                      <InputGroup>
                        <Form.Control
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          value={userDetails.password}
                          onChange={handleInputChange}
                          placeholder="••••••••"
                          className="py-2"
                          isInvalid={formSubmitted && !!loginErrors.password}
                        />
                        <Button
                          variant="outline-secondary"
                          onClick={togglePasswordVisibility}
                          style={{ backgroundColor: 'transparent', borderColor: '#dee2e6' }}
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </Button>
                        <Form.Control.Feedback type="invalid">
                          {loginErrors.password}
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={() => {
                      handleLoginSubmit()
                      // toggleForm()
                    }} className="w-100 py-2 mb-3">
                      Log In
                    </Button>
                  </Form>

                  <div className="text-center">
                    <p>
                      Don't have an account?{' '}
                      <Button variant="link" className="p-0" onClick={

                      ()=>{
                         hanldleNav()
                         toggleForm()
                      }

                      } style={{ textDecoration: 'none' }}>
                        Sign Up
                      </Button>
                    </p>
                  </div>
                </>
              ) : showConfirmation ? (
                <>
                  {/* Business Details Form */}
                  <div style={{
                    width: "500px"
                  }} className="text-center  mb-4">
                    <h2 className="fw-bold">Business Information</h2>
                    <p className="text-muted">Complete your account by providing your business details</p>
                  </div>

                  <Form onSubmit={handleBusinessDetailsSubmit} noValidate className="business-form">
                    {/* Company Information Section */}
                    <div style={{
                      width: "600px"
                    }} className="form-section mb-4">
                      <h5 className="mb-3 text-primary">Company Information</h5>
                      <Row className="g-3">
                        <Col md={6}>
                          <Form.Group className="mb-md-0 mb-3">
                            <Form.Label>Business Name <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                              type="text"
                              name="businessName"
                              value={userDetails.businessName}
                              onChange={handleInputChange}
                              placeholder="ABC Enterprises"
                              className="py-2"
                              isInvalid={formSubmitted && !!businessErrors.businessName}
                            />
                            <Form.Control.Feedback type="invalid">
                              {businessErrors.businessName}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-md-0 mb-3">
                            <Form.Label>Business Type <span className="text-danger">*</span></Form.Label>
                            <Form.Select
                              name="businessType"
                              value={userDetails.businessType}
                              onChange={handleInputChange}
                              className="py-2"
                              isInvalid={formSubmitted && !!businessErrors.businessType}
                            >
                              <option value="">Select Business Type</option>
                              <option value="Retail">Retail</option>
                              <option value="E-commerce">E-commerce</option>
                              <option value="Services">Services</option>
                              <option value="Manufacturing">Manufacturing</option>
                              <option value="Technology">Technology</option>
                              <option value="Healthcare">Healthcare</option>
                              <option value="Education">Education</option>
                              <option value="Other">Other</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                              {businessErrors.businessType}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                      </Row>
                    </div>

                    {/* Contact Information Section */}
                    <div style={{
                      width: "600px"
                    }} className="form-section mb-4">
                      <h5 className="mb-3 text-primary">Contact Information</h5>
                      <Row className="g-3">
                        <Col md={6}>
                          <Form.Group className="mb-md-0 mb-3">
                            <Form.Label>Owner Name <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                              type="text"
                              name="ownerName"
                              value={userDetails.ownerName}
                              onChange={handleInputChange}
                              placeholder="John Smith"
                              className="py-2"
                              isInvalid={formSubmitted && !!businessErrors.ownerName}
                            />
                            <Form.Control.Feedback type="invalid">
                              {businessErrors.ownerName}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-md-0 mb-3">
                            <Form.Label>Email Address <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              value={userDetails.email}
                              onChange={handleInputChange}
                              placeholder="business@company.com"
                              className="py-2"
                              isInvalid={formSubmitted && !!businessErrors.email}
                            />
                            <Form.Control.Feedback type="invalid">
                              {businessErrors.email}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Col>
                      </Row>
                    </div>

                    {/* Web Presence Section */}
                    <div style={{
                      width: "600px"
                    }} className="form-section mb-4">
                      <h5 className="mb-3 text-primary">Web Presence</h5>
                      <Row className="g-3">
                        <Col md={6}>
                          <Form.Group className="mb-md-0 mb-3">
                            <Form.Label>Phone Number <span className="text-danger">*</span></Form.Label>
                            <InputGroup>
                              <InputGroup.Text className="bg-light">+91</InputGroup.Text>
                              <Form.Control
                                type="text"
                                name="phoneNumber"
                                value={userDetails.phoneNumber}
                                onChange={handleInputChange}
                                placeholder="9876543210"
                                className="py-2"
                                isInvalid={formSubmitted && !!businessErrors.phoneNumber}
                              />
                              <Form.Control.Feedback type="invalid">
                                {businessErrors.phoneNumber}
                              </Form.Control.Feedback>
                            </InputGroup>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-md-0 mb-3">
                            <Form.Label>Website URL <span className="text-muted">(Optional)</span></Form.Label>
                            <InputGroup>
                              <InputGroup.Text className="bg-light">https://</InputGroup.Text>
                              <Form.Control
                                type="text"
                                name="website"
                                value={userDetails.website}
                                onChange={handleInputChange}
                                placeholder="yourcompany.com"
                                className="py-2"
                                isInvalid={formSubmitted && !!businessErrors.website}
                              />
                              <Form.Control.Feedback type="invalid">
                                {businessErrors.website}
                              </Form.Control.Feedback>
                            </InputGroup>
                          </Form.Group>
                        </Col>
                      </Row>
                    </div>

                    <div style={{
                      width: "600px"
                    }} className="d-grid gap-2 mt-4">
                      <Button variant="primary" type="submit" onClick={toggleForm} className="py-2 fw-bold">
                        Complete Registration
                      </Button>
                      <div className="text-center mt-2">
                        <small className="text-muted">
                          By submitting, you agree to our <a href="#" className="text-decoration-none">Terms of Service</a> and <a href="#" className="text-decoration-none">Privacy Policy</a>
                        </small>
                      </div>
                    </div>
                  </Form>
                </>
              ) : (
                <>
                  {/* Sign Up Form */}
                  <div className="text-center mb-4 mt-5">
                    <h2 className="fw-bold">Create Account</h2>
                  </div>

                  {/* Google and Facebook Social Signup */}
                  {/* <div className="social-buttons d-flex justify-content-between mb-4">
                    <Button variant="outline-secondary" className="w-100 me-2 d-flex align-items-center justify-content-center">
                      <FaGoogle className="me-2" /> Google
                    </Button>
                    <Button variant="outline-secondary" className="w-100 ms-2 d-flex align-items-center justify-content-center">
                      <FaFacebook className="me-2" /> Facebook
                    </Button>
                  </div> */}
                  {/* 
                  <div className="divider text-center mb-4" style={{ position: 'relative' }}>
                    <span className="divider-text" style={{ backgroundColor: '#fff', padding: '0 15px', color: '#6c757d' }}>OR</span>
                  </div> */}

                  {/* Sign Up Form Fields */}
                  <Form onSubmit={handleSignupSubmit} noValidate>
                    <Form.Group className="mb-3">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={userDetails.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="py-2"
                        isInvalid={formSubmitted && !!errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form noValidate onSubmit={handleSignupSubmit}>
                      <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <InputGroup>
                          <Form.Control
                            type="email"
                            name="email"
                            value={userDetails.email}
                            onChange={handleInputChange}
                            placeholder="your@email.com"
                            isInvalid={formSubmitted && !!errors.email} // Check if form is submitted and there are errors for email
                          />
                          <Button
                            variant="primary"
                            onClick={handleGetOTP}
                            className="input-group-text"
                          >
                            Get OTP
                          </Button>
                        </InputGroup>
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Form>

                    <Form.Group className="mb-3">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="text"
                        name="contact"
                        value={userDetails.contact}
                        onChange={handleInputChange}
                        placeholder="Your Phone Number"
                        className="py-2"
                        isInvalid={formSubmitted && !!errors.contact}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.contact}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <InputGroup>
                        <Form.Control
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          value={userDetails.password}
                          onChange={handleInputChange}
                          placeholder="••••••••"
                          className="py-2"
                          isInvalid={formSubmitted && !!errors.password}
                        />
                        <Button
                          variant="outline-secondary"
                          onClick={togglePasswordVisibility}
                          style={{ backgroundColor: 'transparent', borderColor: '#dee2e6' }}
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </Button>
                        <Form.Control.Feedback type="invalid">
                          {errors.password}
                        </Form.Control.Feedback>
                      </InputGroup>
                      {!formSubmitted && userDetails.password && !isPasswordStrong(userDetails.password) && (
                        <small className="text-muted">
                          Password must be at least 8 characters with 1 uppercase letter, 1 lowercase letter, and 1 number
                        </small>
                      )}
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type={showPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        value={userDetails.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="••••••••"
                        className="py-2"
                        isInvalid={formSubmitted && !!errors.confirmPassword}
                      />
                      
                          {otpVisible && (
                      <Form.Group className="mb-3">
                        <Form.Label>Enter otp</Form.Label>
                        <Form.Control
                          type="number"
                          name="otp"
                          value={userDetails.otp}
                          onChange={handleInputChange}
                          placeholder="Enter otp"
                          className="py-2"
                          isInvalid={formSubmitted && !!errors.contact}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.otp}
                        </Form.Control.Feedback>
                      </Form.Group>
                    )}
                        
                       
                      <Form.Control.Feedback type="invalid">
                        {errors.confirmPassword}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="primary"  disabled={!otpVisible} type="submit" className="w-100 py-2 mb-3">
                      Sign Up
                    </Button>
                  </Form>

                  <div className="text-center">
                    <p>
                      Already have an account?{' '}
                      <Button variant="link" className="p-0" onClick={() => {
                        toggleForm()
                      }} style={{ textDecoration: 'none' }}>
                        Log In
                      </Button>
                    </p>
                  </div>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;

