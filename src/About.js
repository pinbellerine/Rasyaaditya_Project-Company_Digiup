import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './About.css';
import Team1 from './images/Team1.png';
import Team2 from './images/Team2.png';
import Team3 from './images/Team3.png';
import Team4 from './images/Team4.png';

function About() {
    return (
        <div className="about-container">
            <Container className="text-light py-5">
                {/* Section: Hero */}
                <Row className="align-items-center text-center my-5">
                    <Col>
                        <h2 className="about-title">Elevating Brands Through Innovative Design</h2>
                        <p className="about-subtitle">
                            We are a creative design agency dedicated to transforming ideas into impactful visuals. With a passion for innovation and a focus on strategy
                        </p>
                        <div className="btn-about">
                            <Button variant="light" className="btn-get-started">Get Our Service</Button>
                            <Button variant="outline-light" className="btn-discover-more ms-3">Discover More</Button>
                        </div>
                    </Col>
                </Row>

                {/* Section: Mission, Vision, Values */}
                <Row className="mission-section my-5">
                    <Col md={4} className="text-center p-4">
                        <h4>Mission</h4>
                        <p>
                            Our mission is to create innovative and impactful design solutions that help brands connect with their audience and achieve their business goals.
                        </p>
                    </Col>
                    <Col md={4} className="text-center p-4">
                        <h4>Vision</h4>
                        <p>
                            We envision becoming a leading design agency known for transforming ideas into visually compelling experiences that inspire and engage.
                        </p>
                    </Col>
                    <Col md={4} className="text-center p-4">
                        <h4>Values</h4>
                        <p>
                            We value creativity, collaboration, and excellence, fostering a culture of innovation and integrity to deliver exceptional results for our clients.
                        </p>
                    </Col>
                </Row>

                {/* Section: Meet the Team */}
                <Row className="meet-team text-center">
                    <Col>
                        <h3 className="text-light">Meet The Team</h3>
                        <p className="text-light">Behind Fitas, There's a Team Committed to Innovation.</p>
                    </Col>
                </Row>
                <Row className="team-section">
                    {[
                        { name: 'John Doe', role: 'CEO', image: Team1 },
                        { name: 'Jane Smith', role: 'Financial Analyst', image: Team2 },
                        { name: 'Grace Abrams', role: 'Relations Manager', image: Team3 },
                        { name: 'Jordan Lee', role: 'Tax Specialist', image: Team4 },
                    ].map((member, index) => (
                        <Col md={3} key={index} className="text-center my-3">
                            <Image
                                src={member.image}
                                roundedCircle
                                className="team-img"
                                alt={member.name}
                            />
                            <h5 className="mt-3">{member.name}</h5>
                            <p className="text-light">{member.role}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default About;
