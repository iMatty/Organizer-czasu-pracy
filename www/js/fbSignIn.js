 const fbSignIn = () => {
   const fbProvider = new firebase.auth.FacebookAuthProvider();

     firebase.auth().signInWithPopup(fbProvider).then((cred) => {
         console.log(cred);
     }).catch(function(error) {
         //Handle errors
         document.getElementById('errorMessage').innerText = error.message;

     });


 }
