// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiCliente:"http://34.132.83.87:5000/customer/",
  apiAdministrador:"http://34.132.83.87:5011/administrator/",
  apiAuth:"http://34.132.83.87:5010/auth/",
  apiCompetencia:"http://34.132.83.87:5003/competition/",
  apiEquipo:"http://34.132.83.87:5001/team/",
  apiEstadio:"http://34.132.83.87:5004/stadium/",
  apiJugador:"http://34.132.83.87:5006/player/",
  apiNoticia:"http://34.132.83.87:5007/post/",
  apiPais:"http://34.132.83.87:5013/country/",
  apiPartido:"http://34.132.83.87:5002/match/",
  apiTecnico:"http://34.132.83.87:5005/technical-director/",

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.