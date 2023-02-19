import React from 'react'
import './live-action.css'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import NftCard from '../Nft-card/NftCard'
import { NFT__DATA } from '../../../assets/data/data.js'

const LiveAction = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='12' className='mb-5'>
                        <div className="live__action__top d-flex align-items-center justify-content-between">
                            <h3>Live Action</h3>
                            <span><Link to='/nft-react/market'>Explore more</Link></span>
                        </div>
                    </Col>

                    {NFT__DATA.slice(0, 4).map((item) => (
                        <Col lg='3' md='4' sm='6' className='mb-4' key={item.id}>
                            <NftCard key={item.id} item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}

export default LiveAction
