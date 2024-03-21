/* eslint-disable */
import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm'
import { IAssistant } from '../../Interface'

@Entity()
export class Assistant implements IAssistant {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: 'text' })
    details: string

<<<<<<< HEAD
    @Column()
=======
    @Column({ type: 'uuid'})
>>>>>>> merged
    credential: string

    @Column({ nullable: true })
    iconSrc?: string

<<<<<<< HEAD
    @CreateDateColumn()
    createdDate: Date

=======
    @Column({ type: 'timestamp' })
    @CreateDateColumn()
    createdDate: Date

    @Column({ type: 'timestamp' })
>>>>>>> merged
    @UpdateDateColumn()
    updatedDate: Date
}
