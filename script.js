
let tg = window.Telegram.WebApp;
let buy = document.getElementById("buy");
let order = document.getElementById("order");

buy.addEventListener("click", () => {
    document.getElementById("main").style.display = "none";
    document.getElementById("form").style.display = "block";
    alert(tg.initDataUnsafe);
    document.getElementById("user_name").value = tg.initDataUnsafe.user.first_name + " " + tg.initDataUnsafe.user.last_name;
});

order.addEventListener("click", () => {
    document.getElementById("error").innerText = '';
    let name = document.getElementById("user_name").value;
    let email = document.getElementById("user_email").value;
    let phone = document.getElementById("user_phone").value;

    for (let item of [name, email, phone]) {
        if (!item) {
            document.getElementById("error").innerText = 'Присутствуют пустые значения!';
            return;
        } else {
            if (item.length < 5) {
                document.getElementById("error").innerText = 'Ошибка: ' + item;
                return;
            }
        }
    }

    let data = {
        name: name,
        email: email,
        phone: phone
    }

    let message = '';
    for (let key in data) {
        message += key + ': ' + data[key] + '\n'
    }

    tg.close();
});
