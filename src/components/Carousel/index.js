import Carousel from "react-bootstrap/Carousel";
import HeaderLink from "../../components/HeaderLink";
import ButtonStyle from "../Button";
import db from '../../json/db.js'
import styles from "./Carousel.module.scss";

function CarouselTeste() {
  return (
    <Carousel className={styles.carousel}>

      {db.map(item => {
        return <Carousel.Item>
        <img className={styles.img} src={item.src} alt={item.titulo} />
        <Carousel.Caption>
          <HeaderLink url="./Products" className="buttonLink">
            <ButtonStyle text="Nossos Produtos" className="buttonLink" />
          </HeaderLink>
        </Carousel.Caption>
      </Carousel.Item>
      })}    
    </Carousel>
  );
}

export default CarouselTeste;
