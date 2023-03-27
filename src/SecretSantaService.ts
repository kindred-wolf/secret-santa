import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Participant } from './Entities/Participant'
import { Pair } from "./Entities/Pair"

@Injectable()
export class SecretSantaService {
  constructor(
    @InjectRepository(Participant)
    private readonly participantRepository : Repository<Participant>,

    @InjectRepository(Pair)
    private readonly pairRepository : Repository<Pair>
  ){}

  MAX_WISHES_AMOUNT = 10
  MIN_PARTICIPANTS_AMOUNT = 3
  MAX_PARTICIPANTS_AMOUNT = 500

  async createParticipant(firstName: string, lastName: string, wishList: string[]){
    if(wishList.length > this.MAX_WISHES_AMOUNT){
      console.log('More than 10 wishes')
      return
    }

    if(wishList.length < 1){
      console.log('There is no wishes')
      return
    }

    const newParticipant = new Participant()

    newParticipant.firstName = firstName
    newParticipant.lastName = lastName
    newParticipant.wishList = wishList

    return await this.participantRepository.save(newParticipant)
  }

  //DELETE
  public getParticipantCount(){
    return this.participantRepository.count()
  }

  public async shuffle(){
    
  }

  private async createPair(santaId: number, receiverId: number){
    const pair = new Pair()

    pair.santaId = santaId
    pair.receiverId = receiverId

    return await this.pairRepository.save(pair)
  }
}
