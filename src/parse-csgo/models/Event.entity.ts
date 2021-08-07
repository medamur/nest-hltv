import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'events' })
export class Event {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  matches: string[]

  @Column()
  teams: string[]

  @Column()
  fond: string

  @Column()
  winner: string
}
