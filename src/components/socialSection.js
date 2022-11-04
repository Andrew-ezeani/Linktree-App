import "../styles/main.css";
import slackIcon from "../assets/slack.png";
import githubIcon from "../assets/github.png";

function SocialSection() {
  return (
    <section className="social__section">
      <a href="hoo.com">
        <img src={slackIcon} alt="" />
      </a>
      <a href="https://github.com/Andrew-ezeani/">
        <img src={githubIcon} alt="" />
      </a>
    </section>
  );
}

export default SocialSection;
