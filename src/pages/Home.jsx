import WhyComplexell from '../components/home/Whycomplexell.jsx'
import PricingTeaser from '../components/home/Pricingteaser.jsx'
import FinalCTA from '../components/home/Finalcta.jsx'
import HeroCTA from '../components/home/HeroCTA.jsx'
import Reveal from '../components/home/Reveal.jsx'
import '../components/home/home.css'

const Home = () => {
  return (
    <div className="home-shell font-mono">
      {/* Ambient gradient glows */}
      <div className="home-ambient" aria-hidden="true">
        <span className="home-blob home-blob-a" />
        <span className="home-blob home-blob-b" />
        <span className="home-blob home-blob-c" />
        <span className="home-blob home-blob-d" />
        <span className="home-grid-overlay" />
      </div>

      <div className="relative z-10">
        <HeroCTA />

        <Reveal>
          <WhyComplexell />
        </Reveal>

        <Reveal delay={80}>
          <PricingTeaser />
        </Reveal>

        <Reveal delay={80}>
          <FinalCTA />
        </Reveal>
      </div>
    </div>
  )
}

export default Home