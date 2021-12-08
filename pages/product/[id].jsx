import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductItem = () => {
  const [productList, setProductList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    window
      .fetch("../api/avos")
      .then(response => response.json())
      .then( ({ data, length }) => {
        setProductList(data)
      } )
  }, [])


  if(productList[0]){
    let included = productList.find(item => item.id == router.query.id);
    console.log(included)
  }

  return (
    <div>
      I am the product item: { router.query.id }
    </div>
  )
}

export default ProductItem;