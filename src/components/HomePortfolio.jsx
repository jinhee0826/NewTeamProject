import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import "../css/HomePortfolio.css"
import HomePortfolioCard1 from "./HomePortfolioCard1";
import HomePortfolioCard2 from "./HomePortfolioCard2";
const HomePortfolio = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <Slider className="homeportfolio-com" {...settings}>
      <div className="homeportfolio-imgDiv">
        <HomePortfolioCard1 className="homeportfolio-img1" />
      </div>
      <div className="homeportfolio-imgDiv">
        <HomePortfolioCard2 id="homeportfolio-asd" />
      </div>
      <div className="homeportfolio-imgDiv">
        <HomePortfolioCard1 />
      </div>
      <div className="homeportfolio-imgDiv">
        <HomePortfolioCard1 />
      </div>
      <div className="homeportfolio-imgDiv">
        <HomePortfolioCard1 />
      </div>
      <div className="homeportfolio-imgDiv">
        <HomePortfolioCard1 />
      </div>
    </Slider>
  );
}

export default HomePortfolio;