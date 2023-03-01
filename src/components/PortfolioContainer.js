import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolio, setPortfolio}) {

  const portfolioComps = portfolio.map(stock => <Stock stock={stock} key={stock.id} portfolio={portfolio} setPortfolio={setPortfolio}/>)

  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioComps}
    </div>
  );
}

export default PortfolioContainer;
