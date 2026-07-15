import React from 'react'
import Navbar from '../components/layout/Navbar.jsx'
import FeatruredArticles from '../components/home/FeatruredArticles.jsx'
import AddressBar from '../components/layout/AddressBar.jsx'
import WhyComplexell from '../components/home/Whycomplexell.jsx'
import PricingTeaser from '../components/home/Pricingteaser.jsx'
import FinalCTA from '../components/home/Finalcta.jsx'
import Footer from '../components/layout/Footer.jsx'
import HeroCTA from '../components/home/HeroCTA.jsx'
import Banner from '../components/beta/Banner.jsx'

const Home = () => {
  return (
    <>
    <AddressBar />
    <Banner />
    <HeroCTA />
    <FeatruredArticles />
    <WhyComplexell />
    <PricingTeaser />
    <FinalCTA />
    </>
  )
}

export default Home