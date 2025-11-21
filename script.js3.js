//Display an alert message when the page loads
window.onload = function() {
    alert("Welcome to my website!!");
};
//Function to change text when button is clicked
function changeText() {
    document.getElementById("text").innerHTML = "You clicked the button! Hooray!";
}
// Function to validate form before submission
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    
     if (name === "" || email === "") { 
        alert("Name and Email fields cannot be empty!");
        return false; // Prevent form submission
    }

    alert("Form submitted successfully!");
    return true; // Allow form submission
}