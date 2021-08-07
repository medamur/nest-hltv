import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'matches' })
export class Matches {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  teams: string[]

  @Column()
  ranking: string

  @Column()
  date: string

  @Column()
  maps: string

  @Column()
  winner: string
}
