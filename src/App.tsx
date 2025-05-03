import './App.css'
import ColorSwitcher from './Components/ColorSwitcher/ColorSwitcher'
import Hero from './Components/Hero/Hero'
import WhatsApp from './Components/WhatsApp/WhatsApp'
import AboutMe from './Page/AboutUs/AboutMe'
import Contact from './Page/Contact/Contact'
import ExperienceEducation from './Page/ExperienceEducation/ExperienceEducation'
import MySkills from './Page/MySkills/MySkills'
import Portfolio from './Page/Portfolio/Portfolio'


const App = () => {
  return (
    <div className='AppContainer'>
      <Hero/>
      <ColorSwitcher/>
      <AboutMe/>
      <MySkills/>
      <ExperienceEducation/>
      <Portfolio/>
      <Contact/>
      <WhatsApp/>
    </div>
  )
}

export default App