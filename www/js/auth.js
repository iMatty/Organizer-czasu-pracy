//listen for auth status changes
 firebase.auth().onAuthStateChanged((user) => {
    if (user) {
       console.log('signed in')
    } else {
       console.log('signed out')
    }
});
// sign up new user
const signUpForm = document.getElementById('signUp-form');
const signInForm = document.getElementById('signIn-form');


if(signInForm) {
    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();

        //get user info
        const email = signUpForm['signUp-email'].value;
        const password = signUpForm['signUp-password'].value;

        // sign up new user
        firebase.auth().createUserWithEmailAndPassword(email, password).then((cred) => {
            console.log(cred);
            //clear form
            signUpForm.reset();
            window.location.replace("list-view.html?userId=" + firebase.auth().currentUser.uid);
        }).catch((error) => {
            console.log(error);
        });
    });
}

//logout
const logoutBtn = document.getElementById('logoutBtn')

if(logoutBtn) {
    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        firebase.auth().signOut().then(() => {
            window.location.href = './index.html';
        }).catch((e) => {
            console.log(e);
        });
    });
};

// login
if (signInForm) {
    signInForm.addEventListener('submit', (e) => {
        e.preventDefault();

        //get user info
        const email = signInForm['signIn-email'].value;
        const password = signInForm['signIn-password'].value;

        firebase.auth().signInWithEmailAndPassword(email, password).then((cred) => {
            console.log(cred);
            signInForm.reset();

            window.location.replace("list-view.html?userId=" + firebase.auth().currentUser.uid);
        }).catch((e) => {
            console.log(e);
        });
    });
}

function createDefaultUserSettings(userId) {
    db.collection('userSettings').add({
        freeDays: 0,
        userId: userId,
        contractType: 'employmentContract'
    });
}

