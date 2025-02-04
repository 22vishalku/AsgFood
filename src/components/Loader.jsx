import { useEffect } from 'react';
import styles from './Loader.module.css';

function Loader() {
  useEffect(() => {
    // Use setTimeout to delay the fade-out effect
    const timer = setTimeout(() => {
      document
        .querySelector(`.${styles.loader}`)
        .classList.add(styles['fade-out']);
    }, 4000);

    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.loader}>
      <img src='src\components\loader.gif' alt='loader' /> 
    </div>
  );
}

export default Loader;
