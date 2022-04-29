import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
// Models
import { Model } from "mongoose";
import { Product } from "./product.model";

@Injectable()
export class ProductsService {
    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {}

    private transformProduct(p){
        return {
            id: p.id, 
            title: p.title, 
            description: p.description, 
            price: p.price 
        }
    }

    private async getProduct(id: string): Promise<Product> {
        let product;
        try{
            product = await this.productModel.findById(id).exec();
        }catch(err) {
            throw new NotFoundException('Could not find product');
        }
        
        if(!product){
            throw new NotFoundException('Could not find product'); //nestJS sends a 404 automagically
        }

        return product;
    }

    async insertProduct(title: string, description: string, price: number): Promise<string> {
        const newProduct = new this.productModel({title, description, price})
        const result = await newProduct.save(); // Could specify :string in function, but Typescript can infer that automagically
        return result.id;
    }

    async getProducts() {
        const products = await this.productModel.find().exec();
        return products.map(p => this.transformProduct(p));
    }

    async getProductById(id: string) {
        const product = this.getProduct(id);
        return this.transformProduct(product);
    }

    async updateProductById(id: string, title: string, description: string, price: number){
        const updatedProduct = await this.getProduct(id);
        if(title){
            updatedProduct.title = title;
        }
        if(description){
            updatedProduct.description = description;
        }
        if(price){
            updatedProduct.price = price;
        }

        updatedProduct.save();
        return null;
    }

    async deleteProductById(id: string){
        const product = await this.getProduct(id);
        product.delete();
        return null
    }
}