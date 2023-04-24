import moment from 'moment';
import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaRegBookmark, FaShareAlt, FaRegEye, FaStar, FaRegStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { title, image_url, details, author, _id, total_view, rating } = news;
    return (
        <div>
            <Card className="text-center mb-3">
                <Card.Header className='d-flex align-items-center '>
                    <div className='d-flex align-items-center flex-grow-1'>
                        <img src={author.img} className='authorImg rounded-circle img-thumbnail img-fluid' alt="" />
                        <div className='ms-3'>
                            {author.name} <br /> {moment(author.published_date).format('yyy-MM-D')} { }
                        </div>
                    </div>
                    <div>
                        <FaRegBookmark /> <FaShareAlt />
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {
                            details.length < 250 ? <>{details}</> :
                                <>{details.slice(0, 250)}... <Link className='text-warning' to={`/news/${_id}`}>Read More</Link></>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className=" d-flex justify-content-between">
                    <div className=''>
                        <Rating
                            placeholderRating={rating.number}
                            readonly
                            emptySymbol={<FaRegStar />}
                            placeholderSymbol={<FaStar className='text-danger' />}
                            fullSymbol={<FaStar />}
                        />
                        <span>{rating.number}</span></div>
                    <div className=''><FaRegEye /> {total_view}</div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;