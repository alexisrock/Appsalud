import sql from 'mssql';
import * as dotenv from 'dotenv';

export class Conection {

    async  ConectToDatabse(){
        try{
           const  DbSetting: any = {
                user: process.env.UserName,
                password: process.env.Passwword,
                server: process.env.ServerName,
                database: process.env.DataBase,
                pool: {
                  max: 10,
                  min: 0,
                  idleTimeoutMillis: 30000
                },
                options: {
                  encrypt: true, 
                  trustServerCertificate: false 
                }
            };
            const pool = await sql.connect(DbSetting);
            return pool;    
        } catch (error) {    
            return null;  
        }

}

 




}