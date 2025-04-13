import { Module } from "@nestjs/common";
import { ReviewsController } from "./reviews.controllers";

@Module({
    controllers: [ReviewsController]
})
export class ReviewsModule {}