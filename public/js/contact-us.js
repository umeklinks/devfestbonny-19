// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCeoMZjVgeY80T87LieRHhtIcHV9QUs3QQ",
    authDomain: "devfestbonny.firebaseapp.com",
    databaseURL: "https://devfestbonny.firebaseio.com",
    projectId: "devfestbonny",
    storageBucket: "devfestbonny.appspot.com",
    messagingSenderId: "983852028805",
    appId: "1:983852028805:web:44bb4aa01e37f653"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Reference messages collection
var messageRef = firebase.database().ref('messages');

//Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

//submit Form
function submitForm(e) {
    e.preventDefault();

    //get values
    var fname = getInputValue('fname');
    var lname = getInputValue('lname');
    var phone = getInputValue('phone');
    var email = getInputValue('email');
    var subject = getInputValue('subject');
    var message = getInputValue('message');

    //save message
    saveMessage(fname, lname, phone, email, subject, message);

    //show alert
    document.querySelector('.alert').style.display = 'block';

    //hide alert
    setTimeout( function() {
        document.querySelector('.alert').style.display = 'none';
    },3000);

    //clear contact form
    document.getElementById('contactForm').reset();
}

//Function for get form values
function getInputValue(id) {
    return document.getElementById(id).value;
}

//Save message to firebase
function saveMessage(fname, lname, phone, email, subject, message) {
    var newMessageRef = messageRef.push();
    newMessageRef.set({
        fname: fname,
        lname: lname,
        phone: phone,
        email: email,
        subject: subject,
        message: message

    });
}
  