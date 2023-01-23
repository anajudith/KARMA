import CardGroup from "react-bootstrap/CardGroup";
import Container from "../Container";
import atom from "./atom.png";
import alvo from "./alvo.png";
import foguete from "./foguete.png";
import styles from "./Card.module.scss";

import Card from "react-bootstrap/Card";

function TextExample() {
  return (
    <>
      <div className={styles.container}>
        <Card className={styles.card}>
          <Card.Body className={styles.box}>
            <div className={styles.img}>
              <img src={atom} alt="teste" />
            </div>
            <Card.Title>Valores</Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle> */}
            <Card.Text className={styles.textList}>
              <li>Comprometimento</li>
              <li>Respeito</li>
              <li>Presteza</li>
              <li>Objetividade</li>
              <li>Transparência</li>
              <li>Honestidade</li>
              <li>Generosidade</li>
              <li>Flexibilidade</li>
              <li> Ordem e Prudência.</li>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className={styles.card}>
          <Card.Body>
            <div className={styles.img}>
              <img src={alvo} alt="teste" />
            </div>
            <Card.Title>Missão</Card.Title>
            <Card.Text>
              Atender a todos através de serviços de qualidade, visando ser
              referência em vistorias e inspeções no Brasil.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className={styles.card}>
          <Card.Body>
            <div className={styles.img}>
              <img src={foguete} alt="teste" />
            </div>
            <Card.Title>Visão</Card.Title>
            <Card.Text>
              Expandir como uma empresa que prioriza o crescimento individual e
              coletivo, sendo modelo na sociedade. Sendo comprometida com a
              comunidade, com os clientes e todos os nossos colaboradores.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default TextExample;
