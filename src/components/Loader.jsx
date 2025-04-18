import { useEffect } from 'react';
import styles from './Loader.module.css';

function Loader() {
  useEffect(() => {
    // Use setTimeout to delay the fade-out effect
    const timer = setTimeout(() => {
      document
        .querySelector(`.${styles.loader}`)
        .classList.add(styles['fade-out']);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  return (
<div className={styles.loader}>
  <img src='https://i.pinimg.com/originals/f9/98/0f/f9980fdb73ff0acc69d70a8997acb5fa.gif' alt='loader' />
  <img src='https://i.pinimg.com/originals/3f/ef/41/3fef41cdcef58e33f81f60c2b7a791e1.gif' alt='loader' />
</div>

  );
}

export default Loader;
