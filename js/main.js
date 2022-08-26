var formEl = document.querySelector(".myForm");
var hour1El =document.querySelector(".time__hour1");
var min1El =document.querySelector(".time__min1");
var hour2El =document.querySelector(".time__hour2");
var min2El =document.querySelector(".time__min2");
var hour3El =document.querySelector(".time__hour3");
var min3El =document.querySelector(".time__min3");
var hour4El =document.querySelector(".time__hour4");
var min4El =document.querySelector(".time__min4");
var inputEl =document.querySelector(".myInput");

formEl.addEventListener('submit', function(event){
    event.preventDefault();
    let findHour1 = Math.floor(inputEl.value/3.6);
    let findMin1 = Math.floor((inputEl.value/3.6 - findHour1)*60);
    let findHour2 = Math.floor(inputEl.value/20.1);
    let findMin2 = Math.floor((inputEl.value/20.1 - findHour2)*60);
    let findHour3 = Math.floor(inputEl.value/70);
    let findMin3 = Math.floor((inputEl.value/70 - findHour3)*60);
    let findHour4 = Math.floor(inputEl.value/800);
    let findMin4 = Math.floor((inputEl.value/800 - findHour4)*60);
    const data = {
        hour1: findHour1,
        min1: findMin1,
        hour2: findHour2,
        min2: findMin2,
        hour3: findHour3,
        min3: findMin3,
        hour4: findHour4,
        min4: findMin4
    }
    hour1El.textContent = data.hour1;
    min1El.textContent = data.min1;
    hour2El.textContent = data.hour2;
    min2El.textContent = data.min2;
    hour3El.textContent = data.hour3;
    min3El.textContent = data.min3;
    hour4El.textContent = data.hour4;
    min4El.textContent = data.min4;
})