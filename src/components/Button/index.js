// import Button from 'react-bootstrap/Button';
import styles from './Button.module.scss';

function ButtonStyle({text}) {
  return (
    <>
      <button className={styles.button}>{text}</button>{' '}
    </>
  );
}

export default ButtonStyle;