import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity() 
export class Participant{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column('simple-array')
    wishList: string[]
}