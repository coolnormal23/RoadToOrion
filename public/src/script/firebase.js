import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js'

// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js'

// Add Firebase products that you want to use
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js'
import { getFirestore, collection, doc, setDoc, addDoc, updateDoc, getDocs, getDoc } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js'
const firebaseConfig = {
  apiKey: "AIzaSyB4gEmDK44o11JcI2OILfdXfSUAFRysLng",
  authDomain: "roadtoorion.firebaseapp.com",
  projectId: "roadtoorion",
  storageBucket: "roadtoorion.appspot.com",
  messagingSenderId: "714110819367",
  appId: "1:714110819367:web:7737f65b5e8d4a1c748202"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

var uid = "";

document.getElementById("signinbutton").onclick = function() {
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    uid = user.uid;
    console.log("signed in as ",uid);

  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });};

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

var lastselect = "m4list";
var lastparent = "arbutton";
var lastlist = "arlist";
var lastlist2 = "m4-content";
var camocount = 0;

function undoAll()
{
    //undo all selects
    document.getElementById(lastselect).style.fontWeight="normal";
    document.getElementById(lastparent).style.fontWeight="normal";
    document.getElementById(lastlist).style.display="none";
    document.getElementById(lastlist2).style.display="none";
}

function showMenu(id)
{
    switch(id)
    {
        case "arlist":
            {
                //unbold and undo
                undoAll();
                //show gun list
                document.getElementById("arlist").style.display="block";
                //bold button
                document.getElementById("arbutton").style.fontWeight="bold";

                lastselect = "arbutton";
                lastparent = "arbutton";
                lastlist = "arlist";
                break;
            }
        case "smglist":
            {
                //unbold and undo
                undoAll();
                //show gun list
                document.getElementById("smglist").style.display="block";
                //bold button
                document.getElementById("smgbutton").style.fontWeight="bold";

                lastselect = "smgbutton";
                lastparent = "smgbutton";
                lastlist = "smglist";
                break;
            }
        case "brlist":
            {
                //unbold and undo
                undoAll();
                //show gun list
                document.getElementById("brlist").style.display="block";
                //bold button
                document.getElementById("brbutton").style.fontWeight="bold";

                lastselect = "brbutton";
                lastparent = "brbutton";
                lastlist = "brlist";
                break;
            }
        case "shotgunlist":
            {
                //unbold and undo
                undoAll();
                //show gun list
                document.getElementById("shotgunlist").style.display="block";
                //bold button
                document.getElementById("shotgunbutton").style.fontWeight="bold";

                lastselect = "shotgunbutton";
                lastparent = "shotgunbutton";
                lastlist = "shotgunlist";
                break;
            }
        case "lmglist":
            {
                //unbold and undo
                undoAll();
                //show gun list
                document.getElementById("lmglist").style.display="block";
                //bold button
                document.getElementById("lmgbutton").style.fontWeight="bold";

                lastselect = "lmgbutton";
                lastparent = "lmgbutton";
                lastlist = "lmglist";
                break;
            }
        case "mrlist":
            {
                //unbold and undo
                undoAll();
                //show gun list
                document.getElementById("mrlist").style.display="block";
                //bold button
                document.getElementById("mrbutton").style.fontWeight="bold";

                lastselect = "mrbutton";
                lastparent = "mrbutton";
                lastlist = "mrlist";
                break;
            }
        case "sniperlist":
            {
                //unbold and undo
                undoAll();
                //show gun list
                document.getElementById("sniperlist").style.display="block";
                //bold button
                document.getElementById("sniperbutton").style.fontWeight="bold";

                lastselect = "sniperbutton";
                lastparent = "sniperbutton";
                lastlist = "sniperlist";
                break;
            }
        case "meleelist":
            {
                //unbold and undo
                undoAll();
                //show gun list
                document.getElementById("meleelist").style.display="block";
                //bold button
                document.getElementById("meleebutton").style.fontWeight="bold";

                lastselect = "meleebutton";
                lastparent = "meleebutton";
                lastlist = "meleelist";
                break;
            }
        case "handgunlist":
            {
                //unbold and undo
                undoAll();
                //show gun list
                document.getElementById("handgunlist").style.display="block";
                //bold button
                document.getElementById("handgunbutton").style.fontWeight="bold";

                lastselect = "handgunbutton";
                lastparent = "handgunbutton";
                lastlist = "handgunlist";
                break;
            }
        case "launcherlist":
            {
                //unbold and undo
                undoAll();
                //show gun list
                document.getElementById("launcherlist").style.display="block";
                //bold button
                document.getElementById("launcherbutton").style.fontWeight="bold";

                lastselect = "launcherbutton";
                lastparent = "launcherbutton";
                lastlist = "launcherlist";
                break;
            }
        case "m4-content":
            {
                var select = "m4-content";
                var parent = "arbutton";
                var list = "arlist";
                var list2 = "m4list";

                //unbold and undo
                undoAll();
                //show site content
                document.getElementById(select).style.display="flex";
                //show gun list
                document.getElementById(list).style.display="block";
                //bold button
                document.getElementById(parent).style.fontWeight="bold";
                //bold subbuttom
                document.getElementById(list2).style.fontWeight="bold";

                lastselect = list2;
                lastparent = parent;
                lastlist = list;
                lastlist2 = select;
                break;
            }
        case "taq56-content":
            {
                var select = "taq56-content";
                var parent = "arbutton";
                var list = "arlist";
                var list2 = "taq56list";

                //unbold and undo
                undoAll();
                //show site content
                document.getElementById(select).style.display="flex";
                //show gun list
                document.getElementById(list).style.display="block";
                //bold button
                document.getElementById(parent).style.fontWeight="bold";
                //bold subbuttom
                document.getElementById(list2).style.fontWeight="bold";

                lastselect = list2;
                lastparent = parent;
                lastlist = list;
                lastlist2 = select;
                break;
            }
        case "kastov762-content":
            {
                var select = "kastov762-content";
                var parent = "arbutton";
                var list = "arlist";
                var list2 = "kastov762list";

                //unbold and undo
                undoAll();
                //show site content
                document.getElementById(select).style.display="flex";
                //show gun list
                document.getElementById(list).style.display="block";
                //bold button
                document.getElementById(parent).style.fontWeight="bold";
                //bold subbuttom
                document.getElementById(list2).style.fontWeight="bold";

                lastselect = list2;
                lastparent = parent;
                lastlist = list;
                lastlist2 = select;
                break;
            }
        case "lachman556-content":
            {
                var select = "lachman556-content";
                var parent = "arbutton";
                var list = "arlist";
                var list2 = "lachman556list";

                //unbold and undo
                undoAll();
                //show site content
                document.getElementById(select).style.display="flex";
                //show gun list
                document.getElementById(list).style.display="block";
                //bold button
                document.getElementById(parent).style.fontWeight="bold";
                //bold subbuttom
                document.getElementById(list2).style.fontWeight="bold";

                lastselect = list2;
                lastparent = parent;
                lastlist = list;
                lastlist2 = select;
                break;
            }
        case "stb556-content":
            {
                var select = "stb556-content";
                var parent = "arbutton";
                var list = "arlist";
                var list2 = "stb556list";

                //unbold and undo
                undoAll();
                //show site content
                document.getElementById(select).style.display="flex";
                //show gun list
                document.getElementById(list).style.display="block";
                //bold button
                document.getElementById(parent).style.fontWeight="bold";
                //bold subbuttom
                document.getElementById(list2).style.fontWeight="bold";

                lastselect = list2;
                lastparent = parent;
                lastlist = list;
                lastlist2 = select;
                break;
            }
        case "m16-content":
            {
                var select = "m16-content";
                var parent = "arbutton";
                var list = "arlist";
                var list2 = "m16list";

                //unbold and undo
                undoAll();
                //show site content
                document.getElementById(select).style.display="flex";
                //show gun list
                document.getElementById(list).style.display="block";
                //bold button
                document.getElementById(parent).style.fontWeight="bold";
                //bold subbuttom
                document.getElementById(list2).style.fontWeight="bold";

                lastselect = list2;
                lastparent = parent;
                lastlist = list;
                lastlist2 = select;
                break;
            }
        case "kastov74u-content":
            {
                var select = "kastov74u-content";
                var parent = "arbutton";
                var list = "arlist";
                var list2 = "kastov74ulist";

                //unbold and undo
                undoAll();
                //show site content
                document.getElementById(select).style.display="flex";
                //show gun list
                document.getElementById(list).style.display="block";
                //bold button
                document.getElementById(parent).style.fontWeight="bold";
                //bold subbuttom
                document.getElementById(list2).style.fontWeight="bold";

                lastselect = list2;
                lastparent = parent;
                lastlist = list;
                lastlist2 = select;
                break;
            }
        case "kastov545-content":
            {
                var select = "kastov545-content";
                var parent = "arbutton";
                var list = "arlist";
                var list2 = "kastov545list";

                //unbold and undo
                undoAll();
                //show site content
                document.getElementById(select).style.display="flex";
                //show gun list
                document.getElementById(list).style.display="block";
                //bold button
                document.getElementById(parent).style.fontWeight="bold";
                //bold subbuttom
                document.getElementById(list2).style.fontWeight="bold";

                lastselect = list2;
                lastparent = parent;
                lastlist = list;
                lastlist2 = select;
                break;
            }
        case "chimera-content":
            {
                var select = "chimera-content";
                var parent = "arbutton";
                var list = "arlist";
                var list2 = "chimeralist";

                //unbold and undo
                undoAll();
                //show site content
                document.getElementById(select).style.display="flex";
                //show gun list
                document.getElementById(list).style.display="block";
                //bold button
                document.getElementById(parent).style.fontWeight="bold";
                //bold subbuttom
                document.getElementById(list2).style.fontWeight="bold";

                lastselect = list2;
                lastparent = parent;
                lastlist = list;
                lastlist2 = select;
                break;
            }
        case "m13b-content":
            {
                var select = "m13b-content";
                var parent = "arbutton";
                var list = "arlist";
                var list2 = "m13blist";

                //unbold and undo
                undoAll();
                //show site content
                document.getElementById(select).style.display="flex";
                //show gun list
                document.getElementById(list).style.display="block";
                //bold button
                document.getElementById(parent).style.fontWeight="bold";
                //bold subbuttom
                document.getElementById(list2).style.fontWeight="bold";

                lastselect = list2;
                lastparent = parent;
                lastlist = list;
                lastlist2 = select;
                break;
            }
    }
}

