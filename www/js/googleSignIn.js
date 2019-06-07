const googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
        .then (() => {
            window.location.replace("list-view.html?userId=" + firebase.auth().currentUser.uid);

        })
        .catch(function (error) {
            //Handle errors
            document.getElementById('errorMessage').innerText = error.message;
    });
}


