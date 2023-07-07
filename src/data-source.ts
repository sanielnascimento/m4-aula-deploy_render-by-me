import "dotenv/config";
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import path from "path";

const dataSourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, "./entities/**.{ts,js}");
  const migrationPath: string = path.join(__dirname, "./migrations/**.{ts,js}");

  const nodeEnv: string | undefined = process.env.NODE_ENV;
  const dbUrl: string | undefined = process.env.DATABASE_URL;

  if (!nodeEnv) throw new Error("Env var NODE_ENV does not exists");
  if (!dbUrl) throw new Error("Env var DATABASE_URL does not exists");

  if (nodeEnv === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [entitiesPath],
    };
  }

  // if (nodeEnv === "production") {
  //   return {
  //     type: "postgres",
  //     url: dbUrl,
  //     entities: [entitiesPath],
  //     migrations: [migrationPath],
  //   };
  // }

  return {
    type: "postgres",
    url: dbUrl,
    synchronize: false,
    logging: true,
    migrations: [migrationPath],
    entities: [entitiesPath],
    ssl: {
      rejectUnauthorized: false,
    },
  };
};

const AppDataSource = new DataSource(dataSourceConfig());

export { AppDataSource };
