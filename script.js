var col1 = document.getElementById("col1");
var col2 = document.getElementById("col2");
var h3 = document.querySelector("h3");
var body = document.getElementById('body');

//load the background as the input value
body.style.background = "linear-gradient(to right, " +
                                          col1.value +
                                          "," +
                                          col2.value +
                                          ")";
//writting the value's of the input
h3.textContent = body.style.background +";";
var bt = document.createElement("button")
bt.append(document.createTextNode("generate Random"));
body.appendChild(bt)


function gen_random(){
  var m = Math.floor(Math.random() * 256);
  return m;
}

function randomNum(){
  var gen_number = "linear-gradient(to right, rgb("
                                    + gen_random() + ","
                                    + gen_random() +","
                                    + gen_random() + "), rgb("
                                    + gen_random() + ","
                                    + gen_random() + ","
                                    + gen_random() + "))";
  body.style.background = gen_number;
  h3.textContent = gen_number +";";
}

function setBack(){
  color1 = col1.value;
  body.style.background = "linear-gradient(to right," + color1
  +"," + col2.value + ")";
  h3.textContent = body.style.background + ";"
}


bt.addEventListener("click", randomNum);
col1.addEventListener("input", setBack);
col2.addEventListener("input", setBack);
