import { Container } from 'inversify';
import { AutenticationController } from './Presentacion/autenticationController';


const container = new Container();
container.bind(AutenticationController).toSelf().inSingletonScope();

export {container}