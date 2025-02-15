let out = document.querySelector(".output");
let inpt = document.querySelector(".input");
let btn2 = document.querySelector(".toAdd");

function add1() {
  let di = document.createElement("div");
  let sp = document.createElement("span");
  let b = document.createElement("button");
  let h = document.createElement("hr");

  out.appendChild(di);
  sp.innerText = inpt.value;
  di.appendChild(sp);
  b.innerText = "cancel";
  di.appendChild(b);
  di.appendChild(h).style.width = "100%";

  function strike() {
    sp.style.textDecoration = "line-through";
  }

  function del() {
    di.innerHTML = "";
  }

  sp.addEventListener("click", strike);
  b.addEventListener("click", del);
}

btn2.addEventListener("click", add1);
