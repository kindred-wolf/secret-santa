import { Injectable } from '@nestjs/common'
import { Pair } from './Entities/Pair'
import { Participant } from './Entities/Participant'
import { SecretSantaRepository } from './SecretSantaRepository'

@Injectable()
export class SecretSantaService {
  constructor(
    private readonly secretSantaRepository: SecretSantaRepository
  ){}

  async createParticipant(firstName: string, lastName: string, wishList: string[]) : Promise<Participant>{
    return await this.secretSantaRepository.createParticipant(firstName, lastName, wishList)
  }

  public async shuffle(){
    this.secretSantaRepository.shuffle()
  }

  public async getWishListById(id: number): Promise<Participant> {
    return await this.secretSantaRepository.getWishListById(id)
  }

  public deleteAllInfo(){
    return this.secretSantaRepository.deleteAllInfo()
  }
}
