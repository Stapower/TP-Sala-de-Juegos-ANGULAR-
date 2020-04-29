// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDnt-aSSpmx-f3qYwCi_TApqZq7FYdgIO0",
    authDomain: "pps1-251a8.firebaseapp.com",
    databaseURL: "https://pps1-251a8.firebaseio.com",
    projectId: "pps1-251a8",
    storageBucket: "pps1-251a8.appspot.com",
    messagingSenderId: "1040041815117",
    appId: "1:1040041815117:web:77f759d0baffdec46dc004",
    measurementId: "G-32MP620R7Y"
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
