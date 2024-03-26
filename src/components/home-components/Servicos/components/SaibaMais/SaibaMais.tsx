import { SaibaMaisAnimation } from '@/utils/SaibaMaisAnimation';

export const SaibaMais = ({ href }: { href: string }) => {
    return (
      <>
        <a href={href} className="text-primary-1 text-xs mt-2">
          <p> Saiba mais</p>
        </a>
        <SaibaMaisAnimation />
      </>
    );
  }
  