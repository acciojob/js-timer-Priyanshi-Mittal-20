// write js code here if required
let date =new Date()
let day=date.getDay()
let month=date.getMonth()
let year=date.getYear()
let hour=date.getHours()
let minute=date.getMinutes()
let second=date.getSeconds()
let para=document.getElementById("timer")
para.innerText=`${day}/${month}/${year}, ${hour}:${minute}:${second}`