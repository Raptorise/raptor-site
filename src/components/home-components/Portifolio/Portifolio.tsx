'use client';

import Image from 'next/image';
import fredPortifolio from 'public/portifolio/fred-sauer.portifolio.png';
import laboratorioMatematica from 'public/portifolio/laboratorio-de-matematica.portifolio.png';
import raptorPortifolio from 'public/portifolio/raptor.portifolio.png';
import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Portifolio = () => {
  return (
    <section id="portifolio" className="w-11/12 flex flex-col items-center">
      <div className="mt-32 mb-20">
        <h2 className="text-white text-4xl font-bold lg:text-6xl">Portifólio</h2>
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
          <Image src={raptorPortifolio} alt="" className='rounded-sm'/>
        </div>

        <div>
          <Image src={fredPortifolio} alt="" className='rounded-sm' />
        </div>

        <div style={{ maxHeight: 10 }}>
          <Image src={laboratorioMatematica} alt="" className='rounded-sm'/>
        </div>
      </Carousel>
    </section>
  );
}
