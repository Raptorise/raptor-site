import Image from 'next/image';
import ambientesVirtuais from 'public/produtos/ambientes-virtuais.produto.png';
import sistemaBancoObjetos from 'public/produtos/sistema-de-banco-objetos.produto.png';
import sistemaGerenciamentoSolicitacoes from 'public/produtos/sistema-gerenciamento-solicitacoes.produto.png';

export const Produtos = () => {
  return (
    <section
      id="produtos"
      className="mt-36 w-full p-2 flex flex-col items-center text-center md:w-3/4 lg:p-0"
    >
      <h2 className="text-white text-4xl font-bold lg:text-6xl">Produtos</h2>

      <div className="justify-center w-full mt-16 flex">
        <div className="mt-16 flex items-center flex-col w-1/3">
          <Image
            src={sistemaBancoObjetos}
            alt="Imagem representativa de um ícone"
            className="w-20 lg:w-48"
          />
          <h3 className="font-bold text-white text-sm mt-4 lg:text-2xl lg:text-center">
            Sistema de Banco de Objetos
          </h3>
        </div>

        <div className="flex flex-col items-center w-1/3">
          <Image src={ambientesVirtuais} alt="" className="w-20 lg:w-48" />
          <h3 className="font-bold text-white text-sm lg:text-2xl lg:text-center mt-4">
            Ambientes Virtuais de Aprendizado
          </h3>
        </div>

        <div className="mt-16 flex flex-col items-center w-1/3">
          <Image
            src={sistemaGerenciamentoSolicitacoes}
            alt=""
            className="w-20 lg:w-48"
          />
          <h3 className="font-bold text-white text-sm lg:text-2xl lg:text-center mt-4">
            Sistema de Gerencimento de Solicitações
          </h3>
        </div>
      </div>

      <button className="mt-16 mb-10 bg-primary-1 hover:bg-primary-2 p-2 rounded-lg text-white font-bold">
        Conhecer os produtos
      </button>
    </section>
  );
}
