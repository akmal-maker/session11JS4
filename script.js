// var button = document.querySelector('#btn');

// function test(){
//     console.log("done");

// }   
// btn.addEventListener("mouseleave", function(){
//     alert("doneee")
// })
// 
// click
// dblclick
// mouseenter
// mouseleave
// mouseup
// mousedown
// mousemove
// keydown
// keyup
// 

// var container = document.querySelector("#parent")
// var child = document.createElement("h1")
// child.innerHTML = "welcome"
// child.textContent = "hello world!"
// child.style.cssText = "color:red; background-color: blue;display:inline-block; "
// container.appendChild(child)
// container.insertAdjacentElement("beforebegin",child)
// container.insertAdjacentElement("beforeend",child)
// container.insertAdjacentElement("afterbegin",child)
// container.insertAdjacentElement("afterend",child)



var pass = document.querySelector('input');
var showpass = document.querySelector('#showpass');

showpass.addEventListener("click", function(){
    if(pass.type ==="password"){
        pass.type = "text"
        showpass.textContent = "hide password"

    }else {
        pass.type = "password"
        showpass.textContent = "show password"
    }
    
})