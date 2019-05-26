 const fbSignIn = () => {
   const fbProvider = new firebase.auth.FacebookAuthProvider();

     firebase.auth().signInWithPopup(fbProvider).then(function(result) {
       console.log(result);
     }).catch(function(error) {
         //Handle errors
         document.getElementById('errorMessage').innerText = error.message;

     });
 }
