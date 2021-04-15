// import "reflect-metadata";
// import {createConnection} from "typeorm";
// import { Bootstrap, find } from "./bootstrap";
// import {User} from "./entity/User";

const typeorm = require('typeorm');
const bootstrap = require('./bootstrap');

typeorm.createConnection().then(async connection => {

    await bootstrap.Bootstrap(connection).catch(err => console.log(err));
    await bootstrap.find(connection).catch(err => console.log(err));

}).catch(error => console.log(error));
