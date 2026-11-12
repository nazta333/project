// Переключение экранов
function go(name) {
    document.querySelectorAll('.screen').forEach(function (s) {
        s.classList.remove('active');
    });
    document.querySelectorAll('.tab').forEach(function (t) {
        t.classList.remove('active');
    });

    var screen = document.getElementById('scr-' + name);
    if (screen) screen.classList.add('active');

    // Подсветка активного таба
    var tabs = document.querySelectorAll('.tab');
    var order = ['home', 'book', 'fav', 'profile'];
    var index = order.indexOf(name);
    if (index !== -1 && tabs[index]) tabs[index].classList.add('active');

    // Прокрутка вверх
    document.querySelector('.screens').scrollTop = 0;
}

// Выбор способа оплаты
function pickPay(el) {
    document.querySelectorAll('.pay').forEach(function (p) {
        p.classList.remove('selected');
    });
    el.classList.add('selected');
}
