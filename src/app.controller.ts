import { Controller, Get } from '@nestjs/common';
// Services
import { AppService } from './app.service';

//Reached by all requests on domain
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //Executed on all Get requests to specific root domain
  @Get()
  //@Header('Content-Type', 'text/html') overrides the inferred headers
  getHello(): string {
    return this.appService.getHello(); //nestJS infers the response Header content-type automatically
  } 

}
