import React, {useEffect, useState} from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {

  const [stockList, setStockList] = useState([])
  const [portfolio, setPortfolio] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(r => r.json())
    .then(list => setStockList(list))
  }, [])

  return (
    <div>
      <Header />
      <MainContainer stockList={stockList} setStockList={setStockList} portfolio={portfolio} setPortfolio={setPortfolio}/>
    </div>
  );
}

export default App;

/**
 * App
 *  Header
 *  MainContainer
 *    SearchBar
 *    StockContainer
 *      Stock
 *    PortfolioContainer
 */
