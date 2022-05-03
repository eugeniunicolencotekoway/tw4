
var formValues = {};
var varianta = 4;
var citiesName = [
    'Chișinău',
    'Bălți',
    'Orhei',
    'Tiraspol',
    'Soroca',
    'Nisporeni',
    'Bender',
];

function addItem() {
    var a = document.getElementById("list");
    var candidate = document.getElementById("Rds");
    var li = document.createElement("li");
    li.setAttribute('id', candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    a.appendChild(li);
}
function removeItem() {
    var a = document.getElementById("list");
    var candidate = document.getElementById("Rds");
    var item = document.getElementById(candidate.value);
    a.removeChild(item);
}

function uniqueBy(array, by = null) {
    const nextArr = [];
    array.forEach(item => {
        let cond = false;
        if (typeof item !== 'object') {
            cond = !nextArr.includes(item);
        } else {
            if (!by) {
                by = Object.keys(item)[0] || 'id';
            }
            cond = item.hasOwnProperty(by) && nextArr.every(el => el[by] !== item[by]);
        }

        if (cond) {
            nextArr.push(item);
        }
    });

    return nextArr;
}

function buildOption(value, label) {
    return `<option value="${value}">${label}</option>`;
}

$('#form').on('submit', function (e, a, i) {
    e.preventDefault();
});


$('#submit').on('click', function () {
    $('#form').find('input').each(function (e) {
        formValues[$(this).attr('name')] = $(this).val();

        console.log(formValues);
    });



    window.location.href = 'second.html';

});

function addItem() {
    var a = document.getElementById("list");
    var candidate = document.getElementById("candidate");
    var li = document.createElement("li");
    li.setAttribute('id', candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    a.appendChild(li);
}

// Creating a function to remove item from list
function removeItem() {

    // Declaring a variable to get select element
    var a = document.getElementById("list");
    var candidate = document.getElementById("candidate");
    var item = document.getElementById(candidate.value);
    a.removeChild(item);
}

//validation functions

const button = document.getElementById('button-save');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const phonenumbInput = document.getElementById('phonenumb');
const socialInput = document.getElementById('social');
const edtypeInput = document.getElementById('edtype');
// const emailInput = document.getElementById('email');



button.addEventListener('click', () => {
    console.log('1233S');
    let valid = validateField('firstName', 'First name is required');
    valid = validateField('lastName', 'Last name is required') && valid;
    valid = validateField('email', 'Email is required') &&
        validateEmail('Email must contain "@" and "."');
    valid = validateField('phonenumb', 'Phone Number is required') &&
        validatePhoneNumber('PhoneNumb is required');
    valid = validateField('social', 'Social link is required') &&
        validteSocial('validteSocial is required');

    valid = validateField('edtype', 'Edtype is required') &&
        validateEDtype('validateEDtype is required');


    if (valid) {
        console.log(firstNameInput.value + "\n" + lastNameInput.value + "\n" + emailInput.value + "\n" + phonenumbInput.value + "\n" + socialInput.value + "\n" + edtypeInput.value);
    }
});


function validateField(fieldName, errorMessage) {
    const error = document.getElementById(`${fieldName}Error`);
    const field = document.getElementById(fieldName);
    const value = field.value;
    if (value === '' || value === null || value.trim() === '') {
        error.innerHTML = errorMessage;
        error.style.display = 'block';
        field.classList.add('error');
        return false;
    } else {
        error.innerHTML = '';
        error.style.display = 'none';
        field.classList.remove('error');
    }

    return true;
}

function validateEmail(errorMessage) {
    const error = document.getElementById('emailError');
    const field = document.getElementById('email');
    const value = field.value;
    if (value.includes('@') && value.includes('.')) {
        error.innerHTML = '';
        error.style.display = 'none';
        field.classList.remove('error');
        return true;
    } else {
        error.innerHTML = errorMessage;
        error.style.display = 'block';
        field.classList.add('error');
    }


    return true;

}


function validatePhoneNumber(input_str) {
        // nu folosim regex
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return re.test(input_str);
}
function validateForm(event) {
    var phone = document.getElementById('phonenumb').value;
    if (!validatePhoneNumber(phone)) {
        document.getElementById('phonenumbError').classList.remove('hidden');
    } else {
        document.getElementById('phonenumbError').classList.add('hidden');
        alert("validation success")
    }
    event.preventDefault();
}
document.getElementById('myForm').addEventListener('button', validateForm);



function validteSocial(input_str) {

    // nu folosim regex
    var sl = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    return sl.test(input_str);
    function validateForm(event) {
        var social = document.getElementById('social').value;
        if (!validteSocial(social)) {
            document.getElementById('scoialError').classList.remove('hidden');
        } else {
            document.getElementById('socialError').classList.add('hidden');
            alert("validation success")
        }
        event.preventDefault();
    }
}
document.getElementById('myForm').addEventListener('button', validateForm);



function validateEDtype(string) {
    var edt = /^[A-Za-z]+$/;
    return edt.test(string);
}
function validateForm(event) {
    var edt = document.getElementById('edtype').value;
    if (!validateEDtype(edt)) {
        document.getElementById('edtypeNameError').classList.remove('hidden');
    } else {
        document.getElementById('edtypeNameError').classList.add('hidden');
        alert("validation success")
    }
    event.preventDefault();
}
document.getElementById('myForm').addEventListener('button', validateForm);








const mainRow = $('#main-row');
var submitting = false;
var timer = null;

function capitalCase(str) {
    return str[0].toUpperCase() + str.substring(1);
}



function validateValue(value) {
    return value.length >= 3 && value.length <= 20;
}

function previousRowsAreValid() {
    let flag = true;
    $('input[name=title-name]').each(function () {
        if (!validateValue($(this).val())) {
            flag = false;
            $(this).addClass('is-invalid');
        } else {
            $(this).removeClass('is-invalid')
        }
    });

    return flag;
}

function buildRow() {
    return `
            <div class="row parent-element">
                <div class="col-6">
                     <input type="text" class="form-control input-element" name="title-name">
                </div>
                <div class="col-6 split-in-half">
                     <select class="form-select select-element" name="title-icon"></select>
                </div>
            </div>`;
}

function addRow() {
    if (previousRowsAreValid()) {
        mainRow.append(buildRow());

    }
}

function navigate() {
    timer = setTimeout(() => {
        window.location.href = 'result.html';
    }, 2500); // asteptam 2.5 secunde
}

function makeRequest() {
    const articles = [];

    // cautam dupa grupa, apoi selectam fiecare element din aceasta grupa
    $('.parent-element').each(function () {
        console.log(($(this)));
        //find selector poate gasi si dupa clasa si dupa atribute (de ex 'input[name=title-name]')
        articles.push({
            label: $(this).find('input.input-element').val(),
            icon: $(this).find('.select-element').val(),
        });
    });

    if (submitting) {
        window.clearTimeout(timer);
        navigate();
        return;
    }

    console.log(articles);
    $.ajax({
        url: 'http://localhost:3000/form-data',
        method: 'POST',
        datatype: 'json',
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify(articles),
        success: function () {
            $('.container').append(`<h2 class="alert alert-success mt-4">Datele sunt salvate, redirectionez...</h2>`);
            submitting = true;
            navigate();
        },
    });
}

function finish() {
    if (previousRowsAreValid()) {
        makeRequest();
    }
}

$('#add-button').on('click', addRow);
$('#finish-button').on('click', finish);

function loadEducationTypes() {
    console.log('load education types');
    $.ajax({
        url: 'http://localhost:3000/education-type/4',
        method: 'GET',
        datatype: 'json',
        headers: {
            'Content-Type': 'application/json',
        },
        success: function (response) {
            response = uniqueBy(response, 'education');
            response.forEach(educationType => {
                $("#dur").append(buildOption(educationType.education, educationType.education));
            });
            console.log(response);
        },
    });
}


function loadJobNames() {
    console.log('load job names');
    $.ajax({
        url: 'http://localhost:3000/job-name/4',
        method: 'GET',
        datatype: 'json',
        headers: {
            'Content-Type': 'application/json',
        },
        success: function (response) {
            response.forEach(job => {
                $("#dl").append(buildOption(job.name, job.name));
            });
            console.log(response);
        },
    });
}

function initCities() {
    const citiesSelectBox = $('#dor');
    citiesName.forEach(function (city) {
        citiesSelectBox.append(buildOption(city, city));
    });
}

function loadCompaniesForCity(box = $('#dc'), city) {
    console.log('load companies for city');
    $.ajax({
        url: `http://localhost:3000/companies/${varianta}/city/${city}`,
        method: 'GET',
        datatype: 'json',
        headers: {
            'Content-Type': 'application/json',
        },
        success: function (response) {
            box.html(''); // curatam tot ce este acolo pana acum
            response.forEach(company => {
                box.append(buildOption(company.label, company.label)); // adaugam itemi noi
            });
            console.log(response);
        },
    });
}

function loadProfessions() {
    console.log('loading professions');
    $.ajax({
        url: 'http://localhost:3000/professions/4',
        method: 'GET',
        datatype: 'json',
        headers: {
            'Content-Type': 'application/json',
        },
        success: function (response) {
            response.forEach(profession => {
                $("#pr").append(buildOption(profession.label, profession.label));
            });
            console.log(response);
        },
    });
}



//SL

var survey_options = document.getElementById('survey_options');
var addmore_fields = document.getElementById('addmore_fields');
var remove_fields = document.getElementById('remove_fields');

addmore_fields.onclick = function () {
    var newField = document.createElement('input');
    newField.setAttribute('type', 'text');
    newField.setAttribute('name', 'survey_options[]');
    newField.setAttribute('class', 'survey_options');
    newField.setAttribute('siz', 50);
    newField.setAttribute('placeholder', 'https://-');
    survey_options.appendChild(newField);
}

remove_fields.onclick = function () {
    var input_tags = survey_options.getElementsByTagName('input');
    if (input_tags.length > 1) {
        survey_options.removeChild(input_tags[(input_tags.length) - 1]);
    }
}

//dinamicED

const add_more_fields = document.getElementById('add-button');
const remove_fields1 = document.getElementById('remove-button');
const list = document.getElementById('records-list')

const input = document.getElementById('edtype');
const select = document.getElementById('dur')
const educationStartInput = document.getElementById('edtype');
const graduationDateInput = document.getElementById('graduation');


add_more_fields.onclick = () => {
    const data = {
        name: input.value,
        duration: select.value,
        start: educationStartInput.value,
        end: graduationDateInput.value,
    }

    const listElement = document.createElement('li');
    listElement.classList.add('list-element');

    const inputRes = document.createElement('input');
    inputRes.classList.add('list-input');
    inputRes.disabled = true;
    inputRes.value = data.name;

    const selectRes = document.createElement('select');
    selectRes.classList.add('select-input');
    selectRes.disabled = true;
    selectRes.value = data.name;

    selectRes.innerHTML = `
    <option> ${data.duration} </option>
  `

    listElement.appendChild(inputRes);
    listElement.appendChild(selectRes);

    list.appendChild(listElement)

    input.value = null;
    select.value = null;
    graduationDateInput.value = null;
    educationStartInput.value = null;
}

remove_fields1.onclick = function () {
    const listLength = list.children.length
    const listItems = document.getElementsByClassName('list-element');

    if (listLength) {
        list.removeChild(listItems[listLength - 1]);
    }
}

//dinamicaEL

const add_more_fields1 = document.getElementById('add-buttonjn');
const remove_fields2 = document.getElementById('remove-buttonjn');
const listjn = document.getElementById('jobname-list')

const inputjn = document.getElementById('dl');
const selectjn = document.getElementById('dor')
const jnStartInput = document.getElementById('dl');
const jngraduationDateInput = document.getElementById('start-job');


add_more_fields1.onclick = () => {
    const data = {
        name: inputjn.value,
        duration: selectjn.value,
        start: jnStartInput.value,
        end: jngraduationDateInput.value,
    }

    const listjnElement = document.createElement('li');
    listjnElement.classList.add('list-element');

    const inputRes = document.createElement('input');
    inputRes.classList.add('list-input');
    inputRes.disabled = true;
    inputRes.value = data.name;

    const selectRes = document.createElement('select');
    selectRes.classList.add('select-input');
    selectRes.disabled = true;
    selectRes.value = data.name;

    selectRes.innerHTML = `
    <option> ${data.duration} </option>
  `

    listjnElement.appendChild(inputRes);
    listjnElement.appendChild(selectRes);

    listjn.appendChild(listjnElement)

    inputjn.value = null;
    selectjn.value = null;
    jngraduationDateInput.value = null;
    jnStartInput.value = null;
}

remove_fields2.onclick = function () {
    const listLength = listjn.children.length
    const listItems = document.getElementsByClassName('list-element');

    if (listLength) {
        listjn.removeChild(listItems[listLength - 1]);
    }
}


$(document).ready(function () {
    initCities();
    loadEducationTypes();
    loadJobNames();
    loadProfessions();
    $('#dor').on('change', function() {
        const city = $(this).val();
        loadCompaniesForCity($('#dc'), city);
    });
});
