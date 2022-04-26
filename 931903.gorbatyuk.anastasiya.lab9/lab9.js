var el_1 = document.getElementById('input_k1'); /* приваеваем объект */
var el_2 = document.getElementById('input_k2');/* приваеваем объект */
let nop = ""; //строка
el_1.value = 0;
/* функция считывания чисел */
function numbers(a){
    nop = nop+a; /* добавляем введеное число встроку */
    el_1.value = a; /* считываем значения строки - введеное полное число */
    el_2.value = nop.slice(0, -1)+"  ";/* массив с пробелом вместо последнего элемента */
}
/* функция считывания арифметических операций */
function symbol(m){
    a = String.fromCharCode(m); /*перевод символ в строку */
    nop = nop+a;
    el_1.value = a; 
    el_2.value = nop.slice(0, -1)+"  "; 
}
/* функция равно */
function equally(){ 
    el_1.value=eval(nop); /*вычисляем выражение и записываем результат в окно */
    el_2.value=""; /* обнуляем  */
    nop=eval(nop);
}
/*функция лчищения калькулятора */
function C(){
    el_1.value=0;
    el_2.value="";
    nop="";
}
/* функция удаления последнего введеного символа */
function returne(){
    if (nop == el_1.value){
    el_1.value=el_1.value.slice(0, -1);
    nop = el_1.value;
    el_2.value=nop;
    }
    else{
    el_1.value=nop.slice(0, -1);
    nop = el_1.value;
    el_2.value=el_1.value;
    }
}