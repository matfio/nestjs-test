import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { title } from "process";
// Models
import { Product } from "./product.model";
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

    @Get()
    getProducts(): Product[] {
        return this.productsService.getProducts();
    }

    @Get(':id')
    getProductById(@Param('id') id: string): Product {
        return this.productsService.getProductById(id);
    }

    @Patch(':id')
    updateProduct(
        @Param('id') id: string,
        @Body() body: {
            title: string;
            description: string;
            price: number;
        }
    ) : any {
        const {title, description, price} = body;
        this.productsService.updateProductById(id, title, description, price);
    }
}