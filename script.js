const submit = document.getElementById('btn-submit')

submit.addEventListener('click', (event) => {
   event.preventDefault()
    
   const email = document.getElementById('e-mail')
   const password = document.getElementById('password')
   const passconfirm = document.getElementById('passconfirmation')
   const name = document.getElementById('name')
   const lastname = document.getElementById('lastname')

   if (email.value == '') {
       email.classList.add('error-validation')
   }

   if (password.value == '') {
    password.classList.add('error-validation')
}
   if (passconfirm.value == '') {
       passconfirm.classList.add('error-validation')
   }
   if (name.value == '') {
    name.classList.add('error-validation')
}
   if (lastname.value == '') {
    lastname.classList.add('error-validation')
}

   if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 || email.value.indexOf('.') - email.value.indexOf('@') == 1) {
       email.classList.add('error-validation')
   }
 
})