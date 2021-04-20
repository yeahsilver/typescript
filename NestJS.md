# NestJS
> https://docs.nestjs.com
## Controllers
  - Purpose: Receive specific requests for the application
  - The routing mechanisum controls which chontroller receive which requests.
  - Each controller has more than one route, and different routes can perform different actions
  - In order to create a basic controller, we can use *classes* and *decorators*
  - **Decorators** associate classes with required metadata and enable Nest to create a *routing map*


</br>


## Routing
 - `@Controller()`: define a basic controller
   
    ```
    import { Controller, Get } from '@nestjs/common';

    @Controller('cats')
    export clas CatsController {
      @Get() // indicate Nest to crate a handler for specific endpoint for HTTP requests and route path
      findAll(): String {
        return 'This action returns all cats';
       }
    }
  ```
  
-  **Route Path**: Determined by concatenating prefix declared for the controller, and any path specified in the request decorator.


</br>


## Request object
- Handlers often need access to the client request details
- `@Req()`: help access the request object 
  ```
  import { Controller, Get, Req } from '@nestjs/common';
  import { Request } from 'express';
  
  @Controller('cats)
  export class CatsController {
    @Get()
    findAll(@Req() request: Request): string {
      return 'This action returns all cats';
    }
  }
  ```
  
- `@Res()` = `@Response()`: response object interface

</br>

## Resources
  ```
  import { Controller, Get, Post } from '@nestjs/common';
  
  @Controller('cats')
  export class CatsController {
    @Post() // Create @Post()
    create(): string {
      return 'This action adds a new cat';
    }
    
    @Get()
    findAll(): string {
      return 'This action returns all cats';
    }
  }
 
  ```

</br>

## Routes Wildcards
```
@Get('ab*cd')
findAll() {
  return 'This route uses a wildcard';
}
```

</br>

## Status Code
 - status code is always 200 by default (POST: 201)
   ```
   @Post()
   @HttpCode(204)
   create() {
    return 'This action adds a new cat';
   }
   ```


</br>

## Headers
 - `@Header()`: Specify a custom reponse header
 ```
 @Post()
 @Header('Cached-Control', 'none')
 create() {
  return 'This action adds a new cat';
 }
 ```

</br>

## Redirection
 - `@Redirect()`: Redirect a response to a specific URL. takes two arguments(url, status code)
  ```
  @Get()
  @Redirect('https://nestjs.com', 301)  
  ```
  ```
  {
    "url": string,
    "statusCode": number
  }
  ```

</br>

