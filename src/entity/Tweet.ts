import { Column, Entity, LessThan, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity({ name: "tweets" })
export class Tweet {

    @PrimaryGeneratedColumn()
    id: string;

    @Column({ type: "varchar", length: 80 })
    title: string;

    @Column({ type: "varchar", length: 300})
    content: string;

    /**
     * Eager loading happens if user: User
     * we can make it Lazy loading by replacing user: User with 
     * user: Promise<User>
     */
    @ManyToOne(type => User, user => user.tweets)
    user: Promise<User>;
}
