const googleSignIn = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
        .then (cred => {
            console.log(cred);
        })
        .catch(function (error) {
            //Handle errors
            document.getElementById('errorMessage').innerText = error.message;
    });
}


