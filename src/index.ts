// src/index.ts

/*
 * Install dependencies command:
 *   npm install
 *
 * Example commands:
 *   npx ts-node src/index.ts -f tests/examples/valid.json # Output: Valid!
 *   npx ts-node src/index.ts -f tests/examples/invalid.json # Output: Invalid: data must have required property 'title'
 */

import { validateOPAT } from "./validateOPAT"
import yargs from "yargs"
import fs from "fs"

const argv = yargs.options({
    'file': { type: 'string', demandOption: true, alias: 'f' }
}).parseSync()

const data = JSON.parse(fs.readFileSync(argv.file).toString())
console.log(validateOPAT(data))
