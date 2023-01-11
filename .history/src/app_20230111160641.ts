import express from "express";
import config from 'config';
import { appendFile } from "fs";

const port = config.get<number>('port');

const app = express()

app.listen((port) => console.log(`Server running on port ${port}`))