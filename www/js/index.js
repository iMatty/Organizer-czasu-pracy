const signUpBtn = document.getElementById('signUpBtn');
const singInContainer = document.getElementById('signIn');
const singUpContainer = document.getElementById('signUp');

signUpBtn.addEventListener('click', () => {
    singInContainer.style.display = 'none';
    singUpContainer.style.display = 'block';
})
