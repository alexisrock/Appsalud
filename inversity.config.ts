import { Container } from 'inversify';
import { AutenticationController } from './Presentacion/AutenticationController';
import { UsuarioRespoitory } from '../AppSalud/DataAccess/Implement/UsuarioRespoitory';
import { IUsuarioRespoitory} from '../AppSalud/DataAccess/Interface/IUsuarioRepository';
import { TYPES } from '../AppSalud/Domain/Utils/Type';


const container = new Container();
container.bind(AutenticationController).toSelf().inSingletonScope();
container.bind<IUsuarioRespoitory>(TYPES.IUsuarioRespoitory).to(UsuarioRespoitory);

export {container}