
import throttle from "lodash.throttle";

const REQUEST_FORM_STATE = 'request-form-state';
const form = document.querySelector('.request-form');
const data = { email: '', name: ''};
setValuesElemForm();

form.addEventListener('input', evt => {
  data[evt.target.name] = evt.target.value;
  localStorage.setItem(REQUEST_FORM_STATE, JSON.stringify({...data, [evt.target.name]: evt.target.value }),
);
});

form.addEventListener('input', evt => {
  data[evt.target.email] = evt.target.value;
  localStorage.setItem(REQUEST_FORM_STATE, JSON.stringify({...data, [evt.target.email]: evt.target.value }),
);
});

form.addEventListener('submit', evt => {
  evt.preventDefault()
  evt.currentTarget.reset();
  localStorage.removeItem(REQUEST_FORM_STATE);
});

function setValuesElemForm() {
  const dataFromLs = JSON.parse(localStorage.getItem(REQUEST_FORM_STATE));
  if (dataFromLs) {
    data.email = dataFromLs.email;
    data.name = dataFromLs.name;
    form.elements.email.value = data.email;
    form.elements.name.value = data.name;
  } 
}


// const form = document.querySelector("request-form");
// const name = document.querySelector("input.name");
// const email = document.querySelector("input.email");



// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//      const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//      if (!re.test(email.value)) {
//         email.getElementsByClassName.background = "red";
//         email.focus();
//         return
//      }
//      re = /^[а-яА-Я]{30}|[a-zA-Z]{30}$/;
//      if (!re.test(name.value)) {
//         name.getElementsByClassName.background = "red";
//         name.focus();
//         return
//      }
//     alert(name.value + "" + email.value);
// })

//   const form = document.getElementById('form');
//   const name = document.getElementById('name');
//   const email = document.getElementById('email');

//   form.addEventListener('submit', e => {
//     e.preventDefault();
//     validateInputs();
//   });
  
//   const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success')
//   }

//     const setSuccess = element => {
//         const inputControl = element.parentElement;
//         const errorDisplay = inputControl.querySelector('.error');

//         errorDisplay.innerText = '';
//         inputControl.classList.add('success');
//         inputControl.classList.remove('error');
//     };

//     const isValidEmail = email => {
//         const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         return re.test(String(email).toLowerCase());
//     }
//   const validateInputs = () => {
//     const nameValue = name.value.trim();
//     const emailValue = email.value.trim();

//     if (nameValue === '') {
//         setError(name, 'name is required');
//     } else {
//         setSuccess(name);
//     }

//     if (emailValue === '') {
//         setError(email, 'email is required')
//     } else {
//         setSuccess(email);
//     }

//     }
  

  