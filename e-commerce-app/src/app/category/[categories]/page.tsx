import React from "react";
import { ProductsService } from "@/app/services/product-service";
import GotoProducts from "../../components/GotoProducts";
import GotoCartButton from "@/app/components/GotoCartButton";

export default async function DynamicSearch(props: any) {
  console.log("dynamic search:", props);
  const { categories } = await props.params;
  console.log("category is:", categories);
  if (categories) {
    var product = await ProductsService.getProductBySearchText(categories);
    console.log("called categoris product:", product);

    const filteredProducts = product.filter((prods: any) => {
      return prods.title.toLowerCase().includes(categories);
      console.log("filtered");
    });
    return (
      <>
        {filteredProducts.map((p: any) => {
          return (
            <div className="container">
              <img src={p.image} alt={p.title} width={150} height={150} />
              <h2>{p.title}</h2>
              <p>Description:{p.description}</p>
              <p>Price:${p.price}</p>
              <p>category:{p.category}</p>
              <div>
                {" "}
                <span>
                  {" "}
                  <GotoCartButton />
                </span>
              </div>
              <div>
                <span>
                  <GotoProducts />
                </span>
              </div>
            </div>
          );
        })}

        {/* {
      <GotoCartButton/>
    }
    {
        <GotoProducts/>
    }
     */}
      </>
    );
  }
}

// import GoToProducts from '../../components/GotoProducts'
// import React from 'react'
// import GotoProducts from '../../components/GotoProducts';

// export default async function ProductDetail(props:any) {
//     console.log("props value is:",props)
//   const {productID}= await props.params;

// console.log("productid is:",productID);
// if(productID){

//    var product=await ProductsService.getProductById(productID);
//    console.log("called function:",product);
// }
// // const router=useRouter();

//   return (
//     <div className="container">

//       <img src={product.image} alt={product.title} />
//             <h2>{product.title}</h2>
//             <p>Description:{product.description}</p>
//             <p>Price:${product.price}</p>
//             <p>category:{product.category}</p>

//       {
//       <GotoProducts/>
//     }
//     </div>

//   )
// }
