    
const eventList = document.querySelector('#event-list');
const form = document.querySelector('#add-event-form');
let url = new URL(location.href)
let userId = url.searchParams.get("userId");

// create event & render event
function renderEvent(doc){
    let li = document.createElement('li');
    let type = document.createElement('span');
    let startedAt = document.createElement('span');
    let endedAT = document.createElement('span');
    let cross = document.createElement('div');

    li.setAttribute('data-id', doc.id);
    type.textContent = doc.data().type;
    startedAt.textContent = doc.data().start;
    endedAT.textContent = doc.data().koniec;
    cross.textContent = 'x';

    li.appendChild(type);
    li.appendChild(startedAt);
    li.appendChild(endedAT);
    li.appendChild(cross);

    eventList.appendChild(li);

    cross.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('events').doc(id).delete();
    });
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let start_date = form.start.value;
    let end_date = form.koniec.value;

    if (Validate(start_date) && Validate(end_date)) {
        db.collection('events').add({     
            type: form.type.value,
            start: matched_date(start_date)[0],
            koniec: matched_date(end_date)[0],
            userId: userId
        });
        form.type.value = '';
        form.start.value = '';
        form.koniec.value = '';
    } else {
        window.alert("Wrong date format, enter data again");
        return false;
    }
});


db.collection('events').where('userId', '==', userId).onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        if(change.type == 'added'){
            renderEvent(change.doc);
        } else if (change.type == 'removed'){
            let li = eventList.querySelector('[data-id=' + change.doc.id + ']');
            eventList.removeChild(li);
        }
    });
});

