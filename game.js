let foodValElem = document.querySelector("#foodVal");
let warmthValElem = document.querySelector("#warmthVal");
let moneyValElem = document.querySelector("#moneyVal");
let chickenValElem = document.querySelector("#chickenVal");

let foodval = 0;
let warmthVal = 0;
let moneyVal = 0;
let chickenVal = 5;

function renderVals(){
    foodValElem.innerHTML = foodval;
    warmthValElem.innerHTML = warmthVal;
    moneyValElem.innerHTML = moneyVal;
    chickenValElem.innerHTML = chickenVal;

}

function resetGame(){
    foodval = 0;
    warmthVal = 0;
    moneyVal = 0;
    chickenVal = 5;
    renderVals();

    while (chickenVal > 0){
        warmthVal += 1;
        renderVals();
        console.log("loop");
    }
}