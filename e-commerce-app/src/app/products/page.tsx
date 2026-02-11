import React from "react";
// import ProductCard from "../components/product-card/ProductCard";
import { ProductsService } from "../services/product-service";
// import GotoCartButton from "../components/GotoCartButton";
import Link from "next/link";
import ProductList from "../components/ProductList/ProductList";
import { Suspense } from "react";

export default async function Products() {
  return (
    <div>
      <div>
        <Suspense fallback={<span style={{ color: "green" }}>Loading</span>}>
          <ProductList />
        </Suspense>
      </div>
    </div>
  );
}
