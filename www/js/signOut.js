const signOut = () => {
    firebase.auth().signOut().then(function () {
        console.log('signed out')

    }).catch(function (error) {
        console.log(error);
    })
}

 const checkIfLogged = firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        console.log('loggedIn');
    } else {
        console.log('loggedOut');
    }
});

checkIfLogged;
