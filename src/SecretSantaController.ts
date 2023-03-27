import { Body, Controller, Get, Post } from '@nestjs/common'
import { SecretSantaService } from './SecretSantaService'
import { Participant } from './Entities/Participant'
import { Pair } from './Entities/Pair'

@Controller('participants')
export class SecretSantaController {
    constructor(private readonly appService: SecretSantaService) {}

    @Post()
    async registerNewParticipant(
        @Body('firstName') firstName : string, 
        @Body('lastName') lastName : string,
        @Body('wishList') wishList : string[]
        ): Promise<Participant>{
        
            const newParticipant = this.appService.createParticipant(firstName, lastName, wishList)

            return await newParticipant
    }

    @Get()
    getParticipantsCount(){
        return this.appService.getParticipantCount()
    }


    @Get(':id/receiver')
    async getWishListById(): Promise<Participant>{

        return
    }
}
