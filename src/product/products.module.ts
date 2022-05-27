// Modules
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
// Schemas
import { ProductSchema } from "./product.model";
// Controllers
import { ProductsController } from "./products.controller";
// Services
import { ProductsService } from "./products.service";

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Product', schema: ProductSchema}])
    ],
    controllers: [ProductsController],
    providers: [ProductsService]
})
export class ProductsModule {}