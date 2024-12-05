import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import './Home.css'; // Untuk styling
import Header from "./Header";
import img from './images/BG_home.png'; // Background gambar
import user1 from './images/user1.png';
import user2 from './images/user2.png';
import user3 from './images/user3.png';
import user4 from './images/user4.png';


function Home() {
    return (
        <Container
        fluid
        className="hero-section d-flex align-items-center"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right',
          minHeight: '100vh',
          margin: '0', // Pastikan margin 0
          width: '100vw', // Paksa width penuh
          color: 'white',
        }}
      >
            <Header />
            <div className="hero-text mx-auto text-center">
                <h5>#1 Best Design Agency</h5>
                <h1 className="display-4">Turning Ideas Into <br /> Inspiring Design</h1>
                <p className="lead">
                    Partner With Us To Bring Limitless Creativity To Your Digital And Visual Solutions.
                </p>
                
                {/* Form */}
                <Row className="justify-content-center">
                    <Col xs={8} md={6} className="mb-3">
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            className="email-input"
                        />
                    </Col>
                    <Col xs="auto">
                        <Button variant="primary" className="cta-button">
                            Join Insomnia <span style={{ fontSize: '1.2rem' }}>→</span>
                        </Button>
                    </Col>
                </Row>

                {/* User Count Section */}
                <div className="user-count mt-4">
                    <div className="d-flex align-items-center justify-content-center">
                        {/* Dummy profile images */}
                        <div className="profile-pictures d-flex">
                        <img src={user1} alt="User1" className="profile-img" />
                        <img src={user2} alt="User2" className="profile-img" />
                        <img src={user3} alt="User3" className="profile-img" />
                        <img src={user4} alt="User4" className="profile-img" />

                        </div>
                        <span className="ms-3">
                            Over <strong>+15,000 Users</strong> Are Already In Line
                        </span>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Home;
