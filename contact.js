function showConfirmation(event) {
    event.preventDefault(); 

    alert("Your message has been sent!");

    document.getElementById('contactForm').reset(); 
}
