import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UsersSchema } from './users.model';

@Module({
  imports:[MongooseModule.forFeature([{name: User.name, schema: UsersSchema}])],
  providers: [UsersService, UsersResolver]
})
export class UsersModule {}
