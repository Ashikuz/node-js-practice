import type { IncomingMessage, ServerResponse } from "http";
import { productService } from "../service/product.service";


const productController = (req:IncomingMessage,res:
    ServerResponse)=>{


const url = req.url
const method = req.method
// console.log(url)
const urlParams = url?.split("/")
// console.log(urlParams);
const id = urlParams && urlParams[1] === "products"? Number(urlParams[2]): null;
// Get all product
if(url ==="/products" && method ==="GET"){

    const products = productService();

    res.writeHead(200,{"Content-type":"application/json"});
        res.end(JSON.stringify({message: "This retreived successfully",
            data:products

        }))
}


}

export default productController