import Image from 'next/image';
import orb from '@/assets/orb.png';
import dino from '@/assets/dino_sf.png';

export default function Sobre() {
  return (
    <section id="sobre" className="mt-44 flex justify-center">
      <div className="bg-white w-5/6 rounded-lg">
        <div className="flex p-8 flex-col items-center lg:flex-row">
          <div className="w-4/6">
            <Image
              src={orb}
              alt="Imagem de um orbe da cor verde feito com diversas retas interligadas."
            />
          </div>
          <div className="w-full flex flex-col items-center mt-6">
            <h1 className="font-bold mb-4 text-lg">Sobre nós</h1>
            <p className="text-center text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex a,
              architecto neque veritatis quod voluptate quas corporis asperiores
              dignissimos cupiditate fugiat eligendi vitae ducimus ab doloribus
              reprehenderit. Reiciendis, ipsa saepe?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
