import { IUsuarioService } from "../Interface/IUsuarioService";
import { IUsuarioRespoitory } from '../../DataAccess/Interface/IUsuarioRepository';
import { TYPES } from '../../Domain/Utils/Type';
import { inject, injectable } from "inversify";
import { Usuario } from '../../Domain/DataBase/Usuario';
import { Request } from "express";
import   { hashSync } from 'bcrypt';
import { BaseResponse } from "../../Domain/Common/BaseResponse";
import { Status } from "../../Domain/Common/Status";

@injectable()
export class UsuarioService implements IUsuarioService {

    IUsuarioRespoitory:  IUsuarioRespoitory;
    private saltRounds: number = 10;
    
    constructor(@inject(TYPES.IUsuarioRespoitory) IUsuarioRespoitory:  IUsuarioRespoitory) {        
        this.IUsuarioRespoitory = IUsuarioRespoitory;
    }


    async CreateUser(req: Request): Promise<BaseResponse> {
        let baseResponse =  new BaseResponse();         

        try {

              
            if(req !== null){
                      

                let user = this.MapperUser(req);
                console.log("user   "+user)     
                await this.IUsuarioRespoitory.CreateUser(user);   
                      
                baseResponse = this.MapperBaseResponse(Status.ok, "Usuario registrado con exito");           
                return baseResponse;
            }
            baseResponse = this.MapperBaseResponse(Status.badResquest, "Uno de los campos esta erroneo"); 
            
        } catch (error: any) {
            console.log(error)
            baseResponse = this.MapperBaseResponse(Status.internalServerError, error);     
         
        }
     
        return baseResponse;
    
    }

    private MapperUser(req: Request): Usuario{
        let usuario = new Usuario();
        usuario.nombre = req.body.nombre;
        usuario.apellidos = req.body.apellidos;
        usuario.celular = req.body.celular;
        usuario.correo = req.body.correo;
        usuario.genero = req.body.genero;
        console.log("reques body  nombre"+req.body.nombre)    
        usuario.contraseña = hashSync(req.body.pass, this.saltRounds);
        return usuario;
    }

    private MapperBaseResponse(statusCode: number, message: string): BaseResponse{
        let baseResponse = new BaseResponse();
        baseResponse.message = message;
        baseResponse.status = statusCode;
        return baseResponse;
    }


 

}