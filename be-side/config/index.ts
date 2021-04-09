import 'dotenv/config';

export const config = {
  env: {
    port: process.env.PORT || 3001,
    basePath: process.env.APP_URL,
  },
  devServerDomain: process.env.DEV_SERVER_DOMAIN,
  // we can move this in dot file also
  firebaseConfig: {
    apiKey: "AIzaSyBBcFH8Wuzbw3MfIJO5ss2q0rcYnACuME0",
    authDomain: "test-app-1b7f7.firebaseapp.com",
    databaseURL: "https://test-app-1b7f7-default-rtdb.firebaseio.com",
    projectId: "test-app-1b7f7",
    storageBucket: "test-app-1b7f7.appspot.com",
    messagingSenderId: "460677305849",
    appId: "1:460677305849:web:d7573cc5f4011f25e65928"
  },
};
