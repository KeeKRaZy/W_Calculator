
window.onload = () => {
    const transition_el = document.querySelector('.transition');
    const anchors = document.querySelectorAll('a');

    setTimeout(() => {
        transition_el.classList.remove('is-active');
    }, 300);

    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];

        anchor.addEventListener('click', e =>{
            e.preventDefault();
            let target = e.target.href;

            transition_el.classList.add('is-active');

            setTimeout(() => {
                window.location.href = target;
            }, 300);
        });
    }
}


// Show Password

var parole = document.getElementById('parole');
var passconfirm = document.getElementById('confirm');

function ShowPassword() {
    if (parole.getAttribute('type')=='password') {
        parole.type='text'
    } else {parole.type='password'};
}

// Show Password and Password Confirm

function ShowAllPasswords() {
    if (parole.getAttribute('type')=='password') {
        parole.type='text'
        passconfirm.type='text'
    } else {
        parole.type='password'
        passconfirm.type='password'};
}