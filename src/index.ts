// src/index.ts

import { validateOPAT } from "./validateOPAT";

const yargs = require('yargs')

const args = yargs.options({
    'file': { type: 'string', demandOption: true, alias: 'f' }
}).argv;

const fs = require('fs')

const data = JSON.parse(fs.readFileSync(args['file']).toString())
console.log(validateOPAT(data))
