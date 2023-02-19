import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import './hero-section.css'
import heroImg from '../../assets/images/hero.jpg'

const HeroSection = () => {
    return (
        <section className="hero__section">
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="hero__content">
                            <h2>Discover and collect cool digital art to win exciting prizes in the LOTTERY!</h2>
                            <div className="hero__btns d-flex align-items-center gap-4">
                                <button className='explore__btn d-flex align-items-center gap-2'>
                                    <i className="ri-rocket-line"></i><Link to='/nft-react/market'>Marketplace</Link>
                                </button>
                                <button className='explore__btn d-flex align-items-center gap-2'>
                                    <i className="ri-ball-pen-line"></i><Link to='/nft-react/lottery'>Lottery</Link>
                                </button>
                            </div>
                        </div>
                    </Col>

                    <Col lg='6' md='6'>
                        <div className="hero__img">
                            <img src={heroImg} alt=""  className='w-100'/>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default HeroSection
