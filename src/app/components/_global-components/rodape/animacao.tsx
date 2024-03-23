'use client';
import Lottie from 'react-lottie';
import * as animationData from '@/assets/animations/qr-code.json';

export default function Animacao() {
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
