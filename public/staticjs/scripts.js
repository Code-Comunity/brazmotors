var firebaseConfig = {
  apiKey: "AIzaSyCITH2UpnJYQCLi-cI14gZzrqcftcHZapI",
  authDomain: "brazmotors-14952.firebaseapp.com",
  projectId: "brazmotors-14952",
  storageBucket: "brazmotors-14952.appspot.com",
  messagingSenderId: "870149989964",
  appId: "1:870149989964:web:c4534a6db6f5b7feebf6e9"
};
// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);
var storageRef = app.storage().ref();

// Get elements of dom
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var input3 = document.getElementById('input3');
var input4 = document.getElementById('input4');
var input5 = document.getElementById('input5');

// EVENT OF BUTTON ELEMENTS onclick
input1.addEventListener('click', function(e){
  e.preventDefault()
  uploadFile1()
})

input2.addEventListener('click', function(e){
  e.preventDefault();
  uploadFile2()
})

input3.addEventListener('click', function(e){
  e.preventDefault();
  uploadFile3()
})

input4.addEventListener('click', function(e){
  e.preventDefault();
  uploadFile4()
})

input5.addEventListener('click', function(e){
  e.preventDefault();
  uploadFile5()
})

// FUNCTIONS
function uploadFile1() {
  var file = document.getElementById('fileupload').files[0]
  var slide1 = storageRef.child(`slide1.${file.name.split('.')[1]}`);
  slide1.put(file).then(function(snapshot) {
    alert("Currículo submetido no banco de dados!");
  });
}

function uploadFile2() {
  var file = document.getElementById('fileupload2').files[0]
  var slide2 = storageRef.child(`slide2.${file.name.split('.')[1]}`);
  slide2.put(file).then(function(snapshot) {
    alert("Slide 2 Submetido!");
  });
}

function uploadFile3() {
  var file = document.getElementById('fileupload3').files[0]
  var slide3 = storageRef.child(`slide3.${file.name.split('.')[1]}`);
  slide3.put(file).then(function(snapshot) {
    alert("Slide 3 Submetido!");
  });
}

function uploadFile4() {
  var file = document.getElementById('fileupload4').files[0]
  var slide4 = storageRef.child(`slide4.${file.name.split('.')[1]}`);
  slide4.put(file).then(function(snapshot) {
    alert("Slide 4 Submetido!");
  });
}

function uploadFile5() {
  var file = document.getElementById('fileupload5').files[0]
  var slide5 = storageRef.child(`slide5.${file.name.split('.')[1]}`);
  slide5.put(file).then(function(snapshot) {
    alert("Slide 5 Submetido!");
  });
}