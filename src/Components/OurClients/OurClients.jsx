import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurClients = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 10000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Our Clients
        </h2>
        <Slider {...settings}>
          <div className="px-4 h-40 w-40">
            <img className="h-40 w-40 rounded-full shadow-inner" src="https://png.pngtree.com/template/20190527/ourmid/pngtree-babydummynewbienipplenoob-purple-business-logo-template-image_205942.jpg" alt="client" />
          </div>
          <div className="px-4 h-40 w-40">
            <img className="h-40 w-40 rounded-full shadow-inner" src="https://img.freepik.com/free-vector/flat-design-culture-logo-template_23-2149845371.jpg?w=2000" alt="client" />
          </div>
          <div className="px-4">
            <img className="h-40 w-40 rounded-full shadow-inner" src="https://img.freepik.com/premium-vector/initial-letter-u-logo-business-design-icon-vector_6415-6090.jpg?w=2000" alt="client" />
          </div>
          <div className="px-4">
            <img className="h-40 w-40 rounded-full shadow-inner" src="https://img.freepik.com/free-vector/branding-identity-corporate-logo-vector-design-template_460848-14001.jpg" alt="client" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default OurClients;
