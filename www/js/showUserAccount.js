// hamburger icon animation

$(document).ready(function () {
    $('.button').on('click', function (e) {
        e.preventDefault();
        $('.animated-icon').toggleClass('open');
        $('.navbar').toggleClass('dark');
        $('body').css('overflow', 'hidden');
    });
});

const numberList = document.querySelector('#number-list');
const form = document.querySelector('#add-number-form');
let url = new URL(location.href)
let userId = url.searchParams.get("userId");

function renderNumber(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let surname = document.createElement('span');
    let number = document.createElement('span');
    let cross = document.createElement('div');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    surname.textContent = doc.data().surname;
    number.textContent = doc.data().number;
    cross.textContent = 'x';

    li.appendChild(name);
    li.appendChild(surname);
    li.appendChild(number);
    li.appendChild(cross);

    numberList.appendChild(li);

    cross.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('numbers').doc(id).delete();
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('numbers').add({
        name: form.name.value,
        surname: form.surname.value,
        number: form.number.value,
    userId: userId
    });
    form.name.value = '';
    form.surname.value = '';
    form.number.value = '';
});

db.collection('numbers').where('userId', '==', userId).onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        if(change.type == 'added'){
            renderNumber(change.doc);
        } else if (change.type == 'removed'){
            let li = numberList.querySelector('[data-id=' + change.doc.id + ']');
            numberList.removeChild(li);
        }
    });
});

