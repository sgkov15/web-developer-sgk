function color_button(x) {                       // функция для изменения параметров кнопки
    if ("INPUT"==event.target.tagName) event.target.className=x;
}              //проверяет если событие произошло в теги INPUT – то этому элементу применяется стиль от class, чье имя х

