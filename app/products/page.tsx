import ProductList from "./ProductList";
import { Suspense } from "react";

export default function ProductPage() {

    return (
        <div className="page">
            <h1>Hi there Products page</h1>
            <Suspense fallback={<p>Products Loading</p>}>

            <ProductList />
            </Suspense>
        </div>
    )
}