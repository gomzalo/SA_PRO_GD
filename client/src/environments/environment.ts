// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const ruta="http://104.154.104.29:3000/esb";
export const environment = {
  production: false,

  apiCliente:ruta+"/customer/",
  apiAdministrador:ruta+"/administrator/",
  apiAuth:ruta+"/auth/",
  apiCompetencia:"http://35.188.184.126:5003/competition/",
  apiEquipo:"http://35.188.184.126:5001/team/",
  apiEstadio:"http://35.188.184.126:5004/stadium/",
  apiJugador:"http://35.188.184.126:5006/player/",
  apiNoticia:"http://35.188.184.126:5007/post/",
  apiPais:"http://35.188.184.126:5013/country/",
  apiPartido:"http://35.188.184.126:5002/match/",
  apiTecnico:"http://35.188.184.126:5005/technical-director/",
  

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.