import firebase from 'firebase';

export const Connection: {
  dbConnection: firebase.database.Database | null;
  getConnection: () => Promise<any>;
  initConnection: (firebaseConfig: any) => Promise<firebase.database.Database>;
} = {
  dbConnection: null,
  getConnection: function getConnection() {
    return new Promise((resolve: any, reject: any) => {
      if (this.dbConnection) {
        resolve(this.dbConnection);
      } else {
        setTimeout(() => this.getConnection().then(resolve, reject), 100);
      }
    });
  },
  initConnection: async function (firebaseConfig: any) {
    firebase.initializeApp(firebaseConfig);
  
    this.dbConnection = firebase.database();
    return this.dbConnection;
  },
};
