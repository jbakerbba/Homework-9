function validateForm() {

    let validForm = true;
    console.log("got inside fn");

    //validate string
    let stringVal = document.getElementById('string').value;
    let valString = /^[a-zA-Z]+$/;
    if(!valString.test(stringVal)) {
        document.getElementById('stringAns').innerText = "Your string must be in the correct format.";
        validForm = false;
    } else {
        document.getElementById('stringAns').
        innerText = '';
    }

    //validate zipcode
    let zipVal = document.getElementById('zip').value;
    let valZip = /^\d{5}([-.\s]?\d{4})?$/;
    if(!valZip.test(zipVal)) {
        document.getElementById('zipAns').innerText = "Your zipcode must bein the correct format.";
        validForm = false;
    } else {
        document.getElementById('zipAns').
        innerText = '';
    }

    //validate credit card
    let cardVal = document.getElementById('ccard').value;
    let valCard = /^(\d{4}[-\s]?){3}\d{4}$/;
    if(!valCard.test(cardVal)) {
        document.getElementById('ccAns').
        innerText = "Your credit card number must be in the correct format.";
        validForm = false;
    } else {
        document.getElementById('ccAns').innerText = '';
    }

    //validate phone number
    let phoneVal = document.getElementById('phone').value;
    let valPhone = /^(\d{3}[-.\s]?|\(\d{3}\)[-.\s]?)?\d{3}[-.\s]?\d{4}$/;
    if(!valPhone.test(phoneVal)) {
        document.getElementById('phoneAns').
        innerText = "Your phone number must be in the correct format.";
        validForm = false;
    } else {
        document.getElementById('phoneAns').innerText = '';
    }
}
document.getElementsByTagName('form')[0].addEventListener('submit', function(event) {
    //prevent default form submission
    event.preventDefault();
    //function to validate fields
    validateForm();
})