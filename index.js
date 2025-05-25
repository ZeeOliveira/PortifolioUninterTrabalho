const emailInput = document.querySelector ("#emailInput");
const resultMessage = document.querySelector ("#resultMessage");
const emailForm = document.querySelector("#emailForm")

emailForm.addEventListener("submit", function(event){

    event.preventDefault();
    const email = emailInput.value;

    alert(email);
// validar email
    const isValid = validateEmail(email)

    if(isValid){
        resultMessage.textContent = "E-mail válido"
        resultMessage.style.color = "green"
    } else{
        resultMessage.textContent = "E-mail inválido"
        resultMessage.style.color = "red"
    }
})

//funçao de vallidar email
const validateEmail = (email) => {
    // padrao do email : texto@texto.texto
    const regex = / ^[ ^\s]+@[ ^\s]+\.[ ^\s]+$/;
    return regex.test(email);
}