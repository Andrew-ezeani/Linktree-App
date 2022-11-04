import "../styles/main.css";

function WebLink({ text, href, id, title }) {
  return (
    <a href={href} title={title} id={id} className="links">
      {text}
    </a>
  );
}

export default WebLink;
