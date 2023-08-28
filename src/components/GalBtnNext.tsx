import React from 'react';

interface GalBtnNextProps {
  currentSlide?: number;
  slideCount?: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const GalBtnNext: React.FC<GalBtnNextProps> = ({
  currentSlide,
  slideCount,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={`slick-next slick-arrow${
      currentSlide === slideCount! - 1 ? ' slick-disabled' : ''
    }`}
    aria-hidden="true"
    aria-disabled={currentSlide === slideCount! - 1}
    type="button"
  >
    NEXT
  </button>
);

export default GalBtnNext;





