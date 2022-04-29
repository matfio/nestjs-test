import { Module } from '@nestjs/common';
// Controllers
import { AppController } from './app.controller';
// Services
import { AppService } from './app.service';
// Modules
import { ProductsModule } from './product/products.module';

@Module({
  imports: [ProductsModule],
  controllers: [AppController],
  providers: [AppService], //Created by nestJS and injected as a service
})
export class AppModule {}
