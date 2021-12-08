import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductItem = () => {
  const [productList, setProductList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    window
      .fetch("api/avos")
      .then(response => response.json())
      .then(console.log)
  }, [])

  return (
    <div>
      I am the product item: { router.query.id }
    </div>
  )
}

export default ProductItem;