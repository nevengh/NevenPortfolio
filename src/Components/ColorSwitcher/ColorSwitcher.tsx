import { FaCog, FaWindowClose } from 'react-icons/fa'
import './ColorSwitcher.css'
import { useState } from 'react'
import { FaDroplet } from 'react-icons/fa6';

const ColorSwitcher = () => {
    const [CogOpen,setCogOpen]=useState(false);

    const CogToggler = () =>{
        setCogOpen(!CogOpen)
    }

    const closeSwitcher =()=>{
        setCogOpen(false)
    }

    // Function to update primary color in :root
    const setPrimaryColor = (color:string) => {
        document.documentElement.style.setProperty('--primary-color', color);
    }
  return (
    <div className='ColorSwitcher'>
        <div className="sitting" onClick={()=>CogToggler()}>
            <FaCog/>
        </div>
        {
            CogOpen === true &&(
                <div className='sitting-open'>
                    <div className="close">
                    <p>Color Switcher</p>
                    <FaWindowClose onClick={closeSwitcher}/>
                    </div>
                    <div className="colors-container">
                    <div className="green-color" onClick={() => setPrimaryColor('#00ff9d')}>
                        <FaDroplet/>
                    </div>
                    <div className="blue-color" onClick={() => setPrimaryColor('#00dcff')}>
                        <FaDroplet/>
                    </div>
                    <div className="orange-color" onClick={() => setPrimaryColor('#ff6b00')}>
                        <FaDroplet/>
                    </div>
                    <div className="red-color" onClick={() => setPrimaryColor('#ff0000')}>
                        <FaDroplet/>
                    </div>
                    <div className="cymac-color" onClick={() => setPrimaryColor('#ff00e2')}>
                        <FaDroplet/>
                    </div>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default ColorSwitcher