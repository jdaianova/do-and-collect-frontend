import styles from './Footer.module.scss';
import footerCoinsChest from '../../shared/assets/images/footer-coins-chest.png';

function Footer() {
  return (
    <div className={styles.footer}>
      <img src={footerCoinsChest} alt='chest with coins'></img>
      &copy; {new Date().getFullYear()} JDLab. Все права защищены.
    </div>
  )
}

export default Footer