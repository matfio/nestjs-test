//GraphQL
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
// Controllers
import { AppController } from './app.controller';
// Services
import { AppService } from './app.service';
// Modules
import { Module } from '@nestjs/common';
import { ProductsModule } from './product/products.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';



@Module({
  imports:[
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    ProductsModule, 
    UsersModule,
    MongooseModule.forRoot(`mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@cluster0.p2ktw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`), UsersModule
  ],
  controllers: [AppController],
  providers: [AppService], //Created by nestJS and injected as a service
})
export class AppModule {}
