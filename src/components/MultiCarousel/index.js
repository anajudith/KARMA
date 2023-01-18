import styles from "./MultiCarousel.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Container from "../Container";
// import banner2 from "./banner2.jpg"
// import banner1 from "./banner1.jpg"

import dbMultiCarousel from "../../json/dbMultiCarousel";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    paritialVisibilityGutter: 400,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    paritialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 40,
  },
};

// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const Simple = ({ deviceType }) => {
  return (
    <Container>
      <Carousel
        className={styles.carousel}
        partialVisbile
        deviceType={deviceType}
        itemClass="image-item"
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        showDots={true}
      >
        {dbMultiCarousel.map((item) => {
          return (
            <div style={{ width: 300, height: 300 }}>
              <img src={item.src} alt={item.titulo}></img>
              <p>Teste</p>
            </div>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default Simple;
