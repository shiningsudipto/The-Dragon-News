import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/shared/Header';
import Footer from '../pages/shared/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../pages/shared/RightNav';

const NewsLayout = () => {
    return (
        <div>
            <Container>
                <Header />
                <Row>
                    <Col lg={9}>
                        <Outlet />
                    </Col>
                    <Col lg={3}>
                        <RightNav />
                    </Col>
                </Row>
                <Footer />
            </Container>
        </div>
    );
};

export default NewsLayout;