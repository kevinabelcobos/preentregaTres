const $form = document.querySelector('#form')
const $buttonkev = document.querySelector('esperoqueSalgabien')


$form.addEventListener('submit', handleSubmit)

function handleSubmit(event){

    event.preventDefault()
}

const form = new FormData(this)
console.log(form.get('nombre'))
$buttonkev.setAttribute('href',`kevinabelcobos@gmail.com?subject=${form.get('name')}${form.get('email')}${form.get('mensaje')}&=body`)
$buttonkev.click()