import * as React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styled from "styled-components";

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
  {
    name: "photo4",
    url: "http://appco.themetags.com/img/04.png",
  },
  {
    name: "photo4",
    url: "http://appco.themetags.com/img/04.png",
  },
];

const Wrapper = styled.div`
   background:#6730e3;
   padding:5%;
`;

const PhoneFrame = styled.div`
    background-image: url(http://appco.themetags.com/img/phone-frame2.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: block;
    width: 285px;
    height: 518px;
    position: absolute;
    top: 60px;
    left: calc(50% + 0.5px);
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    z-index: 2;
    border-radius: 40px;`;


const ImageWrapper = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 64%;
    height: 100%
`;

const DotWrapper = styled.div`
  text-align: center;
  margin-top:4em;
`;
class Carousel extends React.Component {
  public render() {
    return (
      <Wrapper>
        <PhoneFrame></PhoneFrame>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={5}
          hasMasterSpinner
          infinite
          // isPlaying={true}
          playDirection="forward"
          visibleSlides={3}
        >
          <Slider>
            <Slide index={0}><ImageWrapper><Image style={{ border: '1px solid gray', borderRadius: '2em' }} isBgImage src={photos[0].url}></Image></ImageWrapper></Slide>
            <Slide index={1}><ImageWrapper><Image style={{ border: '1px solid gray', borderRadius: '2em' }} isBgImage src={photos[1].url}></Image></ImageWrapper></Slide>
            <Slide index={2}><ImageWrapper><Image style={{ border: '1px solid gray', borderRadius: '2em' }} isBgImage src={photos[2].url}></Image></ImageWrapper></Slide>
            <Slide index={3}><ImageWrapper><Image style={{ border: '1px solid gray', borderRadius: '2em' }} isBgImage src={photos[3].url}></Image></ImageWrapper></Slide>
            <Slide index={4}><ImageWrapper><Image style={{ border: '1px solid gray', borderRadius: '2em' }} isBgImage src={photos[4].url}></Image></ImageWrapper></Slide>
          </Slider>
          <DotWrapper><DotGroup /></DotWrapper>
        </CarouselProvider>
      </Wrapper >
    )
  }
}
export default Carousel;
