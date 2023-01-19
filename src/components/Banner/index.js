import styles from './Banner.module.scss';
import Button from '../../components/Button'
import HeaderLink from '../HeaderLink';
import Container from '../Container';

function Banner({ titulo, texto,  img }) {
  return (
    <>
      <section className={styles.container}>
        <img src={img} alt='teste'></img>
       <h1>{titulo}</h1>
        <hr />
        <p>{texto}</p>
        <HeaderLink url="./Budget" className="buttonLink">
          {/* <Button text="Quero fazer meu orçamento agora!" className="buttonLink" /> */}
        </HeaderLink>
      </section>
    </>
  );
}

export default Banner;
