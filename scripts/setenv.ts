const { writeFile } = require('fs');
const { argv } = require('yargs');
// read environment variables from .env file
require('dotenv').config();
// read the command line arguments passed with yargs
const environment = argv.environment;
const isProduction = environment === 'prod';

if ( !process.env.API_FRONTEND || !process.env.API_FRONTEND_PORT  || !process.env.DEFAULT_LANGUAGE || !process.env.SUPPORTED_LANGUAGE) {
  console.error('All the required environment variables were not provided!');
  process.exit(-1);
}

const targetPath = isProduction
    ? `./apps/frontend/src/environments/environment.prod.ts`
    : `./apps/frontend/src/environments/environment.ts`;
// we have access to our environment variables
// in the process.env object thanks to dotenv
const environmentFileContent = `
    export const environment = {
        production: ${isProduction},
        API_URL_FRONTEND: "http://${process.env.API_FRONTEND}:${process.env.API_FRONTEND_PORT}",
        API_FRONTEND: "${process.env.API_FRONTEND}",
        API_PORT: "${process.env.API_PORT}",
        defaultLanguage: "${process.env.DEFAULT_LANGUAGE}",
        supportedLanguages: ${process.env.SUPPORTED_LANGUAGE}
    };`;
// write the content to the respective file
writeFile(targetPath, environmentFileContent, function (err: any) {
    if (err) {
      console.log(err);
    }
    console.log(`Wrote variables to ${targetPath}`);
});
