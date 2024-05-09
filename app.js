let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

function ButtonClicked(btn_obj) {
  if (tg.MainButton.isVisible) {
    tg.MainButton.hide();
  } else {
    let item_number = btn_obj.id.at(-1);
    tg.MainButton.setText("Вы выбрали товар " + item_number + "!");
    item = item_number;
    tg.MainButton.show();
  }
}

btn1.addEventListener("click", ButtonClicked);
btn2.addEventListener("click", ButtonClicked);
btn3.addEventListener("click", ButtonClicked);
btn4.addEventListener("click", ButtonClicked);
btn5.addEventListener("click", ButtonClicked);
btn6.addEventListener("click", ButtonClicked);

Telegram.WebApp.onEvent("mainButtonClicked", function () {
  tg.sendData(item);
});

// USERCARD

let usercard = document.getElementById("usercard");

let p = document.createElement("p");
p.innerText = `${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.first_name}`;

usercard.appendChild(p);
