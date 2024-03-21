/* eslint-disable */
import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, Index } from 'typeorm'
import { IChatMessage, MessageType } from '../../Interface'

@Entity()
export class ChatMessage implements IChatMessage {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    role: MessageType

    @Index()
<<<<<<< HEAD
    @Column()
=======
    @Column({ type: 'uuid' })
>>>>>>> merged
    chatflowid: string

    @Column({ type: 'text' })
    content: string

    @Column({ nullable: true, type: 'text' })
    sourceDocuments?: string

    @Column({ nullable: true, type: 'text' })
    usedTools?: string

    @Column({ nullable: true, type: 'text' })
    fileAnnotations?: string

<<<<<<< HEAD
    @Column()
    chatType: string

    @Column()
=======
    @Column({ nullable: true, type: 'text' })
    fileUploads?: string

    @Column()
    chatType: string

    @Column({ type: 'uuid' })
>>>>>>> merged
    chatId: string

    @Column({ nullable: true })
    memoryType?: string

<<<<<<< HEAD
    @Column({ nullable: true })
    sessionId?: string

=======
    @Column({ type: 'uuid', nullable: true })
    sessionId?: string

    @Column({type:'timestamp'})
>>>>>>> merged
    @CreateDateColumn()
    createdDate: Date
}
