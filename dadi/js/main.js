const userNumber = Math.floor(Math.random() * 7);
console.log(userNumber);



const cpuNumber = Math.floor(Math.random() * 7);
console.log(cpuNumber)


if(userNumber > cpuNumber){
    alert("Hai vinto!")
} else if (userNumber < cpuNumber){
    alert("Hai perso!")
}
document.getElementById("user").innerHTML = userNumber
document.getElementById("cpu").innerHTML = cpuNumber