import * as React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


const photos = [
  {
    name: "photo1",
    url: "http://appco.themetags.com/img/01.png",
  },
  {
    name: "photo2",
    url: "http://appco.themetags.com/img/02.png",
  },
  {
    name: "photo3",
    url: "http://appco.themetags.com/img/03.png",
  },
  {
    name: "photo4",
    url: "http://appco.themetags.com/img/04.png",
  },
];

class Carousel extends React.Component {
  state = { swiper: "" };
  componentDidMount = () => {
    const swiperConfig = {
      slidesPerView: 4,
      centeredSlides: true,
      spaceBetween: 30,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    };
  };

  public render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}>I am the first Slide.</Slide>
          <Slide index={1}>I am the second Slide.</Slide>
          <Slide index={2}>I am the third Slide.</Slide>
        </Slider>
      </CarouselProvider>
    );
  }
}
export default Carousel;
