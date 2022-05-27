import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './users.model';
import { Product, ProductSchema } from 'src/product/product.model';

@Module({
  imports:[MongooseModule.forFeature([
    {name: User.name, schema: UserSchema}, 
    {name: Product.name, schema: ProductSchema}
  ])],
  providers: [UsersService, UsersResolver]
})
export class UsersModule {}
