$(window).on('load', function () {
    var body = $("body");

    var init = function () {
        body.removeClass('view-2D opening').addClass("view-3D").delay(2000).queue(function () {
            $(this).removeClass('hide-UI').addClass("set-speed");
            $(this).dequeue();
        });
    };

    init();

});

$(document).ready(function () {
    // Function to validate email format
    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Form validation
    function validateForm() {
        var isValid = true;
        var name = $('#name').val().trim();
        var email = $('#email').val().trim();
        var message = $('#message').val().trim();

        if (name === "") {
            console.log("Please enter your name.");
            isValid = false;
        } else if (email === "" || !isValidEmail(email)) {
            console.log("Please enter a valid email address.");
            isValid = false;
        } else if (message === "") {
            console.log("Please enter a message.");
            isValid = false;
        }

        return isValid;
    }

    // Handle form submission
    $('#contact-form').on('submit', function (event) {
        event.preventDefault();

        if (validateForm()) {
            var formData = {
                name: $('#name').val().trim(),
                email: $('#email').val().trim(),
                message: $('#message').val().trim(),
            };

            // Add the loading class
            $('body').addClass('loading');

            // Simulate AJAX success with a 2-second delay
            setTimeout(function () {
                // Remove the loading class
                $('body').removeClass('loading');

                // Show success message
                console.log('Form submitted successfully!');

                // Reset the form fields after submission
                $('#contact-form')[0].reset();
            }, 2000); // 2-second delay to simulate loading
        }
    });
});
