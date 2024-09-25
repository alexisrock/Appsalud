import { Request } from "express";
import { BaseResponse } from "../../Domain/Common/BaseResponse"

export interface IUsuarioService{

    CreateUser(req: Request): Promise<BaseResponse>;


}