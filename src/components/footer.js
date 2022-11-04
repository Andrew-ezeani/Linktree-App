import "../styles/main.css";
import zuriLogo from "../assets/zuri.png";
import dot from "../assets/dot.png";
import ingressiveLogo from "../assets/I4G.png";

function Footer() {
  return (
    <div className="footer">
      <div className="zuri-logo">
        <img src={zuriLogo} alt="" />
        <img src={dot} alt="" className="zuri_dot" />
      </div>
      <p className="footer__text">HNG Internship 9 Frontend Task</p>
      <img src={ingressiveLogo} alt="" />
    </div>
  );
}

export default Footer;
