import { Body, Controller, Post } from "@nestjs/common";
// Services
import { ProductsService } from "./products.service";

@Controller('products') //Filters on /products
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Post()
    addProduct(
        @Body('title') title: string, // nestJS can read the body through decorators
        @Body('description') description: string,
        @Body('price') price: number
    ): any {
        const id = this.productsService.insertProduct(title, description, price);
        return { id }; //Typically API should return JSON
    }
}