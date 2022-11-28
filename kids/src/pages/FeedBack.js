import React, { Component } from "react";
import Slider from "react-slick";
import FeedBackData from '../Data/FeedBackData';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default class FeedBack extends Component {
    render() {
        var settings = {
          dots: true,
          arrows:true,
          infinite: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
          autoplay:true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
          pauseOnHover: true,
          responsive: [
            {
              breakpoint: 1100,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
                breakpoint: 786,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
  return (
    <>
            <h1 className='text-center sh pf'>Parents FeedBack</h1>
    <center>
        <section className='feedback-container '>
            <div className='container'>
                <div className='row '>
                <Slider {...settings}>
                {
                    FeedBackData.map((curElement)=>{
                        return(
                            <>
                                <div className='col-10 col-lg-6' key={curElement.id}>
                                <div className="wrapper">
            <div className="box-feedback ">
                <div className="image-box">
                    <img src={curElement.image} alt="Student-Images" />
                </div>
                <div className="icon mt-5">
                    <ion-icon name="logo-foursquare"></ion-icon>
                    <ion-icon name="logo-foursquare"></ion-icon>
                </div>
                <div className="feedback">{curElement.feedback}</div>
                <div className="name">
                    <h2>{curElement.name}</h2>
                </div>
                
            </div>
        </div>                                
                                </div>
                            </>
                        )
                    })
                }
                   
</Slider>

                </div>
            </div>
        </section>
    </center>
    </>
  )
}

}
