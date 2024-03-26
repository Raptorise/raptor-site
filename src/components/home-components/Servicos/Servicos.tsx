import Image from 'next/image';
import manutencaoSistemas from 'public/servicos/manutencao-sistemas.servico.svg';
import { SaibaMais } from './components/SaibaMais';

export const Servicos = () => {
  return (
    <section
      id="servicos"
      className="mt-36 w-full p-2 flex flex-col items-center text-center md:w-3/4 lg:p-0"
    >
      <h2 className="text-white text-4xl font-bold lg:text-6xl">Serviços</h2>

      <div className="flex justify-around flex-wrap gap-1">
        <div className="mt-16 flex items-center flex-col w-1/3">
          <Image
            src={manutencaoSistemas}
            alt="Imagem representativa de um computador com uma engrenagem e uma ferramenta. Simboliza a Manutenção de Sites."
            className="w-16 lg:w-48"
          />
          <h3 className="font-bold text-white text-xs mt-4 lg:text-2xl lg:text-center">
            Site institucional
          </h3>
          <p className="text-white text-xs mt-2">
            Portais elegantes que representam sua instituição.
          </p>
          <SaibaMais href="" />
        </div>

        <div className="mt-16 flex items-center flex-col w-1/3">
          <Image
            src={manutencaoSistemas}
            alt="Imagem representativa de um computador com uma engrenagem e uma ferramenta. Simboliza a Manutenção de Sites."
            className="w-16 lg:w-48"
          />
          <h3 className="font-bold text-white text-xs mt-4 lg:text-2xl lg:text-center">
            E-commerce
          </h3>
          <p className="text-white text-xs mt-2">
            Lojas virtuais ideais para qualquer tipo de negócio.
          </p>
          <SaibaMais href="" />
        </div>

        <div className="mt-16 flex items-center flex-col w-1/3">
          <Image
            src={manutencaoSistemas}
            alt="Imagem representativa de um computador com uma engrenagem e uma ferramenta. Simboliza a Manutenção de Sites."
            className="w-16 lg:w-48"
          />
          <h3 className="font-bold text-white w-2/3 text-xs mt-4 lg:text-2xl lg:text-center">
            Landing pages
          </h3>
          <p className="text-white text-xs mt-2">
            Páginas diretas com intuito de converter visitantes em clientes.
          </p>
          <SaibaMais href="" />
        </div>

        <div className="mt-16 flex items-center flex-col w-1/3">
          <Image
            src={manutencaoSistemas}
            alt="Imagem representativa de um computador com uma engrenagem e uma ferramenta. Simboliza a Manutenção de Sites."
            className="w-16 lg:w-48"
          />
          <h3 className="font-bold text-white text-xs mt-4 lg:text-2xl lg:text-center">
            Manutenção de sites/sistemas
          </h3>
          <p className="text-white text-xs mt-2">
            Manutenção e preservação de sites e/ou ferramentas existentes.
          </p>
          <SaibaMais href="" />
        </div>
      </div>
    </section>
  );
};
