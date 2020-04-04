import * as React from "react";
import HeaderTitle from "../Header/HeaderTitle";

const photos = [
  {
    name: "photo1",
    url: "http://appco.themetags.com/img/01.png"
  },
  {
    name: "photo2",
    url: "http://appco.themetags.com/img/02.png"
  },
  {
    name: "photo3",
    url: "http://appco.themetags.com/img/03.png"
  },
  {
    name: "photo4",
    url: "http://appco.themetags.com/img/04.png"
  }
];
class Carousel extends React.Component {
  public render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: "slides"
    };
    return <div className="App"></div>;
  }
}
export default Carousel;
