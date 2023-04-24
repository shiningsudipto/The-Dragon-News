import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import editorsInsightsImg1 from '../../assets/1.png'
import editorsInsightsImg2 from '../../assets/2.png'
import editorsInsightsImg3 from '../../assets/3.png'

const LeftNavbarEditorsInsights = () => {
    return (
        <div>
            <Row xs={1} md={1} lg={1} className="g-4 d-none d-md-block">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={editorsInsightsImg1} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={editorsInsightsImg2} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={editorsInsightsImg3} />
                        <Card.Body>
                            <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default LeftNavbarEditorsInsights;