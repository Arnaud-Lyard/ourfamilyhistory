import { DataSource } from "typeorm";
import User from "./users/entities/user.entity";
import config from "./config/config";
import { Article } from "./articles/entities/article.entity";
import { Profile } from "./profiles/entities/profile.entity";
import { Player } from "./players/entities/player.entity";
import { Match } from "./matchs/entities/match.entity";
import { PlayerToMatch } from "./playerstomatchs/entities/playertomatch.entity";
export const db = new DataSource({
  type: "postgres",
  host: config.DB_HOST || "database",
  port: 5432,
  username: config.DB_USER,
  password: config.DB_PASSWORD,
  database: config.DB_NAME,
  synchronize: true,
  entities: [User, Article, Profile, Player, Match, PlayerToMatch],
  logging: ["error"],
});
