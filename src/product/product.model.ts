import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema()
@ObjectType()
export class Product {
    @Field(() => ID)
    id: string;

    @Prop({ required: true })
    @Field()
    title: string;

    @Prop()
    @Field({ nullable: true })
    description?: string;

    @Prop()
    @Field(() => Int)
    price: number;
}

export type ProductDocument = Product & mongoose.Document;

export const ProductSchema = SchemaFactory.createForClass(Product);

@InputType()
export class CreateProductInput {
    @Field(() => ID)
    id: string;
}