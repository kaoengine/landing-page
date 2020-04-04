import * as React from 'react';
import Swiper from "swiper"; 
import "swiper/css/swiper.css";
import 'swiper/js/swiper.min.js'

import HeaderTitle from '../Header/HeaderTitle'

const photos = [
    {
        name: 'photo1',
        url: 'http://appco.themetags.com/img/01.png'
    },
    {
        name: 'photo2',
        url: 'http://appco.themetags.com/img/02.png'
    },
    {
        name: 'photo3',
        url: 'http://appco.themetags.com/img/03.png'
    },
    {
        name: 'photo4',
        url: 'http://appco.themetags.com/img/04.png'
    }
]
class Carousel extends React.Component{
    state = {swiper: ''}
    componentDidMount = () => {
        const swiper = new Swiper('.swiper-container', {
            slidesPerView: 4,
            centeredSlides: true,
            spaceBetween: 30,
            grabCursor: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
          });
        return swiper;
    }
    public render(){
        return(
            <div className="App">
                <HeaderTitle />
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                    {photos.map((photo,index)=>{
                        return(
                            <div key={index} className="swiper-slide">
                                <img src={photo.url} alt={photo.name} />
                            </div>
                        )
                    })}
                </div>
                 {/* Add Pagination */}
                <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    };
}
export default Carousel;