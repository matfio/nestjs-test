import { Injectable } from "@nestjs/common";
// Models
import { Product } from "./product.model";

@Injectable()
export class ProductsService {
    products: Product[] = [];

    insertProduct(title: string, description: string, price: number) {
        const id = new Date().toString();
        const newProduct = new Product(id, title, description, price )
        this.products.push(newProduct);
        return id; // Could specify :string in function, but Typescript can infer that automagically
    }
}