import { Module } from "@nestjs/common";
// Controllers
import { ProductsController } from "./products.controller";
// Services
import { ProductsService } from "./products.service";

@Module({
    controllers: [ProductsController],
    providers: [ProductsService]
})
export class ProductsModule {}