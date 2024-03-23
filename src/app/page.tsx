import Cabecalho from './components/_home-components/Cabecalho';
import Atalhos from './components/_home-components/Atalhos';
import Portifolio from './components/_home-components/Portifolio';
import Sobre from './components/_home-components/Sobre';
import Servicos from './components/_home-components/Servicos';
import Produtos from './components/_home-components/Produtos';

export default function Home() {
  return (
    <main
      className="
        bg-gradient-to-b
        from-primaryGradient
        via-secondaryGradient
        to-tertiaryGradient
        min-h-screen
        w-full
        flex
        justify-center
        flex-col
        items-center
        overflow-x-hidden
        "
    >
      <Cabecalho />
      <Atalhos />
      <Portifolio />
      <Sobre />
      <Servicos />
      <Produtos />

      <div className="mt-56"></div>
    </main>
  );
}
