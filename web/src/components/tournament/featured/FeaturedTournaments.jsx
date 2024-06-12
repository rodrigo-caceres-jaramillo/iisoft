import SimpleFeaturedTournament from './simple/SimpleFeaturedTournament';
import './FeaturedTournaments.css';
import Slider from 'react-slick';

const FeaturedTournaments = ({ name, tournaments }) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
  };
  return (
    <div className="element main">
      <div className="header">
        <h3>{name}</h3>
      </div>
      <div className="featured-tournaments">
        <Slider {...settings}>
          {tournaments.map((tournament, index) => (
            <SimpleFeaturedTournament tournament={tournament} key={index} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedTournaments;
