import SlideShow from './SlideShow';
import { Link } from 'react-router-dom';
import './Homepage.css';
import './AboutUs';
import AboutUs from './AboutUs';
import AiroliCityFc from './AiroliCityFc';
import Footer from '../Footer/Footer';

const Homepage = () => {
  return (
    <section>
      <div className="breadcrumb">
        <Link to="/ACL"><span className="breadcrumb-item">Airoli Champions League</span></Link>
        <span className="breadcrumb-separator">|</span>
        <Link to="/ASC"><span className="breadcrumb-item">Airoli Super League</span></Link>
      </div>
      <SlideShow /> 
      <AboutUs />
      <AiroliCityFc />
      <div className='organizers'>
          <span className='organizeby' style={{color:"white"}}>Organized by</span>
          <h1 className='organiser-title' style={{color:"white"}} >Airoli Football Front</h1>
      </div>
      <Footer />
    </section>
  );
};

export default Homepage;
