import "../styles/App.css";
import ProfileSection from "./profileSection";
import LinksSection from "./linksSection";
import SocialSection from "./socialSection";
import Footer from "./footer";

function Home() {
  return (
    <div className="App">
      <main className="main-section">
        <div className="App__content">
          <ProfileSection />
          <LinksSection />
        </div>
        <SocialSection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
