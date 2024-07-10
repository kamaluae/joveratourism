import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Link from 'next/link';
import './homePageStyle.css';
import california from '../Assets/homePageAssets/california.JPG';
import loasangles from '../Assets/homePageAssets/loasangles.JPG';
import naveda from '../Assets/homePageAssets/naveda.png';
import sanAmerica from '../Assets/homePageAssets/sanAmerica.JPG';
import fujairah from '../Assets/homePageAssets/fujarisah.jpg';
import rasalkhaima from '../Assets/homePageAssets/rasalkhaima.jpg'
import ummalkhaim from '../Assets/homePageAssets/ummalkhaim.jpg';
import Zoom from 'react-reveal/Zoom';

// Sample JSON data with image paths
const destinations = [
    {
        title: "Abu Dhabi",
        text: "14 Hotels",
        image: california
    },
    {
        title: "Dubai",
        text: "22 Hotels",
        image: loasangles
    },
    {
        title: "Sharjah",
        text: "18 Hotels",
        image: naveda
    },
    {
        title: "Ajman",
        text: "25 Hotels",
        image: sanAmerica
    },
    {
        title: "Fujairah",
        text: "30 Hotels",
        image: fujairah
    },
    {
        title: "Ras Al khaimah",
        text: "20 Hotels",
        image: rasalkhaima
    },
    {
        title: "Umm Al Quwain",
        text: "20 Hotels",
        image: ummalkhaim
    }
];

const Destination = () => {
    return (
        <>
            <h1 className='topdestination mt-5'>Top destinations</h1>
            <Row>
                {destinations.map((destination, index) => (
                    <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                        <div className='card_Container'>
                            <Zoom>
                                <Link href={'/'} style={{ textDecoration: 'none' }}>
                                    <Card
                                        style={{
                                            backgroundImage: `url(${destination.image.src})`,
                                            backgroundSize: 'cover',
                                            color: 'white'
                                        }}
                                        className='destinationCard'
                                    >
                                        <Card.Body style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                                            <h1 className='titledestination'>{destination.title}</h1>
                                            <ul className='ul_text_class'>
                                                <li>{destination.text}</li>
                                                <li>22 Tours</li>
                                                <li>22 Rentals</li>
                                                <li>25 Cars</li>
                                                <li>18 Activities</li>
                                            </ul>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Zoom>

                        </div>
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default Destination;
