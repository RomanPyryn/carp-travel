import React from 'react';

interface GalBtnBackProps {
  currentSlide?: number;
  slideCount?: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const GalBtnBack: React.FC<GalBtnBackProps> = ({
  currentSlide,
  slideCount,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={`slick-prev slick-arrow${
      currentSlide === 0 ? ' slick-disabled' : ''
    }`}
    aria-hidden="true"
    aria-disabled={currentSlide === 0}
    type="button"
  >
    BACK
  </button>
);

export default GalBtnBack;