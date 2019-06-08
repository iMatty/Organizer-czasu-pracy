// hamburger icon animation

$(document).ready(function () {
    $('#back-btn').on('click', function (e) {
        e.preventDefault();
        window.location.replace("list-view.html?userId="+ userId);
    });
});

const numberList = document.querySelector('#number-list');

let url = new URL(location.href)
let userId = url.searchParams.get("userId");

function renderNumber(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let surname = document.createElement('span');
    let number = document.createElement('a');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    surname.textContent = doc.data().surname;
    number.textContent = doc.data().number;
    number.setAttribute('href', 'tel:' + doc.data().number)

    li.appendChild(name);
    li.appendChild(surname);
    li.appendChild(number);

    numberList.appendChild(li);
}


db.collection('numbers').where('userId', '==', userId).onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        if(change.type == 'added'){
            renderNumber(change.doc);
        }
    });
});
