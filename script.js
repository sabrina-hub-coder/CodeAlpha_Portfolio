const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementsByClassName("Your Name").value.trim();
    const email = document.getElementBycla("Your Email").value.trim();
    const message = document.getElementsByClassName("What's on your mind?").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill all the fields.");
        return;
    }

    alert("Thank you, " + name + "! Your message has been received.");

    form.reset();

});