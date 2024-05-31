import { useState, useEffect } from 'react';
import FlipNumbers from 'react-flip-numbers';
import styles from './FlipNumberComponent.module.scss';

const FlipNumberComponent = ({ start, end }) => {
  const [number, setNumber] = useState(start);

  useEffect(() => {
    setNumber(end);
  }, [end]);

  return (
    <div className={styles.flipNumberContainer}>
      <FlipNumbers
        height={60}
        width={60}
        play
        perspective={20000}
        numbers={number.toString()}
      />
    </div>
  );
};

export default FlipNumberComponent;
