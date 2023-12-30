$(document).ready(function () {
    // Function to toggle between login and register forms
    window.toggleForm = function () {
        $("#login-form, #register-form").toggleClass("hidden");
    };

    // Function to handle login
    window.login = function () {
        var username = $("#username").val();
        var password = $("#password").val();

        // Perform AJAX login request to your backend
        // Example: $.post("/login", { username: username, password: password }, function(data) { /* Handle response */ });
    };

    // Function to handle registration
    window.register = function () {
        var newUsername = $("#newUsername").val();
        var newPassword = $("#newPassword").val();

        // Perform AJAX registration request to your backend
        // Example: $.post("/register", { newUsername: newUsername, newPassword: newPassword }, function(data) { /* Handle response */ });
    };
});