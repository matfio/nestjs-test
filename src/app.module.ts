import { Module } from '@nestjs/common';
// Controllers
import { AppController } from './app.controller';
// Services
import { AppService } from './app.service';
// Modules
import { ProductsModule } from './product/products.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[
    ConfigModule.forRoot(),
    ProductsModule, 
    MongooseModule.forRoot(`mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@cluster0.p2ktw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
  ],
  controllers: [AppController],
  providers: [AppService], //Created by nestJS and injected as a service
})
export class AppModule {}
