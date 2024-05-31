import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Coins from "./Coins/Coins";
import { setCoins } from "../../redux/coinsSlice";
import { useGetUserCoinsQuery } from "../../redux/coinsApi";
import styles from "./Header.module.scss";

const Header = () => {
  const username = "Taia";
  const dispatch = useDispatch();
  const [initialLoad, setInitialLoad] = useState(false);

  const { data, error, isLoading } = useGetUserCoinsQuery(username, {
    skip: initialLoad,
  });

  useEffect(() => {
    if (data && !initialLoad) {
      dispatch(setCoins(data.coins));
      setInitialLoad(true);
    }
  }, [data, dispatch, initialLoad]);

  return (
    <div className={styles.header}>
      {isLoading ? <p>Loading...</p> : <Coins />}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default Header;
