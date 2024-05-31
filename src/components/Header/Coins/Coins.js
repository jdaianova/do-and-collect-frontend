import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./Coins.module.scss";
import leftBgImg from "../../../shared/assets/images/coins-bg-left.png";
import rightBgImg from "../../../shared/assets/images/coins-bg-right.png";
import ResponsiveImageContainer from "../../../shared/ResponsiveImageContainer/ResponsiveImageContainer";
import FlipNumberComponent from "../FlipNumberComponent/FlipNumberComponent";
import { useUpdateUserCoinsMutation } from "../../../redux/coinsApi";

const Coins = () => {
  const [prevCoins, setPrevCoins] = useState(0);
  const coins = useSelector((state) => state.coins.coins);
  const [updateUserCoins] = useUpdateUserCoinsMutation();

  useEffect(() => {
    setPrevCoins(coins);

    if (coins !== prevCoins) {
      updateUserCoins(coins)
        .unwrap()
        .catch((error) => {
          // console.error('Failed to update coins:', error);
        });
    }
  }, [coins, prevCoins, updateUserCoins]);

  return (
    <div className={styles.coins}>
      <ResponsiveImageContainer imageSrc={leftBgImg} altText="chest of gold" />
      <div className={styles.coinsValue}>
        <h3>МОИ МОНЕТКИ</h3>
        <FlipNumberComponent start={prevCoins} end={coins} />
      </div>
      <ResponsiveImageContainer imageSrc={rightBgImg} altText="chest of gold" />
    </div>
  );
};

export default Coins;
