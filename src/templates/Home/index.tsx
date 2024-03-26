import {
  Atalhos,
  Cabecalho,
  Portifolio,
  Produtos,
  Servicos,
  Sobre,
} from '@/components/home-components';

export const Home = () => {
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
};
