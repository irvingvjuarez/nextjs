import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";

const Home = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    window
      .fetch("api/avos")
      .then((response) => response.json())
      .then( ({ data, length }) => {
        setProductList(data)
      } )
  }, [])

  return(
    <React.Fragment>
      <div>
        <Navbar />
        <h2>Hello World</h2>
      </div>

      <div>
        {productList.map(product => (
          <p>{ product.name }</p>
        ))}
      </div>
    </React.Fragment>
  )
} 

export default Home;