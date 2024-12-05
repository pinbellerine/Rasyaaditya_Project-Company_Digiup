import React from 'react';
import { Accordion, Container, Button } from 'react-bootstrap';
import './Project.css';

function Project() {
    const projects = [
        {
            title: 'Project 1',
            description: 'To send money, open the app, select "Send Money," enter the recipient\'s details, input the amount, and confirm the transaction. Your funds will be transferred instantly.',
        },
        {
            title: 'Project 2',
            description: 'To send money, open the app, select "Send Money," enter the recipient\'s details, input the amount, and confirm the transaction. Your funds will be transferred instantly.',
        },
        {
            title: 'Project 3',
            description: 'To send money, open the app, select "Send Money," enter the recipient\'s details, input the amount, and confirm the transaction. Your funds will be transferred instantly.',
        },
        {
            title: 'Project 4',
            description: 'To send money, open the app, select "Send Money," enter the recipient\'s details, input the amount, and confirm the transaction. Your funds will be transferred instantly.',
        },
    ];

    return (
        <div className="project-page">
            {/* Header Section */}
            <header className="project-header">
                <h1>We Transforming Ideas Visual Masterpieces</h1>
                <p>
                At our design agency, we turn your concepts into compelling and innovative visual stories. With a focus on creativity, strategy, and user-centered design.
                </p>
                <div className='btn-about'>
                            <Button variant="light" className="btn-get-started">Get Fitas Now</Button>
                            <Button variant="outline-light" className="btn-discover-more ms-3">Discover More</Button>
                </div>
            </header>

            {/* Accordion Section */}
            <Container className="accordion-container">
                <Accordion>
                    {projects.map((project, index) => (
                        <Accordion.Item 
                            eventKey={index.toString()} 
                            key={index}
                        >
                            <Accordion.Header>{project.title}</Accordion.Header>
                            <Accordion.Body>
                                <p>{project.description}</p>
                                <div className="image-placeholder">foto</div>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </Container>
        </div>
    );
}

export default Project;
