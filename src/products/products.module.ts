import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";



//GET: /api/products  doit etre dans le controller c lui qui va faire handel tout ce qui est logique

@Module({
    controllers:[ProductsController]
})

export class ProductsModule {}