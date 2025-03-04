import { FaDownLong } from 'react-icons/fa6'
import './DownloadButton.css'

const DownloadButton = () => {
  return (
    <div className='DownloadButton'>
        <a href="/Neven_Zuhair_Ghasoun_Resume.pdf" download="Neven_Zuhair_Ghasoun_Resume.pdf" className='button'>Download CV
            <span className='button_icon'>
                <FaDownLong/>
            </span>
        </a>
    </div>
  )
}

export default DownloadButton