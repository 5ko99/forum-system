// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
   firebase: {
    apiKey: 'AIzaSyCeCoX2JOeSKs7wtdJKW-SXT3kHSqSjl7c',
    authDomain: 'forum-system.firebaseapp.com',
    databaseURL: 'https://forum-system.firebaseio.com',
    projectId: 'forum-system',
    storageBucket: 'forum-system.appspot.com',
    messagingSenderId: '79463840610'
   }
};
