import Card from "../../components/Card";
import Container from "../../components/Container";
import Titulo from "../../components/Titulo";
import imagem from "../../json/imagens/banner3.png";
import styles from "./About.module.scss";

function About() {
  return (
    <>
      <section className={styles.container}>
        <img src={imagem} alt="Engenharia, soluções e inspeção " />
      </section>
      <Container>
        <Titulo titulo="A SUA INSPEÇÃO COM SEGURANÇA" />

          <span className={styles.texto}>
            A Karma foi fundada por profissionais com mais de 20 anos
            de experiência no segmento de ferro e aço e segue rígidos padrões de
            qualidade, sempre atenta às necessidades do mercado.
            <br />
            Com excelente “know how” e atuante desde 2014, a empresa começou
            seus trabalhos com apenas cinco funcionários, alocados em um único
            galpão. À época, realizava entregas unicamente em Belo Horizonte e
            Região Metropolitana. A Telhas Barreiro fabrica telhas galvanizadas,
            telhas galvalume, telhas termoacústicas (sanduíche e
            semi-sanduíche), telhas modelo forro, além de painel forro. A
            empresa também trabalha com a revenda de perfis enrijecidos e
            simples em aço e metalon para estruturas metálicas, parafusos,
            discos de corte, cumeeiras, eletrodos, veda calhas e zarcão.
            <br />
            A Karma entrega a solução necessária para você, aliando economia, atendimento surpreendente e um ótimo
            pós-vendas.
          </span>
          <Card />
      </Container>



    </>
  );
}

export default About;
