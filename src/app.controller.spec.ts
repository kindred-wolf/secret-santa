import { Test, TestingModule } from '@nestjs/testing';
import { SecretSantaController } from './SecretSantaController';
import { SecretSantaService } from './SecretSantaService';

describe('AppController', () => {
  let appController: SecretSantaController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SecretSantaController],
      providers: [SecretSantaService],
    }).compile();

    appController = app.get<SecretSantaController>(SecretSantaController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
