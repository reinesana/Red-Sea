import Earth from "../components/Earth";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landing">
      <Earth />
      <div className="welcome">
        <p>Welcome to Red Sea</p>
        <h3>A safe passage in the endless war</h3>
      </div>
      <div className="language">
        <p>Select your language</p>
        <select className="landing-select">
          <option>English</option>
          <option>Arabic</option>
          <option>French</option>
          <option>Russian</option>
          <option>Japanese</option>
          <option>Hindi</option>
        </select>
      </div>
      <Link to="/map">
        <button className="landing-btn">Start</button>
      </Link>
    </div>
  );
}
export default Landing;
