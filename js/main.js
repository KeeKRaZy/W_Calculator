
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

const otvet7 = "Our site provides various information about the program \"W-Calculator\", also at the moment it is the only site on the Internet where this program can be downloaded";
const otvet1 = `On the main page \"Home\" you can install the program, see screenshots of the program, read its pluses and additional information \n\n On the next page \"Changelog\", you can see all the changes that have ever happened to the program, along with the names of the versions with which the changes came \n\n On the \"Versions\" page you can download all the versions that have ever existed \n\n On the \"Gallery\" page you can see screenshots of all windows in our program \n\n On the \"Login\" page, you could log into your account or register if the admins connect the database, for now this feature is disabled`;
const otvet2 = "This is a standard tax calculator, when you fill the fields with relevant information - you get the result. The calculator has two versions: \"on Hand\" and \"on Paper\". The first version will help you find out how much money you will receive after taxes will be deducted from your salary. Second version, in turn, is the exact opposite, with it you can find out what your salary was before taxes.";
const otvet3 = `After you install the archive and unzip it: \n\n 1. Clone the project \n\n \b git clone https://github.com/CodingXP/AlgasKalkulators.git \n\n 2. Open command prompt in the project location \n\n \b cd project-download-location \n\n 3. Install dependencies \n\n \b py -m pip install mysql-connector-python \n \b py -m pip install pyqt6 \n \b py -m pip install reportlab \n\n 4. Start the Webserver and local database \n\n 5. Create the database \n\n \b CREATE DATABASE paycheck; \n \b USE paycheck; \n \b CREATE TABLE userdata( \n \b\b\b   name char(20), \n \b\b\b    surname char(20), \n \b\b\b    email char(30), \n \b\b\b    password char(20), \n \b\b\b    primary key (email) \n ) \n\n 6. Run the program \n\n \b\b\py pcalc.py \n\n `;
const otvet4 = `If you opened the program for the first time, then first you need to click on the "Register" button and fill in the fields with the relevant information, then confirm the registration \n\n With this action you will create an account for yourself, now in the \"Login\" window you need to enter data from your account and then you will get access to our calculator \n\n `;
const otvet5 = "If you have any other questions or maybe something does not work for you, do not hesitate to write us on e-mail  wcalculator@gmail.com , we will help you";

var faq7 = document.getElementById('polosa7');
var faq1 = document.getElementById('polosa1');
var faq2 = document.getElementById('polosa2');
var faq3 = document.getElementById('polosa3');
var faq4 = document.getElementById('polosa4');
var faq5 = document.getElementById('polosa5');
var faq6 = document.getElementById('polosa6');

function Pokaz(x, y) {
    switch(x){
        case 1:
            if (window["faq"+y].getAttribute('id')=='polosa'+y){
                window["faq"+y].id='poloska'+y
                var otvetka = document.createElement("h5");
                otvetka.innerText = eval("otvet"+y); 
                setTimeout(function(){document.getElementById("poloska"+y).appendChild(otvetka);},200);
            } else {
                document.getElementById("poloska"+y).removeChild(document.getElementById("poloska"+y).lastChild);
                window["faq"+y].id='polosa'+y
            };
            break;
        case 0:
            if (faq6.getAttribute('id')=='polosa6'){
                faq6.id='poloska6'
                var otvetka = document.createElement("iframe");
                const videowidth = document.createAttribute("width");
                videowidth.value = "776";
                const videoheight = document.createAttribute("height");
                videoheight.value = "437";
                const videolink = document.createAttribute("src");
                videolink.value = "https://www.youtube.com/embed/FTfEdYcyjOc";
                otvetka.setAttributeNode(videowidth);
                otvetka.setAttributeNode(videoheight);
                otvetka.setAttributeNode(videolink);
                setTimeout(function(){document.getElementById("poloska6").appendChild(otvetka);},200);
            } else {
                document.getElementById("poloska6").removeChild(document.getElementById("poloska6").lastChild);
                faq6.id='polosa6'
            };
            break;
    }
} 
