import { config } from 'dotenv';
config();

import express from 'express';
const app = express();

// import { urlencoded, json } from 'body-parser';
import bodyParser from 'body-parser';
import cors from 'cors';

import { dbFunction } from './database/db.js';

import router from "./routes/user.route.js";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	// extended: true
	extended: false
}));

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use('/users', router);

// const port = process.env.PORT || 5137;
const port = process.env.PORT;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port);
    const db = dbFunction();
});
