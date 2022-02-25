let name = prompt("Adınızı Girinzi!!!")

let myname = document.querySelector("#myName")

myname.innerHTML = `${name}`



let getHours = new Date().getHours()
let getMinutes = new Date().getMinutes()
let getSeconds = new Date().getSeconds()
let getDate = new Date().getDate()


let clock = document.querySelector("#myClock")

clock.innerHTML = `${getHours} : ${getMinutes} : ${getSeconds}, Ayın ${getDate}'i`