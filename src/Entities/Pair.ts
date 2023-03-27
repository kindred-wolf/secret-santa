import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity() 
export class Pair{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    santaId: number

    @Column()
    receiverId: number
}