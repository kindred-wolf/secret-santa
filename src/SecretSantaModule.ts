import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pair } from './Entities/Pair';
import { Participant } from './Entities/Participant';
import { SecretSantaController } from './SecretSantaController';
import { SecretSantaService } from './SecretSantaService';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'SecretSantaDB.db',
      entities: [Participant, Pair],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Participant, Pair])
  ],
  controllers: [SecretSantaController],
  providers: [SecretSantaService],
})
export class SecretSantaModule {}
