'use client';
import Slide from './Slide';
import React, { useRef, useState } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import { Parallax } from 'swiper/modules';
import 'swiper/css';
import servImg1 from '../../public/images/services/serv-slide-1.png';
import servImg2 from '../../public/images/services/serv-slide-2.png';
import servImg3 from '../../public/images/services/serv-slide-3.png';
import servImg4 from '../../public/images/services/serv-slide-4.png';
import servImg5 from '../../public/images/services/serv-slide-5.png';

SwiperCore.use([Parallax]);

function Slider() {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
	const swiperRef = useRef<SwiperRef | null>(null);
	

  const goToSlide = (slideIndex: number) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(slideIndex);
    }
  };
  const handleSlideChange = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const newIndex = swiperRef.current.swiper.realIndex;
      setActiveSlideIndex(newIndex);
    }
  };
  return (
    <Swiper
      ref={swiperRef}
      spaceBetween={0}
			slidesPerView={1}
			effect="fade"
			fadeEffect={{ crossFade: true }}
			parallax={true}
      speed={600}
      onSlideChange={handleSlideChange}
      onTransitionEnd={handleSlideChange}
		>
			{slidesData.map((slide, index) => (
    <SwiperSlide key={slide.slideNum}>
      <Slide
        slideNum={slide.slideNum}
        label={slide.label}
        text={slide.text}
				img={slide.img}
        goTo={goToSlide}
				index={activeSlideIndex}
      />
    </SwiperSlide>
  ))}
    </Swiper>
  );
}

const slidesData = [
  {
    slideNum: '1',
    label: 'Feel the adrenaline rush',
    text: 'Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.',
		img: servImg1
	},
  {
    slideNum: '2',
    label: 'Destroy your limitations',
		text: 'Overcome the peaks of the Carpathians in a unique way - climbing. Make your own way to the heights and find inner peace in the embrace of the mighty rocks.',
		img: servImg2
  },
  {
    slideNum: '3',
    label: 'Get Inspired',
		text: 'Feel Zen over the mountain peaks! Hot air ballooning gives you incredible impressions and panoramas of the Carpathians that seem endless.',
		img: servImg3
	},
	{
    slideNum: '4',
    label: 'Overcome your fears',
		text: "Fly in the sky over the Carpathians! Experienced instructors will help you realize your dream of free flight. Remember the incredible emotions and panoramas from a bird's eye view forever.",
		img: servImg4
	},
	{
    slideNum: '5',
    label: 'Trust the flow',
		text: 'Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.',
		img: servImg5
  },
];

export default Slider;
