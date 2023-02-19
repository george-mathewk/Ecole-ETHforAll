import React from 'react'
import HeroSection from '../components/ui/HeroSection'
import LiveAction from '../components/ui/Live-action/LiveAction'
import SellerSection from '../components/ui/Seller-section/SellerSection'
import StepSection from '../components/ui/Step-section/StepSection'
import Trending from '../components/ui/Trending-section/Trending'

const Home = () => {
  return (
    <>
    <HeroSection />
    <LiveAction />
    <Trending />
    <StepSection />
    </>
  )
}

export default Home
