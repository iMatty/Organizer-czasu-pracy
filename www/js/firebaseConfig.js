
//  Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAvB8Kze1E6W961F-EshAzUWlgwNIfR9II",
    authDomain: "organizer-czasu-pracy.firebaseapp.com",
    databaseURL: "https://organizer-czasu-pracy.firebaseio.com",
    projectId: "organizer-czasu-pracy",
    storageBucket: "organizer-czasu-pracy.appspot.com",
    messagingSenderId: "1070221525856",
    appId: "1:1070221525856:web:f34b4b2daadb58b0"
};
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  db.settings({ timestampsInSnapshots: true }); 