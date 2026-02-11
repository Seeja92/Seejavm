import { ServiceBase } from "./service-base";

export class ProductsService extends ServiceBase{
    static  getProducts=async ()=>{
        var productResponse= await fetch('https://fakestoreapi.com/products');
  var products= await productResponse.json();
  return products;
  
    }

    static  getProductById=async (id:number)=>{
        var productResp= await fetch('https://fakestoreapi.com/products/'+id);
  var product=productResp.json();
  return product;
    }

    static getProductBySearchText=async (text:string)=>{
        var productRespText=await fetch('https://fakestoreapi.com/products?search='+text);
        var productdet=productRespText.json();
        return productdet;
        console.log("productdetail:",productdet)
    }

}