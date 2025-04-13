import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { ReviewsModule } from './reviews/reviews.module';
import { UsersModule } from './users/users.module';
//component app pour tout les composent

@Module({
    imports: [ProductsModule,UsersModule,ReviewsModule],
})
export class AppModule {}
