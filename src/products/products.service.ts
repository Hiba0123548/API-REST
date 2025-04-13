import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateProductDto } from "./dtos/create-products.dto";
import { UpdateProductDto } from "./dtos/update-products.dto";

type ProductType ={id:number , title:string , price: number}

@Injectable ()
export class  ProductsService {
    private products: ProductType[] =[
        {id:1, title:'book' , price:10},
        {id:2, title:'pen' , price:5},
        {id:3, title:'laptop' , price:400},
    ];
      /**
       * create new product
       */
        public createProduct( {title,price}:CreateProductDto)  {// body decorator
        const newProduct:ProductType = {
            id: this.products.length + 1,
           title,
           price
        }
        this.products.push(newProduct);
        return newProduct;
        }

       /**
       * get all products
       */
    
        public getAll() {
            return this.products;
        }  
    
    /**
     * get  one product by id
     */
    
     public getOneBy( id: number) {
      
       const product = this.products.find(p=> p.id ===id);
       if(!product) throw new NotFoundException("Product not found");
           return product ;
     }
     /**
     * update product 
     */
     
       public update( id: number , updateProductDto:UpdateProductDto){ 
       const product=this.products.find(p=>p.id === id);
       if(!product) throw  new NotFoundException("product not found");
       console.log(updateProductDto)
       return { message :  'product update successflly with id '+ id};
    
     }
    
     /**
     * Delete
     */
     public delete( id: string) {
       const product = this.products.find(p=> p.id ===parseInt(id));
       if(!product) throw new NotFoundException("Product not found");
           return {message: "product deleted"} ;
     }
 }