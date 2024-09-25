import sql from "mssql";
import * as dotenv from "dotenv";
import * as path from "path";

export class Conection {
  async ConectToDatabse() {
    try {
      const envPath = path.resolve(__dirname, "../.env");
      dotenv.config({ path: envPath });

      const DbSetting = {
        user: process.env.User as string,
        password: process.env.Passwword as string,
        server: process.env.ServerName as string,
        database: process.env.DataBase as string,
        pool: {
          max: 10,
          min: 0,
          idleTimeoutMillis: 30000,
        },
        options: {
          encrypt: true,
          trustServerCertificate: true,
        },
      };

      const pool = await sql.connect(DbSetting);      
      return pool;
    } catch (error) {    
      return null;
    }
  }
}
