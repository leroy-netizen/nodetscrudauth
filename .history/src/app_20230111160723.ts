import express from "express";
import config from 'config';

const port = config.get<number>('port');

const app = express()

app.listen(() => console.log(`Server running on port ${port}`))