
// variables 

let buttons = document.querySelectorAll("button");
let screen = document.querySelector('.answerScreen');
let reset = document.querySelector('#reset');
let equal = document.querySelector("#equal");
let equal_id = document.getElementById("equal_id");

equal.addEventListener("click",()=>{
    screen.innerHTML = eval(input)
})

const validOperators = ["+", "-", "x", "/", "*"];

let result,
  input = "",
  isProper = true,
  hasOperator = false,
  number = "";


buttons.forEach((e)=>{
    e.addEventListener("click", (x)=>{
        e.classList.add("pressedBtn");
        setTimeout(() => {
            e.classList.remove("pressedBtn");
        }, 90);

        if (Number(x.target.textContent)) {
            isProper = true;
              if (screen.innerHTML.lenght >= 11) {
                  alert("No more Numbers");
                  return;
              }
              if (result != undefined && !hasOperator) {
                  screen.innerHTML = "";
              }
              screen.innerHTML += x.target.textContent;
              number += x.target.textContent;
        } else if(x.target.textContent === "0"){
             if (screen.innerHTML.lenght >= 11) {
                 alert("No more nubers")
                 return;
             }
             isProper = true;
             screen.innerHTML +=0;
             number += 0;
            } else if (x.target.textContent === "DEL") {
                let value = screen.innerHTML;
                value = value.substring(0, value.length - 1);
                number = value;
                screen.innerHTML = value;
        }    else if (x.target.textContent === "Reset") {
                screen.innerHTML = "";
                number = "";
                hasOperator = false;
                result = undefined;
        }  else if (x.target.textContent === "="){
            input = screen.innerHTML;
             
              if (input != undefined && input != "") {
                  validOperators.forEach((o)=>{
                      alert("kindly give proper input ^-^.");
                      isProper = false;
                  });
                  if ((isProper)) {
                      hasOperator = false;
                      result = eval(input);
                    if (Number(result)) {
                        if (String(result).includes(".")) {
                            result = Math.round(result * 100)/ 100;
                        }
                        screen.innerHTML = result;
                    } else{
                        screen.innerHTML = 0;
                    }
                  }
              }
        }

        validOperators.forEach((o)=>{
            input =screen.innerHTML

            if (input.endsWith(o)) {
                isProper = false
            }
        })
        validOperators.forEach((o)=>{
            input =screen.innerHTML
            if (isProper) {
                if (o == x.target.textContent) {
                    number = " ";
                    hasOperator = true;
                    if (o == "x") {
                        screen.innerHTML += "*";
                    }else{
                        screen.innerHTML += o;
                    }
                }
            }
        });
        validOperators.forEach((o)=>{
            input = screen.innerHTML;
            if (!isProper) {
                if (o == x.target.textContent) {
                    input =input.slice(0, -1);
                    screen.innerHTML = input;
                    if (o == "x") {
                        screen.innerHTML += "*";
                    }else{
                        screen.innerHTML += o;
                    }
                }
            }
        })
    })
})


window.addEventListener("keydown", (e) => {
  if (screen.innerHTML.length >= 12) {
    alert("No more numbers");
    return;
  } else if (Number(e.key)) {
    screen.innerHTML += e.key;
  } else if (e.key === "Enter") {
        input = screen.innerHTML;
    validOperators.forEach((o) => {
      if (input.endsWith(o)) {
        alert("Kindly give proper input ^-^.");
        isProper = false;
      } else {
        isProper = true;
      }
    });
    if (isProper) {
      hasOperator = false
      result = eval(input);
      if (Number(result)) {
        if (String(result).includes(".")) {
          result = Math.round(result * 100) / 100;
        }
        screen.innerHTML = result;
      } else {
        screen.innerHTML = 0;
      }
    }
  } else if (e.key === "Backspace") {
    input = screen.innerHTML;
    input = input.substring(0, input.length - 1);
    number = input;
    screen.innerHTML = input;
  } else if (e.key === ".") {
    if (!number.includes(".")) {
      screen.innerHTML += e.key;
      number += e.key;
    }
  } else if (e.key == "0") {
    screen.innerHTML += 0;
  }
  validOperators.forEach((o) => {
    input = screen.innerHTML;
    if (input.endsWith(o)) {
      isProper = false;
    } else {
      isProper = true;
    }
    if (isProper) {
      if (o === e.key) {
        number = "";
        screen.innerHTML += o;
      }
    }
  });
});


// Switch ------------------------------------

let switch_circle_id = document.querySelector("#switch_circle_id");
let Switch = document.querySelector(".switch")
let Calculator = document.getElementById("calculator_id")
let h3 = document.querySelector("#h3");
let Display_area = document.getElementById("Display-area")
let Table = document.getElementById("table_id")
let reset_equal_id = document.getElementById("reset_equal_id")
let flag = 0;
let flag1  = 1;

function switchfun() {
      if (flag === 0) {
          switch_circle_id.style.margin = ".2rem auto";
          switch_circle_id.style.backgroundColor = "hsl(25, 98%, 40%)"; 
          Calculator.style.transition ="all .5s ease-in-out "
          Calculator.style.backgroundColor = "hsl(0, 0%, 90%)"
          Switch.style.backgroundColor ="hsl(0, 5%, 81%)"
          reset_equal_id.style.backgroundColor ="hsl(0, 5%, 81%)"
          h3.style.color = "black"
          Table.style.backgroundColor = "hsl(0, 5%, 81%)"
          Table.style.transition ="all .10s ease-in-out"
          Display_area.style.backgroundColor = "white"
          Display_area.style.color = "black"
      }   
      else if(flag1 === 1){
         switchfun();
      }
      else{
        switchfun();
      }
}


function switchfun() {
          switch_circle_id.style.float = "right";
          switch_circle_id.style.backgroundColor = "hsl(25, 98%, 40%)"; 
          Calculator.style.transition ="all .5s ease-in-out "
          Calculator.style.backgroundColor = "hsl(0, 0%, 90%)"
          Switch.style.backgroundColor ="hsl(0, 5%, 81%)"
          reset_equal_id.style.backgroundColor ="hsl(0, 5%, 81%)"
          h3.style.color = "black"
          Table.style.backgroundColor = "hsl(0, 5%, 81%)"
          Table.style.transition ="all .10s ease-in-out"
          Display_area.style.backgroundColor = "white"
          Display_area.style.color = "black"
  
}




































