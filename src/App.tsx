import TopBar from './components/TopBar'
import FloatingActions from './components/FloatingActions'
import BrochureModal from './components/BrochureModal'
import { BrochureModalProvider } from './context/BrochureModalContext'
import Hero from './sections/Hero'
import StatStrip from './sections/StatStrip'
import LeadCapture from './sections/LeadCapture'
import Pitch from './sections/Pitch'
import WhyAutograph from './sections/WhyAutograph'
import Configurations from './sections/Configurations'
import Amenities from './sections/Amenities'
import Gallery from './sections/Gallery'
import BrochureCta from './sections/BrochureCta'
import Location from './sections/Location'
import Vastu from './sections/Vastu'
import Developer from './sections/Developer'
import FAQ from './sections/FAQ'
import FinalCta from './sections/FinalCta'
import Footer from './sections/Footer'

function App() {
  return (
    <BrochureModalProvider>
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
        <BrochureCta />
        <Location />
        <Vastu />
        <Developer />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
      <FloatingActions />
      <BrochureModal />
    </BrochureModalProvider>
  )
}

export default App
