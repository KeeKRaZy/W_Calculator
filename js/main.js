
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

// faq

var faq = document.getElementById('polosa');
var faq1 = document.getElementById('polosa1');
var faq2 = document.getElementById('polosa2');
var faq3 = document.getElementById('polosa3');
var faq4 = document.getElementById('polosa4');
var faq5 = document.getElementById('polosa5');

function Pokaz() {
    if (faq.getAttribute('id')=='polosa'){
        faq.id='poloska'
        var otvetka = document.createElement("h5");
        otvetka.innerText = "Our site provides various information about the program \"W-Calculator\", also at the moment it is the only site on the Internet where this program can be downloaded";
        setTimeout(function(){document.getElementById("poloska").appendChild(otvetka);},200);
    } else {
        document.getElementById("poloska").removeChild(document.getElementById("poloska").lastChild);
        faq.id='polosa'
    };
} 

function Pokaz1() {
    if (faq1.getAttribute('id')=='polosa1'){
        faq1.id='poloska1'
        var otvetka = document.createElement("h5");
        otvetka.innerText = `On the main page \"Home\" you can install the program, see screenshots of the program, read its pluses and additional information \n
        On the next page \"Changelog\", you can see all the changes that have ever happened to the program, along with the names of the versions with which the changes came \n
        On the \"Versions\" page you can download all the versions that have ever existed \n
        On the \"Gallery\" page you can see screenshots of all windows in our program \n
        On the \"Login\" page, you could log into your account or register if the admins connect the database, for now this feature is disabled
        `;
        setTimeout(function(){document.getElementById("poloska1").appendChild(otvetka);},200);
    } else {
        document.getElementById("poloska1").removeChild(document.getElementById("poloska1").lastChild);
        faq1.id='polosa1'
    };
} 

function Pokaz2() {
    if (faq2.getAttribute('id')=='polosa2'){
        faq2.id='poloska2'
        var otvetka = document.createElement("h5");
        otvetka.innerText = "This is a standard tax calculator, when you fill the fields with relevant information - you get the result. The calculator has two versions: \"on Hand\" and \"on Paper\". The first version will help you find out how much money you will receive after taxes will be deducted from your salary. Second version, in turn, is the exact opposite, with it you can find out what your salary was before taxes.";
        setTimeout(function(){document.getElementById("poloska2").appendChild(otvetka);},200);
    } else {
        document.getElementById("poloska2").removeChild(document.getElementById("poloska2").lastChild);
        faq2.id='polosa2'
    };
} 

function Pokaz3() {
    if (faq3.getAttribute('id')=='polosa3'){
        faq3.id='poloska3'
        var otvetka = document.createElement("h5");
        otvetka.innerText = `After you install the archive and unzip it: \n
        1. Clone the project\n
        \b git clone https://github.com/CodingXP/AlgasKalkulators.git\n

        2. Open command prompt in the project location\n
        \b cd project-download-location\n

        3. Install dependencies\n
        \b py -m pip install mysql-connector-python\n
        \b py -m pip install pyqt6\n
        \b py -m pip install reportlab\n

        4. Start the Webserver and local database\n

        5. Create the database\n
        \b CREATE DATABASE paycheck;\n
        \b USE paycheck;\n
        \b CREATE TABLE userdata(\n
        \b\b\b   name char(20),\n
        \b\b\b    surname char(20),\n
        \b\b\b    email char(30),\n
        \b\b\b    password char(20),\n
        \b\b\b    primary key (email)\n
        )\n

        6. Run the program\n
        \b\b\py pcalc.py\n
        `;
        setTimeout(function(){document.getElementById("poloska3").appendChild(otvetka);},200);
    } else {
        document.getElementById("poloska3").removeChild(document.getElementById("poloska3").lastChild);
        faq3.id='polosa3'
    };
} 

function Pokaz4() {
    if (faq4.getAttribute('id')=='polosa4'){
        faq4.id='poloska4'
        var otvetka = document.createElement("h5");
        otvetka.innerText = `If you opened the program for the first time, then first you need to click on the "Register" button and fill in the fields with the relevant information, then confirm the registration \n
        With this action you will create an account for yourself, now in the \"Login\" window you need to enter data from your account and then you will get access to our calculator \n
        `;
        setTimeout(function(){document.getElementById("poloska4").appendChild(otvetka);},200);
    } else {
        document.getElementById("poloska4").removeChild(document.getElementById("poloska4").lastChild);
        faq4.id='polosa4'
    };
} 

function Pokaz5() {
    if (faq5.getAttribute('id')=='polosa5'){
        faq5.id='poloska5'
        var otvetka = document.createElement("h5");
        otvetka.innerText = "If you have any other questions or maybe something does not work for you, do not hesitate to write us on e-mail  wcalculator@gmail.com , we will help you";
        setTimeout(function(){document.getElementById("poloska5").appendChild(otvetka);},200);
    } else {
        document.getElementById("poloska5").removeChild(document.getElementById("poloska5").lastChild);
        faq5.id='polosa5'
    };
} 