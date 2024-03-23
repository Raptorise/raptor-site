import Container from '../_ui/Container';

export default function Cabecalho() {
  return (
    <header>
      <Container>
        
        <button
          className="ml-12 mb-10 bg-primary-1 hover:bg-primary-2 p-2 rounded-lg text-white"
          style={{ marginTop: -70 }}
        >
          Entre em contato
        </button>
      </Container>
    </header>
  );
}
