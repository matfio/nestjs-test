import { Field, ID, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { CreateProductInput, Product } from 'src/product/product.model';

@Schema()
@ObjectType()
export class User {
    @Field(() => ID)
    _id: string;

    @Prop({ required: true })
    @Field()
    name: string;

    @Prop()
    @Field({ nullable: true })
    middleName?: string;

    @Prop({ required: true })
    @Field()
    surname: string;

    @Prop()
    @Field(() => Int)
    age: number;

    //Membership should probably be it's own object
    //So that every other field related to it can be logically connected
    @Prop({ default: false, required: true })
    @Field()
    membership: boolean;

    @Prop()
    @Field({ nullable: true })
    membershipExpiration?: Date;

    @Prop({ default: Date.now, required: true })
    @Field()
    creation: Date;

    @Prop({type: [{ type: mongoose.Schema.Types.ObjectId, ref: Product.name }] })
    @Field(() => [Product], { nullable: true })
    products?: Product[];
}

export type UserDocument = User & mongoose.Document;

export const UserSchema = SchemaFactory.createForClass(User);

//Keeping InputType and ObjectType separated is cleaner
//Other solution is to use the same but give them separate names
//see https://stackoverflow.com/questions/64607530/use-the-same-class-as-input-and-object-type-in-graphql-in-nestjs
@InputType()
export class CreateUserInput {
    @Field()
    name: string

    @Field({ nullable: true })
    middleName?: string;

    @Field()
    surname: string

    @Field(() => Int, { nullable: true })
    age?: number;

    @Field({ defaultValue: false })
    membership: boolean;

    @Field(() => [ID], { nullable: true })
    products?: string[];
}