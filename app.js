var color = prompt("Напишите Цвет\nкрасный\nжелтый\nзеленый").toLowerCase().trim()

if (color === "красный"){
    console.log("СТОЙ!")
}else if (color === "желтый"){
    console.log("Подожди")
}else if (color === "зеленый"){
    console.log("Иди")
}else{
    console.log("Пишите : Красный - Желтый - Зеленый")
}

//task-2

for (var num = 20; num >= 0; num--) {
    console.log()
}
//task-1

var massiv = []

for (var i = 0; i < 11; i++){
    massiv.push(i)
}
console.log(massiv)