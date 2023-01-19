import styles from "./MultiCarousel.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Container from "../Container";

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
    <Container className={styles.container}>
      <Carousel
        infinite={true}
        className={styles.carousel}
        partialVisbile
        deviceType={deviceType}
        itemClass="carousel-item-padding-40-px"
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        showDots={true}
      >
        {dbMultiCarousel.map((item) => {
          return (
            <div style={{ width: 300, height: 300 }}>
              <img src={item.src} alt={item.titulo}></img>
              <p>{item.titulo}</p>
            </div>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default Simple;
