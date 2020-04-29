// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAW63pv3duKQhIPJH5jcXtmQkdWkrp-Rho",
    authDomain: "tpsaladejuegos-e55db.firebaseapp.com",
    databaseURL: "https://tpsaladejuegos-e55db.firebaseio.com",
    projectId: "tpsaladejuegos-e55db",
    storageBucket: "tpsaladejuegos-e55db.appspot.com",
    messagingSenderId: "606556451059",
    appId: "1:606556451059:web:abbb37e9941de66d5b4786",
    measurementId: "G-0HS7XKZN4W"
  }
};

export default environment

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
