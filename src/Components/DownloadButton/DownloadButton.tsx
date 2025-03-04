import { FaDownLong } from 'react-icons/fa6'
import './DownloadButton.css'

const DownloadButton = () => {
  return (
    <div className='DownloadButton'>
        <a href="" className='button'>Download CV
            <span className='button_icon'>
                <FaDownLong/>
            </span>
        </a>
    </div>
  )
}

export default DownloadButton