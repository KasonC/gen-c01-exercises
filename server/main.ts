import express from 'express'
import bodyParser from 'body-parser'
import { createRoute } from './routes'
import { Controller } from './controller'

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const controller = new Controller;
const routes = createRoute(controller);

app.use('/', express.static('./public'));
app.use(routes);


const PORT = 8080
app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})