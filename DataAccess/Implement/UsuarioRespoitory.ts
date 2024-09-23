import { IUsuarioRespoitory } from "../Interface/IUsuarioRepository";
import { Conection }   from '../Conection';
import { Usuario }  from '../../Domain/DataBase/Usuario';
 
export class UsuarioRespoitory implements IUsuarioRespoitory{

    pool: any ;
    conection: Conection;
    constructor() {
        this.conection = new Conection();
        this.pool =  this.conection.ConectToDatabse();
    }


    CreateUser(usuario: Usuario): void{





    }

}