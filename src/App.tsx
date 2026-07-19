import TopBar from './components/TopBar'
import FloatingActions from './components/FloatingActions'
import Hero from './sections/Hero'
import StatStrip from './sections/StatStrip'
import LeadCapture from './sections/LeadCapture'
import Pitch from './sections/Pitch'
import WhyAutograph from './sections/WhyAutograph'
import Configurations from './sections/Configurations'
import Amenities from './sections/Amenities'
import Gallery from './sections/Gallery'
import Location from './sections/Location'
import Vastu from './sections/Vastu'
import Developer from './sections/Developer'
import FAQ from './sections/FAQ'
import FinalCta from './sections/FinalCta'
import Footer from './sections/Footer'

function App() {
  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <StatStrip />
        <LeadCapture />
        <Pitch />
        <WhyAutograph />
        <Configurations />
        <Amenities />
        <Gallery />
        <Location />
        <Vastu />
        <Developer />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}

export default App
