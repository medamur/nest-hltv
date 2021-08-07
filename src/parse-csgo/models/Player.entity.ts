import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Team } from './Team.entity'

@Entity({ name: 'players' })
export class Player {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column()
	name: string

	@OneToMany(() => Team, team => team.players)
	teams: Team[]

	@Column()
	ranking: string
}
