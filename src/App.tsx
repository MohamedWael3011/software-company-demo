import Footer from './Footer/Footer'
import AboutUs from './components/AboutUs'
import Experince from './components/Experience'
import Hero from './components/Hero'
import MissionVision from './components/MissionVision'
import Services from './components/Services'
import NavBar from './components/nav-bar/NavBar'
import './index.css'

function App() {

  return (
    <div className='w-full overflow-hidden'>
      <NavBar/>
      <Hero/>
      <AboutUs/>
      <MissionVision/>
      <Services/>
      <Experince/>
      <Footer/>

    </div>

  )
}

export default App
