import { Controller,
     Get,
     Post,
     Body,
     Param ,
     NotFoundException,
      Put,
       Delete,
     ParseIntPipe } from "@nestjs/common" //pipe for transformation and validation
type ProductType ={id:number , title:string , price: number}
import { CreateProductDto } from "./dtos/create-products.dto";
import { UpdateProductDto } from "./dtos/update-products.dto";

@Controller ("api/products") //class decorator
export class  ProductsController {
    private products: ProductType[] =[
        {id:1, title:'book' , price:10},
        {id:2, title:'pen' , price:5},
        {id:3, title:'laptop' , price:400},
    ];
   
//POST :~/api/products
    @Post() //method decorator
    public createNewProduct(@Body () body:CreateProductDto)  {// body decorator
    const newProduct:ProductType = {
        id: this.products.length + 1,
        title:body.title,
        price: body.price
    }
    this.products.push(newProduct);
    return newProduct;
    }

//GET:~/api/products
    @Get()
    public getAllProducts() {
        return this.products;
    }  

 //GET:~/api/products/:id
 @Get(':id')
 public getSingleProduct(@Param("id", ParseIntPipe) id: number) {
  
   const product = this.products.find(p=> p.id ===id);
   if(!product) throw new NotFoundException("Product not found");
       return product ;
 }
 //PUT:~/api/products/:id
 @Put(":id")
   public updateProduct(@Param('id',ParseIntPipe) id: number , @Body() body:UpdateProductDto){ 
   const product=this.products.find(p=>p.id === id);
   if(!product) throw  new NotFoundException("product not found");
   console.log(body)
   return { message :  'product update successflly with id '+ id};

 }

 @Delete(':id')
 public deleteProduct(@Param("id") id: string) {
   const product = this.products.find(p=> p.id ===parseInt(id));
   if(!product) throw new NotFoundException("Product not found");
       return {message: "product deleted"} ;
 }

}