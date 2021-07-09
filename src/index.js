"use strict";
// src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
const validateOPAT_1 = require("./validateOPAT");
const yargs = require('yargs');
const args = yargs.options({
    'file': { type: 'string', demandOption: true, alias: 'f' }
}).argv;
const fs = require('fs');
const data = JSON.parse(fs.readFileSync(args['file']).toString());
console.log(validateOPAT_1.validateOPAT(data));
