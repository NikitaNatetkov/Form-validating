const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function checkEmail(input){
const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if(re.test(input.value.trim())){
    showSuccess(input);
  } else{
    showError(input, `email not correct`);
  }
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

 function checkLength(input,min,max){
    if(input.value.length<min){
        showError(input,`${getFieldName(input)} must be at least ${min} characters`)
    } else if(input.value.length > max){
        showError(input,`${getFieldName(input)} must be less than ${max} characters`)
    } else{
        showSuccess(input);
    }
 }
//check 
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required`)
        } else{
            showSuccess(input)
        }
    }); 
}

function checkPasswordComparisom(input1,input2){
    if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  }
}


form.addEventListener('submit',function(e) {
    e.preventDefault();
    
    checkRequired([username,email,password,password2]);
    checkLength(username, 5,15);
    checkLength(password, 6,25);
    checkLength(password2, 6,25);
    checkEmail(email);
    checkPasswordComparisom(password,password2)
});