
let tg = window.Telegram.WebApp;
let buy = document.getElementById("buy");
let order = document.getElementById("order");

buy.addEventListener("click", () => {
    document.getElementById("main").style.display = "none";
    document.getElementById("form").style.display = "block";

    let msg = '';
    for (let key in tg.initDataUnsafe.user) {
        msg += 'user.' + key + ' = '+ tg.initDataUnsafe.user.key + \n';
    }
    msg += 'query_id: ' + tg.initDataUnsafe.query_id;
    msg += 'auth_date: ' + tg.initDataUnsafe.auth_date;
//    query_id
//    user:
//        first_name
//        last_name
//        username
//        language_code
//        is_premium
//        allows_write_to_pm
//
//    auth_date
//    hash

    alert(msg);

//    alert('InitData: ' + tg.initData);

    document.getElementById("user_name").value = tg.initDataUnsafe.user.first_name + " " + tg.initDataUnsafe.user.last_name;
});

order.addEventListener("click", () => {
    return;
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
