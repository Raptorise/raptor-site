'use client';
import * as animationData from 'public/animations/qr-code.json';
import Lottie from 'react-lottie';

export const QrCodeAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return <Lottie options={defaultOptions} width={80} />;
}
