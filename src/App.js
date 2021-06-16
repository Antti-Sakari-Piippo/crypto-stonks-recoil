import { useEffect } from "react";
import axios from "axios";
import "./App.css";
import Coin from "./Coin";
import { atom, selector, useRecoilState } from "recoil";

const coinState = atom({
  key: "coinState",
  default: [],
});

const searchState = atom({
  key: "searchState",
  default: "",
});

function App() {
  const [coins, setCoins] = useRecoilState(coinState);
  const [search, setSearch] = useRecoilState(searchState);

  const handleChange = ({ target: { value } }) => {
    setSearch(value);
  };

  const FetchCoins = selector({
    key: "currentCoin",
    get: useEffect(() => {
      axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        )
        .then((res) => {
          setCoins(res.data);
          console.log(res.data);
        })
        .catch((error) => console.log(error));
    }, [setCoins]),
  });

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      {coins ? (
        <>
          <div className="coin-search">
            <h1 className="coin-text">Crypto Stonks</h1>
            <form>
              <input
                className="coin-input"
                type="text"
                onChange={handleChange}
                placeholder="Search"
              />
            </form>
          </div>
          <div className="flex-container">
            <div className="flex">
              <p>Coin</p>
              <p>Unit</p>
              <p>Price</p>
              <p>Volume</p>
              <p>Change 24h</p>
              <p>Market cap</p>
            </div>
            {filteredCoins.map((coin) => {
              return (
                <Coin
                  key={coin.id}
                  name={coin.name}
                  price={coin.current_price}
                  symbol={coin.symbol}
                  marketcap={coin.total_volume}
                  volume={coin.market_cap}
                  image={coin.image}
                  priceChange={coin.price_change_percentage_24h}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
