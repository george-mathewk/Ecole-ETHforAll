import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import './footer.css'



const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg='3' md='6' sm='6'>
                        <div className="logo">
                            <h2 className='d-flex gap-2 align-items-center'>
                                <span>
                                    <i className="ri-fire-fill"></i>
                                </span>
                                Ecole
                            </h2>
                            <p>Ecole is an NFT marketplace with an inbuilt lottery system where
                                players can buy an NFT and enter the lottery, win exciting prizes and sell their nfts in their marketplace at a higher value.
                            </p>
                        </div>
                    </Col>

                   

            

                    <Col lg='3' md='6' sm='6' className='mb-4'>
                        <h5>Connect with the team at </h5>
                        <input type="text" className='newsletter' placeholder='Email' />
                        <div className="social__links d-flex gap-3 align-items-center">
                            <span>
                                <Link to='#'>
                                    <i className="ri-facebook-line"></i>
                                </Link>
                            </span>
                            <span>
                                <Link to='#'>
                                    <i className="ri-instagram-line"></i>
                                </Link>
                            </span>
                            <span>
                                <Link to='#'>
                                    <i className="ri-twitter-line"></i>
                                </Link>
                            </span>
                            <span>
                                <Link to='#'>
                                    <i className="ri-telegram-line"></i>
                                </Link>
                            </span>
                            <span>
                                <Link to='#'>
                                    <i className="ri-discord-line"></i>
                                </Link>
                            </span>
                        </div>
                    </Col>
                    <Col lg='12' className='mt-4 text-center'>
                        <p className='copyright'>
                            Copyrights 2023, Developed by <span>Team Ecole</span> with React
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
