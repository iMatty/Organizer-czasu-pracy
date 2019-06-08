//listen for auth status changes
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        mainApp.style.display = "block";
    } else {
        mainApp.style.display = "none";
    }
});
// sign up new user
const mainApp = document.getElementById('mainApp');
const signUpForm = document.getElementById('signUp-form');
const signInForm = document.getElementById('signIn-form');


signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = signUpForm['signUp-email'].value;
    const password = signUpForm['signUp-password'].value;

    // sign up new user
    firebase.auth().createUserWithEmailAndPassword(email, password).then((cred) => {
        console.log(cred);
        createDefaultUserSettings(firebase.auth().currentUser.uid)
        //clear form
        signUpForm.reset();
    }).catch((error) => {
        console.log(error);
    });
});

// logout
const logoutBtn = document.getElementById('logoutBtn')

logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();

    firebase.auth().signOut().catch((e) => {
        console.log(e);
    });
});

// login
signInForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = signInForm['signIn-email'].value;
    const password = signInForm['signIn-password'].value;

    firebase.auth().signInWithEmailAndPassword(email, password).then((cred) => {
        console.log(cred);
        signInForm.reset();

        window.location.replace("list-view.html?userId="+ firebase.auth().currentUser.uid);
    }).catch((e) => {
        console.log(e);
    });

});

function createDefaultUserSettings(userId) {
    db.collection('userSettings').add({
        freeDays: 0,
        userId: userId,
        contractType: 'employmentContract'
    });
}

