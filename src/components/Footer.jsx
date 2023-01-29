import twitterIcon from "../assets/twitter-Icon.png";
import instaIcon from "../assets/instagram-icon.png";
import fbIcon from "../assets/Facebook-icon.png";
import githubIcon from "../assets/Github-Icon.png";

function Footer() {
  return (
    <footer className="footer-el">
      <img src={twitterIcon}></img>
      <img src={instaIcon}></img>
      <img src={fbIcon}></img>
      <img src={githubIcon}></img>
    </footer>
  );
}

export default Footer;
