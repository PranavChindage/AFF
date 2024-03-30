import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../img/ACL.png';
import image2 from '../../img/tropies.png';
import image3 from '../../img/start.png';

function SlideShow() { 
  return (
    <Carousel style={carousel}>
      <Carousel.Item>
        <img src={image1} style={{width:'100%'}} height={700} alt="Slide 1" />
        <Carousel.Caption>
          <h3>ACL Season1</h3>
          <p>Ended on 24th March 2024</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={image2} style={{width:'100%'}} height={700} alt="Slide 2" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={image3} style={{width:'100%'}} height={700} alt="Slide 3" />
        <Carousel.Caption style={{ bottom: '20px', left: '20px', right: '20px' }}>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SlideShow;

const carousel = {
  marginTop: '0px',
};
