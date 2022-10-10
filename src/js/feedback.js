const forms = () => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input');
         

 
    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);

            postData('http://localhost:1234')
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });
        });
    });
};

export default forms;
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
  

  