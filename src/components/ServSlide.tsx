import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

type slideProps = {
  slideNum: string;
  label: string;
  text: string;
  goTo: (index: number) => void;
  index: number;
  img: StaticImageData;
};

const ServSlide: FC<slideProps> = ({ slideNum, label, text, goTo, index, img }) => {
  return (
    <div className={`section slide0${slideNum} py-14 md:py-16 xl:py-[104px]`}>
      <div className="container smOnly:min-h-[750px]">
        <div
          data-swiper-parallax="-500"
          className="smOnly:space-y-6 mb-4 md:flex mdOnly:justify-between md:mb-10 xl:gap-40 xl:mb-5"
        >
          <h2 className="section-title">
            <span className="font-thin">WE</span> OFFER
          </h2>
          <div className="font-thin text-[43px] text-end leading-[1.33] md:text-[67px] md:leading-[1.2] xl:text-[98px]">
            <span className="">0{slideNum}/</span>
            <span className="text-white/20">05</span>
          </div>
        </div>
        <div className="relative smOnly:space-y-3 md:flex md:gap-5">
          <Image
            data-swiper-parallax="-750"
            className="w-full h-[213px] object-cover md:w-[463px] md:h-[370px] xl:w-[607px] xl:h-[429px]"
            width={280}
            height={213}
            // loading="lazy"
            alt="Nature"
            src={img}
          />
          <div
            data-swiper-parallax="-350"
            className="flex flex-col smOnly:h-full justify-between gap-9 mdOnly:w-[221px]"
          >
            <div className="smOnly:space-y-6 md:flex md:flex-col-reverse gap-6 xl:flex-row-reverse xl:gap-[70px]">
              <strong className="font-extralight smOnly:text-end leading-[2] tracking-[2.4px] text-xs">
                {label}
              </strong>
              <ul className="text-white/20 uppercase text-[20px] leading-[0.85] space-y-4 smOnly:max-w-[190px] md:text-[18px] md:leading-[0.82] xl:text-[28px] xl:leading-[0.86] xl:w-[280px] xl:space-y-6">
                <li
                  className={index === 0 ? 'current-item' : 'slide-item'}
                  aria-label="Go to slide 1"
                  role="button"
                  onClick={() => goTo(0)}
                >
                  ATVs Traveling
                </li>
                <li
                  className={index == 1 ? 'current-item' : 'slide-item'}
                  aria-label="Go to slide 2"
                  role="button"
                  onClick={() => goTo(1)}
                >
                  Rock climbing
                </li>
                <li
                  className={index == 2 ? 'current-item' : 'slide-item'}
                  aria-label="Go to slide 3"
                  role="button"
                  onClick={() => goTo(2)}
                >
                  Hot air ballooning
                </li>
                <li
                  className={index == 3 ? 'current-item' : 'slide-item'}
                  aria-label="Go to slide 4"
                  role="button"
                  onClick={() => goTo(3)}
                >
                  Skydiving
                </li>
                <li
                  className={index == 4 ? 'current-item' : 'slide-item'}
                  aria-label="Go to slide 5"
                  role="button"
                  onClick={() => goTo(4)}
                >
                  Rafting
                </li>
              </ul>
            </div>
            <p className="section-text md:text-[13px] md:leading-[1.54] md:text-justify xl:absolute xl:right-0 xl:bottom-0 xl:w-[300px] xl:text-[18px] xl:leading-[1.33]">
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServSlide;
