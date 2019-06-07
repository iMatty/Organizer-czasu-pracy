 const fbSignIn = () => {
   const fbProvider = new firebase.auth.FacebookAuthProvider();

     firebase.auth().signInWithPopup(fbProvider).then(() => {
         window.location.replace("list-view.html?userId=" + firebase.auth().currentUser.uid);

     }).catch(function(error) {
         //Handle errors
         document.getElementById('errorMessage').innerText = error.message;

     });


 }
