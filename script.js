
let tg = window.Telegram.WebApp;
let buy = document.getElementById("buy");
let order = document.getElementById("order");

buy.addEventListener("click", () => {
    document.getElementById("main").style.display = "none";
    document.getElementById("form").style.display = "block";

    let msg = '';
    msg += 'user:\n'
    msg += '\tfirst_name: ' + tg.initDataUnsafe.user.first_name + '\n'
    msg += '\tlast_name: ' + tg.initDataUnsafe.user.last_name + '\n'
    msg += '\tusername: ' + tg.initDataUnsafe.user.username + '\n'
    msg += '\tlanguage_code: ' + tg.initDataUnsafe.user.language_code + '\n'
    msg += '\tis_premium: ' + tg.initDataUnsafe.user.is_premium + '\n'
    msg += '\tallows_write_to_pm: ' + tg.initDataUnsafe.user.allows_write_to_pm + '\n'
    msg += '\n'
    msg += 'query_id: ' + tg.initDataUnsafe.query_id + '\n';
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

    document.getElementById("first_name").value = tg.initDataUnsafe.user.first_name;
    document.getElementById("last_name").value = tg.initDataUnsafe.user.last_name;
    document.getElementById("username").value = tg.initDataUnsafe.user.username;
    document.getElementById("language_code").value = tg.initDataUnsafe.user.language_code;
    document.getElementById("is_premium").value = tg.initDataUnsafe.user.is_premium;
    document.getElementById("allows_write_to_pm").value = tg.initDataUnsafe.user.allows_write_to_pm;
    document.getElementById("query_id").value = tg.initDataUnsafe.query_id;
    document.getElementById("auth_date").value = tg.initDataUnsafe.auth_date;

});

order.addEventListener("click", () => {
    return;
    document.getElementById("error").innerText = '';

    let first_name = document.getElementById("first_name").value;
    let last_name = document.getElementById("last_name").value;
    let uesrname = document.getElementById("username").value;
    let language_code = document.getElementById("language_code").value;
    let is_premium = document.getElementById("is_premium").value;
    let allows_write_to_pm = document.getElementById("allows_write_to_pm").value;
    let query_id = document.getElementById("query_id").value;
    let auth_date = document.getElementById("auth_date").value;

//    for (let item of [name, email, phone]) {
//        if (!item) {
//            document.getElementById("error").innerText = 'Присутствуют пустые значения!';
//            return;
//        } else {
//            if (item.length < 5) {
//                document.getElementById("error").innerText = 'Ошибка: ' + item;
//                return;
//            }
//        }
//    }

    let data = {
        'first_name': first_name,
        'last_name': last_name,
        'username': username,
        'language_code': language_code,
        'is_premium': is_premium,
        'allows_write_to_pm': allows_write_to_pm,
        'query_id': query_id,
        'auth_date': auth_date
    }

    let message = '';
    for (let key in data) {
        message += key + ': ' + data[key] + '\n';
    }
    alert(message);

//    tg.sendData(JSON data)
    enableClosingConfirmation();
    tg.close();
});
