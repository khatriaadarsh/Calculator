let display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let buttonArray = Array.from(buttons);

let strings = '';

buttonArray.forEach(btn =>{
    btn.addEventListener('click', (e) =>{
        if(e.target.innerHTML == 'DEL'){
            strings = strings.substring(0,strings.length-1);
            display.value = strings;
        }else if(e.target.innerHTML == 'AC'){
             strings = '';
             display.value = strings;
        }else if(e.target.innerHTML == '='){
         strings = eval(strings);
         display.value = strings;
        }
        else{
            strings += e.target.innerHTML;
            display.value = strings;
        }

    });
});