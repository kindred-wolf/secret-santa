import { NestFactory } from '@nestjs/core';
import { SecretSantaModule } from './SecretSantaModule';

async function bootstrap() {
  const app = await NestFactory.create(SecretSantaModule);
  await app.listen(4000);
}
bootstrap();
