let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#FF00FF";

const { first_name, last_name, username } = tg.initDataUnsafe.user;

const a = `Сообщение отправлено юзеру ${first_name}, ${last_name}, ${username}`

let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    tg.MainButton.setText(`Сообщение отправлено to ${username}`);
    tg.MainButton.show();
    tg.sendData("sendTestMessage");
});