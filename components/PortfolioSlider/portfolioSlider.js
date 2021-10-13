import React from "react"
import Slider from "react-slick"

import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css"

import one from "../../src/img/port-1.webp"
import two from "../../src/img/port-2.webp"
import three from "../../src/img/port-3.webp"
import four from "../../src/img/port-4.webp"
import five from "../../src/img/port-5.webp"
import six from "../../src/img/port-6.webp"
import seven from "../../src/img/port-7.webp"
import eight from "../../src/img/port-8.webp"
import nine from "../../src/img/port-9.webp"
import ten from "../../src/img/port-10.webp"

const PortfolioSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>
      <Slider {...settings}>
        <div>
          <img
            width="800"
            height="799"
            className="img-fluid"
            src={one}
            alt="one"
          />
        </div>
        <div>
          <img
            width="800"
            height="799"
            className="img-fluid"
            src={two}
            alt="two"
          />
        </div>
        <div>
          <img
            width="800"
            height="799"
            className="img-fluid"
            src={three}
            alt="three"
          />
        </div>
        <div>
          <img
            width="800"
            height="799"
            className="img-fluid"
            src={four}
            alt="four"
          />
        </div>
        <div>
          <img
            width="800"
            height="799"
            className="img-fluid"
            src={five}
            alt="five"
          />
        </div>
        <div>
          <img
            width="800"
            height="799"
            className="img-fluid"
            src={six}
            alt="six"
          />
        </div>
        <div>
          <img
            width="800"
            height="799"
            className="img-fluid"
            src={seven}
            alt="seven"
          />
        </div>
        <div>
          <img
            width="800"
            height="799"
            className="img-fluid"
            src={eight}
            alt="eight"
          />
        </div>
        <div>
          <img
            width="800"
            height="799"
            className="img-fluid"
            src={nine}
            alt="nine"
          />
        </div>
        <div>
          <img
            width="800"
            height="799"
            className="img-fluid"
            src={ten}
            alt="ten"
          />
        </div>
      </Slider>
    </>
  )
}

export default PortfolioSlider
