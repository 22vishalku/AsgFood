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
      {/* Use the preferred image source here */}
      <img 
        src="https://i.pinimg.com/originals/f9/98/0f/f9980fdb73ff0acc69d70a8997acb5fa.gif" 
        alt="loading animation"
      />
    </div>
  );
}

export default Loader;
