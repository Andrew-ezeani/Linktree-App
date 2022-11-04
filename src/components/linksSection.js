import { Link } from "react-router-dom";
import "../styles/main.css";
import WebLink from "./link";

function LinksSection() {
  return (
    <div className="link__section">
      <WebLink href="https://twitter.com/Alwaysgreen18" text="Twitter Link" />
      <WebLink
        href="https://training.zuri.team"
        id="btn__zuri"
        text="Zuri Team"
      />
      <WebLink
        href="http://books.zuri.team"
        id="books"
        title="Coding and design books are available"
        text="Zuri Books"
      />
      <WebLink
        href="https://books.zuri.team/python-for-beginners?ref_id=Andrew-Ezeani"
        id="book__python"
        title="Take your first step in becoming a world class programmer/designer by getting our beginner friendly coding/design books"
        text="Python Books"
      />
      <WebLink
        href="https://background.zuri.team"
        id="pitch"
        title="Join 200+ tech employers that don't have to worry about a developer's background record, because we do."
        text="Background Checks or Coders"
      />
      <WebLink
        href="https://books.zuri.team/design-rules"
        id="book__design"
        title="New to design? Get our free design book and start your journey to becoming a world class designer"
        text="Design Books"
      />
      <Link to="/contact" className="links" id="contact">
        Contact
      </Link>
    </div>
  );
}

export default LinksSection;
