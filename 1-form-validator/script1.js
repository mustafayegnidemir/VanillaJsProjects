const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check Email Validation -->From stackoverflow
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      showSuccess(input);
    } else {
      showError(input, 'Geçersiz email.');
    }
  }


// Check Required Fields

function checkRequired(inputArr) {
  // let isRequired = false;
  inputArr.forEach(function(input) {
    if (input.value.trim() === '') {
      
      showError(input, `${getFieldName(input)} Doldurmanız Gerekiyor.`);
      // isRequired = true;
    } else {
      showSuccess(input);
    }
  });
}

//Check Input Length
function checkLength(input,min,max) {
  if (input.value.length< min) {
    showError(input,`${getFieldName(input)} en az ${min} karakter olmalı`);
  } else if (input.value.length> max) {
    showError(input,`${getFieldName(input)} ${max} karakter sayısından fazla olamaz.`);
  } else{
    showSuccess(input);
  }
}

// Check password match

function checkPasswordMatch(input1,input2) {
  if (input1.value !== input2.value ) {
    showError(input2, `Şifreniz eşleşmiyor`)
  }else{
    showSuccess(input1);
    showSuccess(input2);
  }
}



// Get fieldName

function getFieldName(input) {
  return input.placeholder.charAt(0).toUpperCase() + input.placeholder.slice(1);


}


// Event Listener


form.addEventListener('submit',function (e) 
{
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username,3,15);
    checkLength(password,6,25);
    checkLength(password2,6,25);

    checkEmail(email);

    checkPasswordMatch(password,password2);



});