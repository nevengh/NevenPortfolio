import DownloadButton from "../../Components/DownloadButton/DownloadButton";
import StateBox from "../../Components/StateBox/StateBox";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="AboutMe">
      <h1 className="AboutMe-title">
        About <span>Me</span>
      </h1>
      <div className="AboutMe-container">
        <div className="info">
          <h3>Personal Infos</h3>
          <div className="info-details">
            <div className="details-group">
              <p>
                First Name: <span>Neven</span>
              </p>
              <p>
                Last Name: <span>Ghasoun</span>
              </p>
            </div>
            <div className="details-group">
              <p>
                Age: <span>26</span>
              </p>
              <p>
                Nationality: <span>Syrian</span>
              </p>
            </div>
            <div className="details-group">
              <p>
                Freelance : <span>Available</span>
              </p>
              <p>
                Address : <span>Syria-Latakia</span>
              </p>
            </div>
            <div className="details-group">
              <p>
                Phone :{" "}
                <span>
                  <a href="tel:0993748380">+963 993748380</a>
                </span>
              </p>
              <p>
                Email : <span>nevenghasoun@gmail.com</span>
              </p>
            </div>
            <DownloadButton />
          </div>
        </div>
        <div className="StateBox-Container">
          <StateBox number="+2" title="Years of Experience" />
          <StateBox number="+10" title="Completed Projects" />
          <StateBox number="+20" title="Happy Customers" />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default AboutMe;
