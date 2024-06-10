
import DetailSection from '../../DetailSection/DetailSection'
import Footer from '../../Footer/Footer'
import CommentSection from '../../WebSite/BodySection/CommentSection/CommentSection'
import CommunityIntro from '../pages/CommunityIntro'
import HikerSlide from '../pages/Sliders/HikerSlide'
import TopPlaces from '../pages/Sliders/TopPlaces'
import ApplicationMain from '../pages/WebApplicationHeroSection/ApplicationMain'

const AppContext = () => {
  return (
    <div>
        <ApplicationMain/>
        <DetailSection/>
        <TopPlaces/>
        <HikerSlide/>
        <CommentSection/>
        <CommunityIntro/>
        <Footer/>
    </div>
  )
}

export default AppContext