import { Injectable, NotFoundException } from "@nestjs/common";
// Models
import { Product } from "./product.model";

@Injectable()
export class ProductsService {
    private readonly products: Product[] = [];
    private index: number = 0;

    private getProduct(id: string): Product {
        const product = this.products.find(prod => prod.id === id);
        if(!product){
            throw new NotFoundException('Could not find product'); //nestJS sends a 404 automagically
        }

        return product;
    }

    insertProduct(title: string, description: string, price: number) {
        const id = (this.index++).toString();
        const newProduct = new Product(id, title, description, price )
        this.products.push(newProduct);
        return id; // Could specify :string in function, but Typescript can infer that automagically
    }

    getProducts() {
        // return this.products; It works, but this basically creates a getter that open access to the array from outside
    
        // return [...this.products]; // Safer. Products are also passed by reference and can still be modified from outside

        return [...this.products.map(product => ({...product}))]; //Safest. Returns a copy of the array AND a copy of all products. Normally an overkill :) 
    }

    getProductById(id: string) {
        const product = this.getProduct(id);

        return {...product};
    }

    updateProductById(id:string, title: string, description: string, price: number){
        const product = this.getProduct(id);
        if(title){ product.title = title; }
        if(description){ product.description = description; }
        if(price){ product.price = price; }
    }
}