function undoClick(object)
{
    if(object.classList.contains('clicked'))
    {
        object.onclick = object.classList.remove('clicked');
        object.classList.add('camobutton');
        console.log(object.classList);
        console.log("Fired");
        camocount -= 1;
        document.getElementById("totalcamos").innerHTML = ("Total Camos: " + camocount + "/204");
        object.onclick = function() {redoClick(object)};
        if(uid != "")
        {
            const docRef = doc(db,"userdata",uid);
            setDoc(docRef, { [object.id]:false },{ merge:true });
        }
    }
}

function redoClick(object)
{
    if(object.classList.contains('camobutton'))
    {
        object.classList.remove('camobutton');
        object.classList.add('clicked');
        console.log(object.classList);
        console.log("Fired");
        camocount += 1;
        document.getElementById("totalcamos").innerHTML = ("Total Camos: " + camocount + "/204");
        object.onclick = function() {undoClick(object)};
        if(uid != "")
        {
            const docRef = doc(db,"userdata",uid);
            setDoc(docRef, { [object.id]:true },{ merge:true });
        }
    }
}

window.onload = function() {
    var anchors = document.getElementsByClassName("camobutton");
    for(var i = 0; i < anchors.length; i++)
    {
        anchors[i].onclick = function() {redoClick(this)};
    }
};


