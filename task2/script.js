const consoleLog = document.querySelector("#consoleLog");
consoleLog.onclick = function () {
    //тело обработчика
    alert("Метод выводы сообщения на веб-консоль")
    // конец тела обработчика
};


const exampleConsole = document.querySelector("#exampleConsole");
exampleConsole.textContent = ("Пример использования команды console.log");
console.log ("Текст изменен на Пример использования команды console.log");

const exampleAlert = document.querySelector("#exampleAlert");
exampleAlert.textContent = ("Пример использования команды alert");
console.log ("Текст изменен на Пример использования команды alert");

const examplePrompt = document.querySelector("#examplePrompt");
examplePrompt.textContent = ("Пример использования команды prompt");
console.log ("Текст изменен на Пример использования команды prompt");