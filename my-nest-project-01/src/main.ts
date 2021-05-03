// Entry point of the application
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // AppModule을 parsing하여 NestFactory에 생성
  const app = await NestFactory.create(AppModule);
  // 서버 프로세스 실행
  // 서버가 3000번 포트에서 실행될 수 있게 할당해주는 역할
  // Boot Up NESTJS
  await app.listen(3000);
}
bootstrap();
