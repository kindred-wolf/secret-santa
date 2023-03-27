import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Participant } from './Entities/Participant'
import { Pair } from "./Entities/Pair"

@Injectable()
export class SecretSantaRepository {
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
    const participants = await this.participantRepository.find()
    let remainingParticipants = participants.slice()

    for(let i = 0; i < remainingParticipants.length; i++){
        const santa = remainingParticipants[i]
        const [receiver] = remainingParticipants.splice(Math.floor(Math.random() * remainingParticipants. length), 1)

        await this.createPair(santa.id, receiver.id)
    }
  }

  private async createPair(santaId: number, receiverId: number){
    const pair = new Pair()

    pair.santaId = santaId
    pair.receiverId = receiverId

    return await this.pairRepository.save(pair)
  }
  
  public async getWishListById(id: number): Promise<Participant> {
    const santa = await this.participantRepository.findOne({ 
        where: { id : id }
    })

    const pair = await this.pairRepository.findOne({
        where: { santaId : santa.id }
    })

    const receiver = await this.participantRepository.findOne({ 
        where: { id : pair.receiverId }
    })

    return receiver
  }

  public deleteAllInfo(){
    this.pairRepository.delete
    this.participantRepository.delete
  }
}