import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput, User } from './users.model';
import { UsersService } from './users.service';


@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService
  ) {}

    @Query(() => [User])
    async users(): Promise<User[]> {
      return await this.usersService.findAll();
    }

    @Query(() => User)
    async user(@Args('id', { type: () => ID }) id: string): Promise<User> {
      return await this.usersService.findById(id);
    }

    @Mutation(() => User)
    async createUser(@Args('input') input: CreateUserInput): Promise<User> {
      return await this.usersService.createUser(input);
    }

    @Mutation(() => User)
    async deleteUserById(@Args('id', { type: () => ID }) id: string): Promise<User> {
      return await this.usersService.deleteUserById(id);
    }
}
