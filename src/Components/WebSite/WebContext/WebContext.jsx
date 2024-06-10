import About from "../BodySection/AboutSection/About";
import DetailSection from "../../DetailSection/DetailSection";
import Main from "../HeroSection/Main";
import Footer from "../../Footer/Footer";
import CommunitySection from "../BodySection/CommunitySection/CommunitySection";
import GuideSection from "../BodySection/GuideSection/GuideSection";
import CommentSection from "../BodySection/CommentSection/CommentSection";

const WebContext = () => {
  return (
    <div>
      <Main />
      <DetailSection />
      <About />
      <GuideSection />
      <CommentSection />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default WebContext;