//category buttons
document.getElementById("arbutton").onclick = function() {showMenu("arlist")};
document.getElementById("brbutton").onclick = function() {showMenu("brlist")};
document.getElementById("smgbutton").onclick = function() {showMenu("smglist")};
document.getElementById("shotgunbutton").onclick = function() {showMenu("shotgunlist")};
document.getElementById("lmgbutton").onclick = function() {showMenu("lmglist")};
document.getElementById("mrbutton").onclick = function() {showMenu("mrlist")};
document.getElementById("sniperbutton").onclick = function() {showMenu("sniperlist")};
document.getElementById("meleebutton").onclick = function() {showMenu("meleelist")};
document.getElementById("handgunbutton").onclick = function() {showMenu("handgunlist")};
document.getElementById("launcherbutton").onclick = function() {showMenu("launcherlist")};

//assault rifles
document.getElementById("m4list").onclick = function() {showMenu("m4-content")};
document.getElementById("taq56list").onclick = function() {showMenu("taq56-content")};
document.getElementById("kastov762list").onclick = function() {showMenu("kastov762-content")};
document.getElementById("lachman556list").onclick = function() {showMenu("lachman556-content")};
document.getElementById("stb556list").onclick = function() {showMenu("stb556-content")};
document.getElementById("m16list").onclick = function() {showMenu("m16-content")};
document.getElementById("kastov74ulist").onclick = function() {showMenu("kastov74u-content")};
document.getElementById("kastov545list").onclick = function() {showMenu("kastov545-content")};
document.getElementById("chimeralist").onclick = function() {showMenu("chimera-content")};
document.getElementById("m13blist").onclick = function() {showMenu("m13b-content")};