import Carousel from "react-bootstrap/Carousel";
import HeaderLink from "../../components/HeaderLink";
import ButtonStyle from "../Button";
import banner1 from "./banner1.jpg";
import banner2 from "./banner2.jpg";
import KARMA1 from "./KARMA1.png";
import KARMA from "./KARMA.png";
import BannerKarma3 from "./BannerKarma3.png";
import styles from "./Carousel.module.scss";

function CarouselTeste() {
  return (
    <Carousel className={styles.carousel}>
      <Carousel.Item>
        <img className={styles.img} src={KARMA1} alt="First slide" />
        <Carousel.Caption>
          <HeaderLink url="./Products" className="buttonLink">
            <ButtonStyle text="Nossos Produtos" className="buttonLink" />
          </HeaderLink>
          {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className={styles.img} src={KARMA} alt="Second slide" />
        <Carousel.Caption>
          <HeaderLink url="./Products" className="buttonLink">
            <ButtonStyle text="Nossos Produtos" />
          </HeaderLink>
          {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className={styles.img} src={BannerKarma3} alt="Third slide" />

        <Carousel.Caption>
          <HeaderLink url="./Products" className="buttonLink">
            <ButtonStyle text="Nossos Produtos" />
          </HeaderLink>
          {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselTeste;
