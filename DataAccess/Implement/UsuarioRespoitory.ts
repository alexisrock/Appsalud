import { IUsuarioRespoitory } from "../Interface/IUsuarioRepository";
import { Conection }   from '../Conection';
import { Usuario }  from '../../Domain/DataBase/Usuario';
import sql from 'mssql';
import { injectable } from "inversify";

@injectable()
export class UsuarioRespoitory implements IUsuarioRespoitory{

    pool: any ;
    conection: Conection;
    constructor() {
        this.conection = new Conection();
        
    }


    async CreateUser(usuario: Usuario): Promise<void | null> {
        this.pool =  await this.conection.ConectToDatabse();

        if (!this.pool) {
            throw new Error("Failed to establish connection to the database.");
          }
        

        await this.pool.request()
        .input("Nombre", sql.VarChar(200),usuario.nombre)
        .input("Apellidos", sql.VarChar(200),usuario.apellidos)
        .input("Celular", sql.VarChar(11),usuario.celular)
        .input("Correo", sql.VarChar(200),usuario.correo)
        .input("Genero", sql.VarChar(2),usuario.genero)
        .input("Contrasena", sql.VarChar(200),usuario.contraseña)
        .query('Insert into Usuario Values(@Nombre, @Apellidos, @Celular, @Correo, @Genero, @Contrasena)')
    }



}