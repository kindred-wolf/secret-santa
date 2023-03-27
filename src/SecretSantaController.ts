import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
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

    @Get(':id/receiver')
    async getWishListById(@Param('id') id: number): Promise<Participant>{

        return await this.appService.getWishListById(id)
    }

    @Delete()
    deleteAllInfo(){
        return this.appService.deleteAllInfo()
    }
}
