const googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
        .then ( function (result) {
           if(result) {
             const user = result.user.email;
             const loggedInContainer = document.getElementById('loggedIn');
            document.getElementById('signIn').style.display = 'none';
            loggedInContainer.style.display = 'block';
            document.getElementById('loggedUser').innerText = `User: ${user}`
            }
    })
        .catch(function (error) {
        console.log(error);
    });
}


