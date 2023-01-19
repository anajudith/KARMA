
import styles from './Texto.module.scss'
function Texto({textoA, textoB}) {
  return (
    <div className={styles.container}>
        <p className={styles.texto}>{textoA}</p>
        <p className={styles.texto}>{textoB}</p>
    </div>
  )
}

export default Texto