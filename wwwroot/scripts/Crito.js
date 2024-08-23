console.log("JavaScript filen fungerar");

 document.getElementById("subscribeForm").addEventListener("submit", function(event) {
    console.log("Formuläret skickas");
    
    var emailInput = document.getElementById("emailInput");
    var emailValue = emailInput.value;
    
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (!emailPattern.test(emailValue)) {
        event.preventDefault();
        alert("Please enter a valid email address.");
        emailInput.focus();
    } else {
        console.log("E-postadressen är giltig");
        alert("You are now a subscriber!");
    } 
});


// Contact form validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Form submission prevented.');

    var isValid = true;

    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
     document.getElementById('messageError').textContent = '';

     var name = document.getElementById('name').value;
    if (name.length < 2 || name.length > 50) {
        isValid = false;
        alert('Name must be between 2 and 50 characters long.');
    }

    var email = document.getElementById('email').value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        alert('Please enter a valid email address.');
    }

    var message = document.getElementById('message').value;
    if (message.length < 10 || message.length > 500) {
        isValid = false;
         alert('Message must be between 10 and 500 characters long.');
    }

    if (isValid) {
        alert('Your message has been sent!');
        console.log('Form submitted successfully.');
        event.target.reset();
    }
});
