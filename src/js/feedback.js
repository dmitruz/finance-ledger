
function clickMe () {
    alert('You clicked button');
}
button.addEventListener('click', (e) => {
    e.preventDefault();
})


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
  

  