'use client';
import * as animationData from 'public/animations/arrow.animation.json';
import Lottie from 'react-lottie';

export const SaibaMaisAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return <Lottie options={defaultOptions} width={25} />;
};
