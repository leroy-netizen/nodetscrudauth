import express from "express";
import config from 'config';
import { appendFile } from "fs";

const port = config.get<number>('port');


appendFile.listen(() => console.log(`Server running on port ${port}`))