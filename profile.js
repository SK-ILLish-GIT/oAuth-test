// Function to display user details on the profile page
function displayUserProfile() {
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");

    // Get user details from local storage (or from your preferred method)
    var storedName = localStorage.getItem("user_name");
    var storedEmail = localStorage.getItem("user_email");

    if (storedName && storedEmail) {
        nameElement.textContent = storedName;
        emailElement.textContent = storedEmail;
    } else {
        // Handle the case when user details are not available
        nameElement.textContent = "User Name Not Found";
        emailElement.textContent = "Email Not Found";
    }
}

// Function to sign out
function signOut() {
    // Clear user details from local storage
    localStorage.removeItem("user_name");
    localStorage.removeItem("user_email");

    // Redirect the user to the sign-in page (adjust the URL as needed)
    window.location.href = "signin.html";
}

// Call the function to display user details on page load
displayUserProfile();
