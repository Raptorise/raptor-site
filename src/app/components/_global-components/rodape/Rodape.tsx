import Image from 'next/image';
import logoRaptor from '@/assets/logo-raptor.png';
import qrCode from '@/assets/qr-code.png';
import { FiMail } from 'react-icons/fi';
import {
  FaWhatsapp,
  FaInstagram,
  FaGithub,
  FaAngleDoubleRight,
} from 'react-icons/fa';
import Animacao from './animacao';

export default function Rodape() {
  return (
    <footer className="bg-black p-10 w-full items-center lg:justify-center lg:p-20 lg:flex">
      <div className="flex flex-col -mt-10 lg:w-1/3">
        <Image
          src={logoRaptor}
          alt="Logo escrita da Raptor. Letras desenhadas em branco, com fundo preto."
          width={150}
          className="mt-10 self-center lg:self-start"
        />
        <p className="text-primary-1 w-2/3 font-bold mt-10 hidden lg:block">
          © {new Date().getFullYear()} | Raptor - Todos os direitos reservados
        </p>
      </div>

      <div className="flex text-sm items-center lg:text-base lg:w-full">
        <div className="flex flex-col items-center lg:items-center mt-10 lg:mt-0 lg:w-1/3">
          <div>
            <h3 className="text-primary-1 font-bold text-lg">Atalhos</h3>
            <div className="flex">
              <ul className="list-none mt-4 mr-10">
                <li className="text-primary-1 flex items-center">
                  <FaAngleDoubleRight className="mr-2" /> FAQ
                </li>
                <li className="text-primary-1 flex items-center">
                  <FaAngleDoubleRight className="mr-2" /> Serviços
                </li>
                <li className="text-primary-1 flex items-center">
                  <FaAngleDoubleRight className="mr-2" /> Produtos
                </li>
                <li className="text-primary-1 flex items-center">
                  <FaAngleDoubleRight className="mr-2" /> A Raptor
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-10 lg:mt-0 lg:w-1/3 lg:items-center">
          <div>
            <h3 className="text-primary-1 font-bold text-lg">Contato</h3>
            <div className="flex">
              <ul className="list-none mt-4 mr-10">
                <li className="text-primary-1 flex items-center">
                  <FiMail className="mr-2" /> info@raptorise.com.br
                </li>
                <li className="text-primary-1 flex items-center">
                  <FaWhatsapp className="mr-2" /> (21)9 6685-6832
                </li>
                <li className="text-primary-1 flex items-center">
                  <FaInstagram className="mr-2" /> @raptor_rise
                </li>
                <li className="text-primary-1 flex items-center">
                  <FaGithub className="mr-2" /> raptorise
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 items-center hidden sm:flex lg:w-1/3 lg:items-end lg:mt-0 lg:justify-end">
          <Image
            src={qrCode}
            alt="QR Code redirecionando para o WhatsApp da Raptor. Link: https://wa.me/5521966856832"
            className="w-1/3 self-start lg:w-2/4"
          />
          <span className="lg:hidden">
            <Animacao />
          </span>
        </div>
      </div>

      <p className="text-primary-1 text-xs text-start font-bold mt-10 lg:hidden">
        © {new Date().getFullYear()} | Raptor - Todos os direitos reservados
      </p>

      <div className="flex mt-10 items-center justify-between sm:hidden lg:w-1/3 lg:items-end lg:mt-0">
        <Image
          src={qrCode}
          alt="QR Code redirecionando para o WhatsApp da Raptor. Link: https://wa.me/5521966856832"
          className="w-1/3 lg:w-2/4"
        />
        <Animacao />
      </div>
    </footer>
  );
}
