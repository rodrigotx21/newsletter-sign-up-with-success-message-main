function subscribe() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    if (email) {
        window.location.href = "thanks.html?email=" + email;
    }
}

function print_email() {
    console.log(email);
}

