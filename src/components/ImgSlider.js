import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel, Wrap } from "../styles/ImgSlider";

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
          <img src="/images/slider-badging.jpg" alt="slider1" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="/images/slider-scale.jpg" alt="slider1" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="/images/slider-badag.jpg" alt="slider1" />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img src="/images/slider-scales.jpg" alt="slider1" />
        </a>
      </Wrap>
    </Carousel>
  );
}

export default ImgSlider;
