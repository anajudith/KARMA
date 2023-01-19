import React from "react";
import CarouselTeste from "../../components/Carousel";
import MultiCarousel from "../../components/MultiCarousel";
import styles from "./Home.module.scss";
import Container from "../../components/Container";
import Banner from "../../components/Banner";
import img from "../../json/imagens/banner1.jpg";
import Titulo from "../../components/Titulo";
import Texto from "../../components/Titulo/Texto";
import ButtonStyle from "../../components/Button";
import HeaderLink from "../../components/HeaderLink";

function Home() {
  return (
    <>
      <div className={styles.teste}>
        <CarouselTeste />

        <Container className={styles.container}>
          <Titulo titulo="Conheça nossa linha de produtos" />
          <hr className={styles.vertical}></hr>
          <p>Vistoria, etc etc etc?</p>
          <p>Temos a solução perfeita para o seu veículo!</p>
        </Container>
        <MultiCarousel />
        <Banner
          img={img}
          className={styles.banner}
          // titulo = 'Orçamento fácil'
        />
        <Container>
          <Titulo titulo="Nossa história" />
          <Texto
            textoA="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            textoB="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum The Extremes of Good and Evil by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
          />
          <div className={styles.teste1}>
          <HeaderLink url="./About" >
            <ButtonStyle text="Saiba mais" />
          </HeaderLink>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Home;
