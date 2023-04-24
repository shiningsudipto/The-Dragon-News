import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsights from './shared/editorsInsights';

const News = () => {
    const newsDetails = useLoaderData();
    console.log(newsDetails);
    const { title, details, image_url, category_id } = newsDetails;
    return (
        <div>
            <h3>News Details</h3>
            <Card className='p-3'>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title className='display-6 fw-semibold'>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="danger"><FaArrowLeft /> All news in this category</Button>
                    </Link>
                </Card.Body>
            </Card>
            <div className='my-4'>
                <h3 className='mb-3'>Editors Insight</h3>
                <EditorsInsights />
            </div>
        </div>
    );
};

export default News;