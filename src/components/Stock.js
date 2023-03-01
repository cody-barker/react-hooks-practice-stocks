import React from "react";

function Stock({stock, portfolio, setPortfolio}) {

  function handleStock() {
    let portStock = portfolio.find(item => item === stock)
    console.log(portStock)
    if (portStock) {
      console.log("true")
      const newList = portfolio.filter(item => item.id !== stock.id)
      console.log(newList)
      setPortfolio(newList)

    } else {
      console.log("else")
      console.log(portfolio)
      const newList = [...portfolio, stock]
      console.log(newList)
      setPortfolio(newList)
    }
  }

  //console.log(`Portfolio: ${portfolio}`)

  return (
    <div onClick={handleStock}>
      <div  className="card">
        <div  className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;


//add an on click event listener
//the cb adds the target to the portfolio container

//create a portfolio state
//onClick, create a new array which spreads the portfolio and adds a new one
//after that, set state on the new array
//in the portfolio, map over state to create stock comps