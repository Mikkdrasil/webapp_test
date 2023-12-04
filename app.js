let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#FF00FF";

let btn = document.getElementById("btn");

const { first_name, last_name, username } = window.Telegram.WebApp.initDataUnsafe.user;

document.getElementById("user_name").innerHTML = username;

btn.addEventListener("click", function(){
    tg.MainButton.setText("Сообщение отправлено!");
    tg.MainButton.show();
    tg.sendData("sendTestMessage");
});