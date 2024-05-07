var inputs = document.querySelector('input:not([type="submit")]');
var submit = document.querySelector('input[type="submit"]');
var passinp = document.querySelector('input[type="userpassword"]');
var confpassinp = document.querySelector('input[type="confirmpassword"]');

submit.addEventListener("click", function(e){
    e.preventDefault()
    for(item in inputs){
        if(inputs[item].value == ""){
            inputs[item].style.border = "1px solid red"
            inputs[item].nextElementsibling.textcontent = `${inputs[item].name} is required`

        }
    }

    if(confpassinp.value != passinp.value){
        confpassinp.nextElementSibling.textContent = "password doesn't match"
    }
})
