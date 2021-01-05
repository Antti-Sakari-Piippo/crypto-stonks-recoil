import React from "react";
import "./Coin.css";

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <p>{name}</p>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">{price}€</p>
          <p className="coin-volume">{volume.toLocaleString()}€</p>

          {priceChange < 0 ? (
            <p className="coin-percent red">
              {priceChange !== null ? priceChange.toFixed(2) : "no price"}%
            </p>
          ) : (
            <p className="coin-percent green">
              {priceChange !== null ? priceChange.toFixed(2) : "no price"}%
            </p>
          )}

          <p className="coin-marketcap">{marketcap.toLocaleString()}€</p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
