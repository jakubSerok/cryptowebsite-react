import React, { useState } from "react";
import CoinItem from "./CoinItem";

const CoinSearch = ({ coins }) => {
  const [searchText, setSearchText] = useState("");
  console.log(coins);
  return (
    <div className="my-4 rounded-div">
      <div className="flex flex-col justify-between pt-4 pb-6 text-center md:flex-row md:text-right">
        <h1 className="my-2 text-2xl font-bold">Search Crypto</h1>
        <form>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full px-4 py-2 border shadow-xl bg-primary border-input rounded-2xl"
            type="text"
            placeholder="Search a coin"
          />
        </form>
      </div>

      <table className="w-full text-center border-collapse">
        <thead>
          <tr className="border-b">
            <th></th>
            <th className="px-4">#</th>
            <th className="text-left">Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th className="hidden md:table-cell">24h Volume</th>
            <th className="hidden sm:table-cell">Mkt</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {coins
            .filter((value) => {
              if (searchText === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return value;
              }
            })
            .map((coin) => (
              <CoinItem key={coin.id} coin={coin} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinSearch;
