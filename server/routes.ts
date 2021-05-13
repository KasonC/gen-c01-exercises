import express from 'express';
import { Controller } from './controller';
// import {request, response} from 'express'
export function createRoute (controller: Controller) {

    const routes = express.Router();
    // routes.get('/', (response) => {await response.status(200).sendFile('./index.html')})
    routes.get('/get', controller.getSomething);
    routes.post('/post', controller.login);

    return routes;

}