import { Controller,
     Get,
     Post,
     Body,
     Param ,
      Put,
       Delete,
     ParseIntPipe } from "@nestjs/common" ;
import { CreateProductDto } from "./dtos/create-products.dto";
import { UpdateProductDto } from "./dtos/update-products.dto";
import { ProductsService } from "./products.service";


@Controller ("api/products") 
export class  ProductsController {
  constructor(private readonly productsService:ProductsService) {}
   
//POST :~/api/products
    @Post() 
    public createNewProduct(@Body () body:CreateProductDto)  {
      return this.productsService.createProduct(body);
    }

//GET:~/api/products
    @Get()
    public getAllProducts() {
     return this.productsService.getAll();
    }  

 //GET:~/api/products/:id
 @Get(':id')
 public getSingleProduct(@Param("id", ParseIntPipe) id: number) {
  return this.productsService.getOneBy(id);
 }
 //PUT:~/api/products/:id
 @Put(":id")
   public updateProduct(@Param('id',ParseIntPipe) id: number ,@Body() body:UpdateProductDto){ 
  return this.productsService.update(id,body);
 }

 @Delete(':id')
 public deleteProduct(@Param("id") id: string) {
   
return this.productsService.delete(id);
} }