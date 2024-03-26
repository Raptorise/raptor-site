import Image from 'next/image';
import logoDinoRaptor from 'public/dino_sf.png';
import logoRaptorDark from 'public/logo-raptor-dark.png';

export const Cabecalho = () => {
  return (
    <header>
      <section id="cabecalho" className="mt-32 flex justify-center">
        <div className="bg-white w-5/6 rounded-lg">
          <div className="flex p-8 flex-col items-center lg:flex-row">
            <div className="w-4/6 flex flex-col">
              <Image
                src={logoDinoRaptor}
                alt="Imagem de um orbe da cor verde feito com diversas retas interligadas."
              />
              <Image
                src={logoRaptorDark}
                alt="Imagem de um orbe da cor verde feito com diversas retas interligadas."
                style={{ marginTop: -40 }}
              />
            </div>
            <div className="w-full flex flex-col items-center" style={{ marginTop: -20 }}>
              <h1 className="font-bold mb-4 text-lg text-center">Onde a velocidade encontra a inteligência</h1>
              <button className='bg-primary-1 hover:bg-primary-2 p-2 rounded-lg font-bold text-white mt-8'>Contato</button>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
