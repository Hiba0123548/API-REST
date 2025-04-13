import { Controller, Get } from '@nestjs/common';

@Controller()
export class ReviewsController {
   @Get('/api/reviews') 
   public gestAllReviews(){
    return [
        {id: 1, rating: 4, comment:'good'},
        {id: 2, rating: 5, comment:'very good'},
    
    ]
   }
}