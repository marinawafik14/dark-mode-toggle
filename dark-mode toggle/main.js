let inputEle = document.querySelector(".input");
let bodyEle = document.querySelector("body");

inputEle.checked = JSON.parse(localStorage.getItem("mode"))


updateBody();

function updateBody(){

if (inputEle.checked) {
    bodyEle.style.background="black";
}else{
    bodyEle.style.background="white";
}



}

inputEle.addEventListener("input",function(){
updateBody();
updateLocalStorage();

})

function updateLocalStorage(){
localStorage.setItem("mode", JSON.stringify(inputEle.checked))


}