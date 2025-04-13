import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";



//GET: /api/products  doit etre dans le controller c lui qui va faire handel tout ce qui est logique

@Module({
    controllers:[ProductsController],
    providers: [ProductsService]
})

export class ProductsModule {}