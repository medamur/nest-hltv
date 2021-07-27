import { PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, Entity } from 'typeorm'

@Entity({ name: 'List' })
export class BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column({ type: 'boolean', default: true })
	isActive: boolean

	@Column({ type: 'boolean', default: true })
	isActiveSecond: boolean

	@Column({ type: 'boolean', default: false })
	isArchived: boolean

	@CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
	createDateTime: Date

	@Column({ type: 'varchar', length: 300 })
	createdBy: string

	@UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
	lastChangedDateTime: Date

	@Column({ type: 'varchar', length: 300 })
	lastChangedBy: string

	@Column({ type: 'varchar', length: 300, nullable: true })
	internalComment: string | null

	@Column({ type: 'varchar', length: 300, nullable: true })
	internalCommentSecond: string | null
}
