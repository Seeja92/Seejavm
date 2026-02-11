import { ProductsService } from "@/app/services/product-service";
import GoToProducts from "../../components/GotoProducts";
import React from "react";
import GotoProducts from "../../components/GotoProducts";

export default async function ProductDetail(props: any) {
  const { productID } = await props.params;

  if (productID) {
    var product = await ProductsService.getProductById(productID);
  }

  return (
    <div className="container">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>Description:{product.description}</p>
      <p>Price:${product.price}</p>
      <p>category:{product.category}</p>

      {<GotoProducts />}
    </div>
  );
}
