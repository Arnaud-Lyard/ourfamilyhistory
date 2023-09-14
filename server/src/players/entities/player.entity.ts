import { Field, ObjectType } from "type-graphql";
import { Column, Entity, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import User from "../../users/entities/user.entity";
import { Profile } from "../../profiles/entities/profile.entity";
import { PlayerToMatch } from "../../playerstomatchs/entities/playertomatch.entity";

@Entity()
@ObjectType()
export class Player {
  @PrimaryColumn({ default: () => "gen_random_uuid()" })
  @Field()
  id: string;
  @Column({ default: 1000 })
  @Field()
  rank: number;
  @Column({ default: 1000 })
  @Field()
  rating: number;
  @Column({ default: 0 })
  @Field()
  victory: number;
  @Column({ default: 0 })
  @Field()
  defeat: number;
  @OneToOne(() => User, (user) => user.player, {
    cascade: ["insert", "update"],
  })
  @Field(() => User)
  user: User;
  @OneToOne(() => Profile, (profile) => profile.player, {
    cascade: ["insert", "update"],
  })
  @Field(() => Profile)
  profile: Profile;
  @OneToMany(() => PlayerToMatch, (playerToMatch) => playerToMatch.player)
  playerToMatchs: PlayerToMatch[];
}
