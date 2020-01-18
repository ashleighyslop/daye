import {DayeBackendApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {DayeBackendApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new DayeBackendApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
