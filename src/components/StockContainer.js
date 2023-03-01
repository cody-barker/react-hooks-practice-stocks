import React from "react";
import Stock from "./Stock";

function StockContainer({stockList, portfolio, setPortfolio}) {

  const stockComps = stockList.map(stock => <Stock stock={stock} key={stock.id} portfolio={portfolio} setPortfolio={setPortfolio}/>)

  return (
    <div>
      <h2>Stocks</h2>
      {stockComps}
    </div>
  );
}

export default StockContainer;
