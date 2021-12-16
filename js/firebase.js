// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import{getDatabase,ref,set,get,child,update,remove}
    from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";
 
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIZPJuyR_xWzdpMXilWA1VUL7mF2PEZQ8",
    authDomain: "mars-website-afaac.firebaseapp.com",
    databaseURL: "https://mars-website-afaac-default-rtdb.firebaseio.com",
    projectId: "mars-website-afaac",
    storageBucket: "mars-website-afaac.appspot.com",
    messagingSenderId: "1065376750927",
    appId: "1:1065376750927:web:d2ed3253b947918c05f93a"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
const db = getDatabase();
 
var memName, memEmail, memDuration, memPackage
 
function dataPrep(){
    memName = document.getElementById('name').value;
    memEmail = document.getElementById('email').value;
    memDuration = document.getElementById('duration').value;
    memPackage = document.getElementById('package').value;
}
function InsertData(){
    set(ref(db,'member/'+ memEmail),{
        memberName: memName,
        memberEmail: memEmail,
        memberDuration: memDuration,
        memberPackage: memPackage
    })
    .then(()=>{
        alert('data stored successfully');
    })
    .catch((error)=>{
        alert('unsuccessful, error'+error);
    });
}

document.getElementById('submit').onclick = function(){
    dataPrep();
    InsertData();
}
 
 
 
// function SelectData(){
//     const dbref = ref(db);
//     const name = document.getElementById('firstname');
//     const last = document.getElementById('lastname');
//     const planet = document.getElementById('planet1');
//     const program = document.getElementById('space-program1');
 
//     get(child(dbref,'member/'+memName)).then((snapshot)=>{
//         if(snapshot.exists()){
//             name.textContent = snapshot.val().membername;
//             last.textContent= snapshot.val().memberlast;
//             planet.textContent = snapshot.val().planet;
//             program.textContent = snapshot.val().program;
//         }
//         else{
//             alert('No data found')
//         }
//     })
//     .catch((error)=>{
//         alert('unsuccessful,error'+error);
//     })
// }
 
// document.getElementById('select').onclick=function(){
//     dataPrep();
//     SelectData();
// }
 
// function UpdateData(){
//     update(ref(db,'member/'+memName),{
//         membername: memName,
//         memberlast: memLast,
//         planet: memPlanet,
//         program: memProgram
//     })
 
//     .then(()=>{
//         alert('data updated successfully');
//     })
//     .catch((error)=>{
//         alert('unsuccessful,error'+error);
//     });
// }
 
// function DeleteData(){
//     remove(ref(db,'member/'+memName))
//     .then(()=>{
//         alert('data removed successfully');
//     })
//     .catch((error)=>{
//         alert('unsuccessful,error'+error);
//     })
// }
 
// document.getElementById('update').onclick = function(){
//     dataPrep();
//     UpdateData();
// }
 
// document.getElementById('delete').onclick = function(){
//     dataPrep();
//     DeleteData();
// }


