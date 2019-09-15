//codding everything using ES6
const col1 = document.getElementById("col1");
const col2 = document.getElementById("col2");
const h3 = document.querySelector("h3");
const body = document.getElementById('body');

//load the background as the input value
body.style.background = `linear-gradient(to right,${col1.value},
                                          ${col2.value})`;
//writting the value's of the input
h3.textContent = `${body.style.background};`;
const bt = document.createElement("button")
bt.append(document.createTextNode("Random Background"));
bt.classList.add("button1");
body.appendChild(bt);

const gen_random = () => {
  return Math.floor(Math.random() * 256);
}

const randomNum = () => {
  let gen_number = `linear-gradient(to right, rgb(${gen_random()},
                                                  ${gen_random()},
                                                  ${gen_random()}),
                                                rgb(${gen_random()},
                                                    ${gen_random()},
                                                    ${gen_random()})
                                      )`;
   body.style.background = gen_number;
   h3.textContent = `${gen_number};`
}

const setBack = () => {
  body.style.background = `linear-gradient(to right, ${col1.value},
                          ${col2.value})`;

  h3.textContent = `${body.style.background};`;
}

bt.addEventListener("click", randomNum);
col1.addEventListener("input", setBack);
col2.addEventListener("input", setBack);
