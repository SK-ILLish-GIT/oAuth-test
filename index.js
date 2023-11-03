// Select the elements using plain JavaScript
var nameElement = document.getElementById("name");
var emailElement = document.getElementById("email");
var dataElement = document.querySelector(".data");
var signInButton = document.querySelector(".g-signin2");

// Function to handle sign-in
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
  

// Function to handle sign-out
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        alert("You have been signed out successfully");
        signInButton.style.display = "block";
        dataElement.style.display = "none";
    });
}


function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
}
