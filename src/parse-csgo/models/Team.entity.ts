import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Player } from './Player.entity';

@Entity({ name: 'teams' })
export class Team {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  awardsEvents: string[]

  @Column()
  currentPlayers: string[]

  @ManyToOne(() => Player, player => player.teams)
  players:  string[]

  @Column()
  ranking: string
}
