import './App.css'
import ColorSwitcher from './Components/ColorSwitcher/ColorSwitcher'
import Hero from './Components/Hero/Hero'
import AboutMe from './Page/AboutUs/AboutMe'
import Contact from './Page/Contact/Contact'
import ExperienceEducation from './Page/ExperienceEducation/ExperienceEducation'
import MySkills from './Page/MySkills/MySkills'
import Portfolio from './Page/Portfolio/Portfolio'


const App = () => {
  return (
    <div>
      <Hero/>
      <ColorSwitcher/>
      <AboutMe/>
      <MySkills/>
      <ExperienceEducation/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}

export default App