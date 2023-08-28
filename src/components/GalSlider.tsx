'use client';
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import galImg1 from '../../public/images/gallery/gallery-1.png';
import galImg2 from '../../public/images/gallery/gallery-2.png';
import galImg3 from '../../public/images/gallery/gallery-3.png';

const GalSlider: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <button className="slick-next">NEXT</button>,
    prevArrow: <button className="slick-prev">BACK</button>,
  };

  return (
    <>
      <div className="space-y-6 md:hidden">
        <Image className="gallery-img" width={280} height={187} alt="Nature" src={galImg1} />
        <Image className="gallery-img" width={280} height={187} alt="Nature" src={galImg2} />
        <Image className="gallery-img" width={280} height={187} alt="Nature" src={galImg3} />
      </div>
      <div className="smOnly:hidden">
        <Slider {...settings}>
          <div className="gallery-slide">
            <Image
              className="gallery-slide-img"
              width={280}
              height={187}
              alt="Nature"
              src={galImg1}
            />
          </div>
          <div className="gallery-slide">
            <Image
              className="gallery-slide-img"
              width={280}
              height={187}
              alt="Nature"
              src={galImg2}
            />
          </div>
          <div className="gallery-slide">
            <Image
              className="gallery-slide-img"
              width={280}
              height={187}
              alt="Nature"
              src={galImg3}
            />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default GalSlider;
