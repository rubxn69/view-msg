import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';

import { getDatabase, ref, onValue } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js';

const appSettings = {
    databaseURL: "https://portfolio-site-a63c3-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)

const database = getDatabase(app)

const nameInDB = ref(database, "message")


const msgEl = document.getElementById('msg')

onValue(nameInDB, function(snapshot) {
   let nameArray = Object.values(snapshot.val())

   msgEl.innerHTML = ""
   for(let i = 0; i<nameArray.length;i++){
    
    appendMsg(nameArray[i])
    console.log(nameArray[i].email)
   }
            
})

function appendMsg(currentName){
    msgEl.innerHTML += `<li>${currentName.name}<br>${currentName.email}<br>${currentName.message}</li>`
}