import { Usuario }  from '../../Domain/DataBase/Usuario';

export interface IUsuarioRespoitory{

    CreateUser(usuario: Usuario): void;


}