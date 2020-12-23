console.log("This is ...");

const username = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

const address = document.getElementById('address');
const message = document.getElementById('message');

let validname = false;
let validemail = false;
let validphone = false;
$('#success').hide();
$('#failure').hide();

username.addEventListener('blur', () => {
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = username.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("matched");
        username.classList.remove('is-invalid');
        username.classList.add('is-valid');
        validname = true;
    }
    else {
        console.log("not matched");
        username.classList.add('is-invalid');
        validname = false;
    }
})

email.addEventListener('blur', () => {
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("matched");
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
        validemail = true;
    }
    else {
        console.log("not matched");
        email.classList.add('is-invalid');
        validemail = false;
    }
})

phone.addEventListener('blur', () => {
    let regex = /^[0-9]{10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("matched");
        phone.classList.remove('is-invalid');
        phone.classList.add('is-valid');
        validphone = true;
    }
    else {
        console.log("not matched");
        phone.classList.add('is-invalid');
        validphone = false;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("clicked submit");
    console.log(validname, validemail, validphone);
    if (validname && validemail && validphone) {
        let failure = document.getElementById('failure');
        let success = document.getElementById('success');
        // failure.classList.remove('show');
        success.classList.add('show');
        $('#failure').hide();
        $('#success').show();
    }
    else {
        if (validname == false) {
            console.log('Username is not valid, try again!')
        }
        else if (validemail == false) {
            console.log('Email is not valid, try again!')
        }
        else {
            console.log('Phone is not valid, try again!')
        }
        let failure = document.getElementById('failure');
        let success = document.getElementById('success');
        // success.classList.remove('show');
        failure.classList.add('show');
        $('#success').hide();
        $('#failure').show();
    }
    let form = document.getElementsByName('myForm')[0];
    form.reset();
})