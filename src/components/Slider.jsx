'use client';
import Slide from './Slide';
import React, { useRef, useState } from 'react';
import SwiperCore, { Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Slider() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const swiperRef = useRef(null);

  const goToSlide = slideIndex => {
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
      duration={600}
      scrollbar={{ draggable: false }}
      onSlideChange={handleSlideChange}
      onTransitionEnd={handleSlideChange}
    >
      <SwiperSlide>
        <Slide
          slideNum={'1'}
          label={'Feel the adrenaline rush'}
          text={
            'Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.'
          }
          goTo1={() => goToSlide(0)}
          goTo2={() => goToSlide(1)}
          goTo3={() => goToSlide(2)}
          goTo4={() => goToSlide(3)}
					goTo5={() => goToSlide(4)}
					index={activeSlideIndex}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          slideNum={'2'}
          label={'Destroy your limitations'}
          text={
            'Overcome the peaks of the Carpathians in a unique way - climbing. Make your own way to the heights and find inner peace in the embrace of the mighty rocks.'
          }
          goTo1={() => goToSlide(0)}
          goTo2={() => goToSlide(1)}
          goTo3={() => goToSlide(2)}
          goTo4={() => goToSlide(3)}
					goTo5={() => goToSlide(4)}
					index={activeSlideIndex}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          slideNum={'3'}
          label={'Get Inspired'}
          text={
            'Feel Zen over the mountain peaks! Hot air ballooning gives you incredible impressions and panoramas of the Carpathians that seem endless.'
          }
          goTo1={() => goToSlide(0)}
          goTo2={() => goToSlide(1)}
          goTo3={() => goToSlide(2)}
          goTo4={() => goToSlide(3)}
					goTo5={() => goToSlide(4)}
					index={activeSlideIndex}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          slideNum={'4'}
          label={'Overcome your fears'}
          text={
            "Fly in the sky over the Carpathians! Experienced instructors will help you realize your dream of free flight. Remember the incredible emotions and panoramas from a bird's eye view forever."
          }
          goTo1={() => goToSlide(0)}
          goTo2={() => goToSlide(1)}
          goTo3={() => goToSlide(2)}
          goTo4={() => goToSlide(3)}
					goTo5={() => goToSlide(4)}
					index={activeSlideIndex}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          slideNum={'5'}
          label={'Trust the flow'}
          text={
            'Join exciting rafting expeditions on the waterways of the Carpathians. Go through challenging waterways and overcome gusty waves, feel the adrenaline, and enjoy the incredible views of the surrounding mountains.'
          }
          goTo1={() => goToSlide(0)}
          goTo2={() => goToSlide(1)}
          goTo3={() => goToSlide(2)}
          goTo4={() => goToSlide(3)}
					goTo5={() => goToSlide(4)}
					index={activeSlideIndex}
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
