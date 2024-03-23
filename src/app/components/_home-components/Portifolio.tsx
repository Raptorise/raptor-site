'use client';

import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import raptorPortifolio from '@/assets/portifolio/raptor.portifolio.png';
import fredPortifolio from '@/assets/portifolio/fred-sauer.portifolio.png';
import laboratorioMatematica from '@/assets/portifolio/laboratorio-de-matematica.portifolio.png';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

export default function Portifolio() {
  return (
    <section className="w-2/3 flex flex-col items-center">
      <div className="mt-32 mb-20">
        <h1 className="text-white text-6xl font-bold">Portifólio</h1>
      </div>

      <Carousel
        centerMode={true}
        centerSlidePercentage={90}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showArrows={true}
        showStatus={false}
        autoPlay={true}
      >
        <div>
          <Image src={raptorPortifolio} alt="" />
        </div>
        <div>
          <Image src={fredPortifolio} alt="" />
        </div>
        <div style={{ maxHeight: 10 }}>
          <Image src={laboratorioMatematica} alt="" />
        </div>
      </Carousel>
    </section>
  );
}
