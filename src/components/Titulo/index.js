import React from "react";
import styles from './Titulo.module.scss'

function Titulo({ titulo }) {
  return (
    <>
      <h1 className={styles.titulo}>{titulo}</h1>
      <hr className={styles.vertical}></hr>
    </>
  );
}

export default Titulo;
