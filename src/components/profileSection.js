import "../styles/main.css";
import profileImg from "../assets/Device=Web, State=Focused.png";
import shareIcon from "../assets/Icon.png";
import mobileShareIcon from "../assets/AvatarShareButton.png";
function ProfileSection() {
  return (
    <div className="profile__section">
      <img src={profileImg} alt="" id="profile__img" />
      <p id="twitter">Alwaysgreen18</p>
      <p id="slack">Andrew Ezeani</p>
      <div className="profile__share">
        <img src={mobileShareIcon} alt="" className="share-icon-m" />
        <img src={shareIcon} alt="" className="share-icon" />
      </div>
    </div>
  );
}

export default ProfileSection;
