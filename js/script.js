'use stict';

// Задание 1
// Использовать typeof для проверки

let cost = Number(prompt('Введите цену товара:', [100]));
let stack = Number(prompt('Введите количество денег:', [100]));

// Проверка на корректность ввода
if (isNaN(cost) || isNaN(stack) || cost < 0 || stack < 0) {
    alert('Неверный формат ввода');
} else {
    if (cost === stack) {
        alert('Покупка совершена');
    } else if (stack < cost) {
        let noenough = cost - stack;
        alert(`Для покупки не хватает ${noenough} р.`);
    } else {
        let change = stack - cost;
        alert(`Покупка совершена. Сдача ${change} р.`);
    }
}

// Задание 2
let
    number = +prompt('Введите число:');
if(number > 0){
    alert('1');
}else if(number == 0){
    alert('0');
} else {
    alert('-1');
}

// Задание 3
let result;
let a = +prompt('a');
let b = +prompt('b');
result = (a + b < 4) ? 'Мало' : 'Много';
alert(result);

// Задание 4
let message;
let login = prompt('login');
login == 'Сотрудник' ? alert('Привет') : login == 'Директор' ? alert('Здравствуйте') : login == '' ? alert('Нет логина') : '';

// Задание 5
let login_1 = prompt('Логин:');
if(login_1 == 'Админ'){
    let password = prompt('Пароль');
    if(password == 'Я главный'){
        alert('Здравствуйте');
    } else {
        alert('Неверный пароль');
    }
} else if(login_1 == null){
    alert('Отменено');
} else {
    alert('Я вас не знаю');
}