import * as dotenv from 'dotenv';
import * as path from 'path';
import { LOCAL_STAGE } from '../../models/constants';

export async function loadEnvVariables(event: any) {
  //Load the env file just once per run
  const stage = event?.stageVariables?.env ?? LOCAL_STAGE;
  if (stage === LOCAL_STAGE || !stage) {
    if (process.env.ENV_LOADED !== 'true') {
      process.env.IS_OFFLINE = String(!!event?.isOffline);
      process.env.ENVIRONMENT = event?.stageVariables?.env ?? LOCAL_STAGE;
      const envPath = path.join(
        __dirname,
        '..',
        '..',
        'environment/.env.' + (event?.stageVariables?.env ?? LOCAL_STAGE) //Defaults to local config
      );
      dotenv.config({
        path: envPath
      });
      process.env.ENV_LOADED = 'true';
    }
  }
}
