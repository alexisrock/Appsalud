
import 'reflect-metadata';
import express from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import { container } from './inversity.config';
import * as dotenv from 'dotenv';

const main =  async() =>  {
    dotenv.config();
    const app = express();
    app.use(express.json());
    
    let server = new InversifyExpressServer(container, null, { rootPath: "/api" }, app)
    let appConfigured = server.build();
    const port  = process.env.Port;
    
    appConfigured.listen(port, () => `App running on 3000`);
}


main().catch(err => {
    console.error(err);
  });
  