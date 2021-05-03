import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// AppController is implemented
@Controller()
export class AppController {
  // injecting app service into the controller
  constructor(private readonly appService: AppService) {}

  //default route
  // return type: string
  @Get()
  getHello(): string {
    // this.appService.getHello()에 들어있는 정보를 가지고와 반환
    return this.appService.getHello();
  }
}
