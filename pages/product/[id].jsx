import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductItem = () => {

  const [productList, setProductList] = useState([]);
  const router = useRouter();
  let included;

  useEffect(() => {
    window
      .fetch("../api/avos")
      .then(response => response.json())
      .then( ({ data, length }) => {
        setProductList(data)
      } )
  }, [])


  if(productList[0]){
    included = productList.find(item => item.id == router.query.id);
  }

  return(
    included ?
    <div>
      <p>I am the avocado {included.name}</p>
      <p>With the id {included.id}</p>
    </div>
    :
    <div>404 | No Found</div>
  )

}

export default ProductItem;