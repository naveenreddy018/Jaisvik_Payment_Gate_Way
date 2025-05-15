

import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; // ✅ Import NavLink
import 'bootstrap/dist/css/bootstrap.min.css';

const Resources = () => {
  const [hovered, setHovered] = useState(null);

  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
  };

  const linkHoveredStyle = {
    textDecoration: 'underline',
    color: '#007bff',
  };

  const renderLink = (to, label, id) => (
    <NavLink
      to={to}
      style={hovered === id ? { ...linkStyle, ...linkHoveredStyle } : linkStyle}
      onMouseEnter={() => setHovered(id)}
      onMouseLeave={() => setHovered(null)}
    >
      {label}
    </NavLink>
  );

  return (
    <Container className="py-5">
      <Card className="border-0">
        <Card.Body className="p-4">
          <Row className="mb-4">
            <Col md={3}><h6 className="text-secondary" style={{ fontSize: '14px', fontWeight: '500' }}>AWARENESS</h6></Col>
            <Col md={3}><h6 className="text-secondary" style={{ fontSize: '14px', fontWeight: '500' }}>DEVELOPERS</h6></Col>
            <Col md={3}><h6 className="text-secondary" style={{ fontSize: '14px', fontWeight: '500' }}>SOLUTIONS</h6></Col>
          </Row>

          {/* Row 1 */}
          <Row className="mb-3">
            <Col md={3}>{renderLink('/blog', 'Blog', 'blog')}</Col>
            <Col md={3}>{renderLink('/docs', 'Developer Docs', 'developerDocs')}</Col>
            <Col md={3}>{renderLink('/saas', 'SaaS', 'saas')}</Col>
          </Row>

          {/* Row 2 */}
          <Row className="mb-3">
            <Col md={3}>{renderLink('/learn', 'Learn', 'learn')}</Col>
            <Col md={3}>{renderLink('/integrations', 'Integrations', 'integrations')}</Col>
            <Col md={3}>{renderLink('/ecommerce', 'E-commerce', 'eCommerce')}</Col>
          </Row>

          {/* Row 3 */}
          <Row className="mb-3">
            <Col md={3}>{renderLink('/qrcodes', ' Qr codes', 'events')}</Col>
            <Col md={3}>{renderLink('/api-reference', 'API Reference', 'apiReference')}</Col>
            <Col md={3}>{renderLink('/education', 'Education', 'education')}</Col>
          </Row>
{/* 
          <Row className="mb-3">
            <Col md={3}>{renderLink('/white-papers', 'White papers', 'whitePapers')}</Col>
            <Col md={3}>{renderLink('/api-playground', 'API Playground', 'apiPlayground')}</Col>
            <Col md={3}>{renderLink('/bfsi', 'BFSI', 'bfsi')}</Col>
          </Row>

          <Row className="mb-3">
            <Col md={3}>{renderLink('/customer-stories', 'Customer Stories', 'customerStories')}</Col>
            <Col md={3}>{renderLink('/onboarding-apis', 'Onboarding APIs', 'onboardingApis')}</Col>
            <Col md={3}>{renderLink('/freelance', 'Freelance', 'freelance')}</Col>
          </Row> */}

          {/* You can restore other rows as needed using the same renderLink method */}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Resources;
