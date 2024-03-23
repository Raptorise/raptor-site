import Image from 'next/image';
import desenvolvimentoSites from '@/assets/servicos/desenvolvimento-sites.servico.svg';
import manutencaoSistemas from '@/assets/servicos/manutencao-sistemas.servico.svg';
import solucoesHospedagem from '@/assets/servicos/solucoes-hospedagem.servico.svg';

export default function Servicos() {
  return (
    <section
      id="servicos"
      className="mt-36 w-full p-2 flex flex-col items-center text-center md:w-3/4 lg:p-0"
    >
      <h2 className="text-white text-4xl font-bold lg:text-6xl">Serviços</h2>
      <div className="justify-center w-full mt-16 flex">
        <div className="mt-16 flex items-center flex-col w-1/3">
          <Image
            src={manutencaoSistemas}
            alt="Imagem representativa de um computador com uma engrenagem e uma ferramenta. Simboliza a Manutenção de Sites."
            className="w-20 lg:w-48"
          />
          <h3 className="font-bold text-white text-sm mt-4 lg:text-2xl lg:text-center">
            Manutenção de Sistemas
          </h3>
        </div>

        <div className="flex flex-col items-center w-1/3">
          <Image
            src={desenvolvimentoSites}
            alt="Imagem representativa de um computador com alguns detalhes tecnológicos dentro. Simboliza o Desenvolvimento de Sites."
            className="w-20 lg:w-48"
          />
          <h3 className="font-bold text-white text-sm lg:text-2xl lg:text-center mt-4">
            Desenvolvimento de sites
          </h3>
        </div>

        <div className="mt-16 flex flex-col items-center w-1/3">
          <Image
            src={solucoesHospedagem}
            alt="Imagem representativa de um computador com um servidor dentro de uma nuvem. Simboliza as Soluções de Hospedagem."
            className="w-20 lg:w-48"
          />
          <h3 className="font-bold text-white text-sm lg:text-2xl lg:text-center mt-4">
            Soluções de Hospedagem
          </h3>
        </div>
      </div>

      <button className="mt-16 mb-10 bg-primary-1 hover:bg-primary-2 p-2 rounded-lg text-white">
        Conhecer os serviços
      </button>
    </section>
  );
}
