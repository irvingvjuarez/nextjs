import { useRouter } from "next/router";

const ProductItem = () => {
    const router = useRouter();

    return (
        <div>
            I am the product item: { router.query.id }
        </div>
    )
}

export default ProductItem;