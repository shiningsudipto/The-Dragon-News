import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/shared/Header';
import Footer from '../pages/shared/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../pages/shared/RightNav';
import LeftNav from '../pages/shared/LeftNav';

const Layout = () => {
    return (
        <div>
            <Container>
                <Header />
                <Row>
                    <Col lg={3}>
                        <LeftNav />
                    </Col>
                    <Col lg={6}>
                        <h2>Main Content Coming</h2>
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

export default Layout;