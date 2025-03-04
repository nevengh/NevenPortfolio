import "./Portfolio.css";
import { FaLink } from "react-icons/fa6";

// استيراد الصور بشكل منظم
import pearlSmile from '../../assets/pearlSmile.png';
import GlowUp from '../../assets/GlowUp.png';
import UniqueSmile from '../../assets/uniqueSmile (2).png';
import Lobo from '../../assets/Lobo.png';
import Lobo2 from '../../assets/lobo22.png';
import gentle from '../../assets/gentle.png';
import golden from '../../assets/Golden.png';
import British from '../../assets/british.png';

// بيانات المشاريع (أسهل للصيانة والإضافة مستقبلاً)
const projects = [
  { img: pearlSmile, link: 'https://pearlsmilemedical.ae/' },
  { img: GlowUp, link: 'http://landingpage.glowup-clinic.ae/' },
  { img: UniqueSmile, link: 'https://unique-smile.ae/' },
  { img: Lobo, link: 'https://lobotailor.ae/' },
  { img: Lobo2, link: 'https://harmonious-fudge-6a9a61.netlify.app/' },
  { img: British, link: 'https://harmonious-fudge-6a9a61.netlify.app/' },
  { img: gentle, link: 'https://gentlecaremedicalcenter.com/' },
  { img: golden, link: 'https://goldenclick.ae/landingpage/' },
];

const Portfolio = () => {
  return (
    <div className="Portfolio">
      <h1 className="AboutMe-title">
        Port<span>folio</span>
      </h1>
      <div className="Portfolio-Container">
        {projects.map((project, index) => (
          <div className="portfolio-box" key={index}>
            <img src={project.img} alt={`Project ${index + 1}`} />
            <div className="demo-btn">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <FaLink />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
