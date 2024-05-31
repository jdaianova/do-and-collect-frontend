import styles from './ResponsiveImageContainer.module.scss';

const ResponsiveImageContainer = ({ imageSrc, altText }) => {
  return (
    <div className={styles.responsiveContainer}>
      <img src={imageSrc} alt={altText} className={styles.responsiveImage} />
    </div>
  );
};

export default ResponsiveImageContainer;
