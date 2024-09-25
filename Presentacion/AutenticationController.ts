import { controller } from 'inversify-express-utils';
import { inject } from "inversify";
import { IUsuarioService } from '../Business/Interface/IUsuarioService';
import { TYPES } from '../Domain/Utils/Type';
import { httpPost } from 'inversify-express-utils';
import { Request, Response } from "express";
import { BaseResponse } from "../Domain/Common/BaseResponse";


@controller("/Usuario")
export class AutenticationController{

    IUsuarioService: IUsuarioService;

    /**
     *
     */
    constructor(@inject(TYPES.IUsuarioService) IUsuarioService: IUsuarioService) {
         this.IUsuarioService = IUsuarioService;
    }



    @httpPost("/create")
    async create(req: Request, res: Response){     
        let base = new BaseResponse();
        try {           
            base = await this.IUsuarioService.CreateUser(req);         
            if (base !== null) {
                return res.status(base.status).send(base);
            }else{
                return res.status(404).send(base);
            }            
        } catch (error: any) {        
            return res.status(base.status).send(base);
        }       
    }
     



    


}