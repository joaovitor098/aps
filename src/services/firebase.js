import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAzGXTj4aOQh09T9yKqO3VrbeUD-gwEEgA',
  authDomain: 'testes-f210a.firebaseapp.com',
  databaseURL: 'https://testes-f210a-default-rtdb.firebaseio.com',
  projectId: 'testes-f210a',
  storageBucket: 'testes-f210a.appspot.com',
  messagingSenderId: '835720396734',
  appId: '1:835720396734:web:fbe69d76053ea0c41203ef',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
