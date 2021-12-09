import React, { useEffect, useState } from "react";

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
        <h2>Hello World</h2>
      </div>

      <div>
        {productList.map(product => (
          <p key={product.id}>{ product.name }</p>
        ))}
      </div>
    </React.Fragment>
  )
} 

export default Home;