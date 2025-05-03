import './Hero.css';
import neven from '../../assets/IMG_9068_11zon.webp';

const Hero = () => {
  return (
    <div className='Hero'>
      <div className="overlay"></div>
      <div className="hero-container">
        <div className="hero-image">
          <img src={neven} alt="Neven Ghasoun" />
        </div>
        <div className="hero-title">
          <h1>
            I'm Neven Ghasoun.
            <span>Front-End Developer (React.js)</span>
          </h1>
          {/* إضافة قسم About Me هنا */}
          <div className="about-me">
            <p>
              Hello! I'm <strong>Neven Ghasoun</strong>, a passionate <strong>Front-End Developer</strong> specializing in <strong>React.js</strong> and <strong>WordPress</strong>. I hold a degree in <strong>Computer Engineering and Automatic Control</strong> from <strong>Tishreen University</strong> in Latakia, Syria.
            </p>
            <p>
              With a strong foundation in web development, I love creating responsive, user-friendly, and visually appealing websites. My expertise includes building dynamic web applications using React.js and developing custom WordPress themes and plugins to meet clients' unique needs.
            </p>
            <p>
              I am constantly learning and exploring new technologies to enhance my skills and deliver high-quality solutions. Whether it's crafting a seamless user experience or solving complex technical challenges, I am always up for the task!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;