// Написать функцию transformArray(arr, index1, index2, adding), принимающий в качестве аргументов:

// arr - массив строк, например [“fngp”, ”kgei”, ”fpos”, ”clfw”]
// index1 и index2 - числа - индексы в массиве (например 2, 3), элементы под которыми нужно поменять между собой местами (fpos и clfw нужно поменять местами)
//  adding - строка, которую необходимо дописать в конец к каждому элементу массива 

// и возвращающую массив с учетом указанных трансформаций.
// Например, transformArray([“fngp”, ”kgei”, ”fpos”, ”clfw”], 2, 3, “green”) должно вернуть [“fngpgreen”, ”kgeigreen”, ”clfwgreen”, ”fposgreen”]


function transformArray(arr, index1, index2, adding) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];

    let resultArr = arr.map(function (item) {
        return item + adding;
    });
    console.log(resultArr);
};

let array = ["aref1", "qwer2", "sarg3", "fdhg4"];
transformArray(array, 0, 3, "adding");


// Нужно написать функцию, в которую  мы передаем число, суммируем цифры данного числа до тех пор,  пока не останется одна цифра, вот так:

function lastNumber(number) {
    let numberArray = splitToArray(number);
    number = numberArray.reduce((a, b) => a + b, 0);

    function splitToArray(number) {
        return Array.from(String(number), Number);
    }

    return number > 9 ? lastNumber(number) : number;
}

console.log(lastNumber(2));
console.log(lastNumber(17));
console.log(lastNumber(942));
console.log(lastNumber(132189));




///////////DZ-2

//*1) Вывести в консоль через цикл while значения от 0 до 50 включительно
let i = 0;
while (i < 50) {
    console.log(i++);
}


//*2) Вывести в консоль только четные числа в диапазоне от 0 до 100, используя цикл for
for (let i = 0; i <=100; i++) {
    if (i % 2 === 0) {
        console.log( i );
    }
}


//*3) Написать функцию, в которой необходимо сложить все числа массива из 20 элементов и вывести результат в alert
let arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
];

function func(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    alert(sum);
}
func(arr);

//*4) Возвести 2 в 8 степень с помощью цикла while
let num = 2;
let count = 1;
while (count <= 3) {
    num = num ** 2;
    count++;
}
console.log(num);


//*5) Найти самую большую цифру в целом числе
let integer = prompt("Enter an integer: ");
let largestNum = Number(integer[0]);
for (let i = 0; i < integer.length; i++) {
    if (Number(integer[i]) > largestNum) {
        largestNum = Number(integer[i]);
    }
}
console.log(largestNum);




// Есть массив с неизвестным кол-вом элементов. Как вывести последний элемент?

let arr2 = [1, 23, 234, 34, 23, 4, 24, 243];
let length = arr2.length
console.log(arr2.pop());


// Напишите код, в котором предпоследнему элементу задается значение “предпоследний элемент”.

arr2[length-2] = "Predposlidnij Element";
console.log(arr2);


// Задача из 5 шагов-строк: Создайте массив styles с элементами «Джаз», «Блюз».

let styles = ["Jazz", "Blues"];
styles.splice(3,0,"Rock-n-roll");
styles.splice(styles.length-2, 1, "Classic");
alert(styles.shift());
styles.splice(0,0,"Rap", "Reggae");
console.log(styles);


// Существует массив из какого-то количества элементов строковых данных. Необходимо создать новый массив из длин каждого из элементов исходного массива.

let months = ["Jan", "Fed", "Mart", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let monthsLength = months.map(month => {
    return month.length;
});
console.log(monthsLength);


//  Создайте калькулятор для введённых значений

function calc() {
    let tempo = 15;
    let arr5 = 15;
    let age = 15;
    let iter = 15;
    let summ = 15;
    do {
        age = Number.parseInt(prompt("Enter numb:", 0));
        arr5[iter] = age;
        iter++;
        summ += age;
    } while (age !== tempo);

    console.log(summ);
};





////////////////////1Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b.


function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    };
};

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1

console.log(min(2, 5), min(3, -1), min(1, 1));

// 2 Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
  } else {
    alert( pow(x, n) );
  }







////////////////////1Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b.


function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    };
};

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1

console.log(min(2, 5), min(3, -1), min(1, 1));

// 2 Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
  } else {
    alert( pow(x, n) );
  }


  ///// 3 Напишите функцию isEven(n), которая принимает один параметр, число, и возвращает, четное ли оно.

function isEven(n) {
    if(n == 0) {
      return 'true';
    } else if (n == 1) {
        return 'false';
    } else 
        return isEven(n-2);
};

console.log(isEven(n));


/// 4 -------------

// 7 Написать функцию transformArray(arr, index1, index2, adding), принимающий в качестве аргументов:

function transformArray(arr, index1, index2, adding) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];

  let resultArr = arr.map(function (item) {
    return item + adding;
  });
  console.log(resultArr);
}

let array = ["qefqewf", "wregw", "afg", "qfef"];
transformArray(array, 0, 3, "adding");


// 8  Нужно написать функцию, в которую  мы передаем число, суммируем цифры данного числа до тех пор,  пока не останется одна цифра, вот так:

function lastNumber(number) {
  let numberArray = splitToArray(number);
  number = numberArray.reduce((a, b) => a + b, 0);

  function splitToArray(number) {
    return Array.from(String(number), Number);
  }

  return number > 9 ? lastNumber(number) : number;
}

console.log(lastNumber(2));
console.log(lastNumber(17));
console.log(lastNumber(942));
console.log(lastNumber(12431234));




/**
Необходимо в комментарияx написать перед каждой строчкой кода что будет лежать в lexical environment(как мы делали в классе)
*/

let num = 10;

const value = getValue();
//1) value = Nan, т.к. в getValue не было передано значения
function getValue(num) {
  // value не передает значения, значит num будет undefined
  // newValue передает 30, значит num = 30
    return 5 + num;
}

const newValue = getValue(30);
// newValue = 35


let text = 'some text';

let otherText = 'other text';

let swapText = (text) => {
    let temp = otherText;
    //1) локальная temp = 'other text'
    unSwapText();
    otherText = text;
    //3) локальная otherText = 'param text' (переданной в функцию)

    function unSwapText() {
        otherText = temp;
        //2) локальная otherText = 'other text'
    }
};
//4) глобальная otherText не изменилась
swapText('param text');

let a = 5;
let b = 10;

function sum(a, b) {
    return a + b;
}

const subtraction = (a, b) => {
    //2) a = 5
    a = a + 4;
    //3) локально a меняется на 9
    function doSubtraction(a) {
      //5) локальная a = 9, глобальная b = 10 = результат -1
        return a - b;
    }
    //4) локальная a = 9, глобальная b = 10
    return doSubtraction(a);
};

if (a > b) {
    sum(a, b);
} else {
  // 1) Сравниваются глобальные переменные a = 5 и b = 10
    subtraction(a, b);
}
console.log(a, b)
//Глобально a все еще равна 5, b равна 10



/* 1) - Найти в документе элемент с id “my-first-elem”
      - Найти все элементы с классом “container”
      - Найти первый элемент с классом “wrapper”
      - Найти первые 2 элемента с классом “element” */

let myFirstElement = document.getElementById("my-first-element");
      console.log(myFirstElement);
      
let elementsClassContainer = document.getElementsByClassName("container");
      console.log(elementsClassContainer);
      
let elementClassWrapper = document.querySelector(".wrapper");
      console.log(elementClassWrapper);
      
let elementsClassElement = document.querySelectorAll(".element");
      for (let i = 0; i < 2; i++) {
        console.log(elementsClassElement[i]);
      }
      
/* 2) Создать элемент p с классом “text” и с текстом - “Это всего лишь текст”, после него вставьте div с классом “alert” и с текстом “А это сообщение об ошибке” с красным фоном, белым текстом и полями (padding) размером 20px */
      
let pClassText = document.createElement("p");
      pClassText.classList.add("text");
      pClassText.innerText = "Это всего лишь текст";
      document.body.append(pClassText);
      
let divClassAlert = document.createElement("div");
      divClassAlert.classList.add("alert");
      divClassAlert.innerText = "А это сообщение об ошибке";
      divClassAlert.style.background = "red";
      divClassAlert.style.color = "white";
      divClassAlert.style.padding = "20px";
      pClassText.after(divClassAlert);
      
/* 3) Создать список элементов с помощью тега <ol> со значениями из массива строк: 
["Viktor", "Tatiana", "Eduard", "Michael", "Denis", "Peter", "Ann", "Dmitry", "Sergey", "Ivan", "Alan"]
Каждый четный элемент должен иметь css класс “even” и иметь зеленый фон, а нечетный - “odd” и иметь синий фон.
*Если это пользователь, у которого в имени встречаются минимум 2 одинаковые буквы без учета регистра (например, Peter, Tatiana) - цвет текста должен стать белым */
      
let names = [
        "Viktor",
        "Tatiana",
        "Eduard",
        "Michael",
        "Denis",
        "Peter",
        "Ann",
        "Dmitry",
        "Sergey",
        "Ivan",
        "Alan",
      ];
      
let listContainer = document.createElement("ol");
      document.body.append(listContainer);
      
  function isRepeat(str) {
    for (let i = 0; i < str.length; i++) {
      let k = 1;
          for (let j = i + 1; j < str.length; j++) {
            if (str[i].toLowerCase() === str[j].toLowerCase()) {
              k++;
            }
            if (k > 1) {
              return true;
            }
          }
        }
        return false;
      }
      
    for (let i = 0; i < names.length; i++) {
        let elementOfList = document.createElement("li");
        elementOfList.innerText = names[i];
        listContainer.append(elementOfList);
      
        i % 2 === 0
          ? elementOfList.classList.add("even")
          : elementOfList.classList.add("odd");
        if (isRepeat(names[i])) {
          elementOfList.style.color = "white";
        }
      }
      
/* 4) Напишите функцию showMessage, которая будет вставлять на страницу div с классом “message” на странице с указанными аргументами: текст сообщения, цвет фона сообщения, положение от верхнего края страницы (css свойство top)  и положение от левого края страницы (css свойство left)
Пример вызова функции:  showMessage(“Всем привет”, ‘yellow’, 100, 50);
Примечание: Задать для .message позиционирование fixed, для корректного расчета положения сообщения
* Количество сообщений на странице не может быть больше 3-х. Если на странице 3 сообщения и мы вызываем showMessage(), то 1 сообщение необходимо удалить, а 2,3 и 4 должны остаться. 
** Необходимо проверить, есть ли у нас уже на странице сообщение в таких же координатах (такие же и top, и left). Если есть - занять позицию +25px left и top. Если и в этот раз у нас имеется сообщение в данной позиции - повторять процедуру, пока не найдем свободное место. */
      
function setElement(message, bacgroundColor, top, left) {
        let elementP = document.createElement("div");
        elementP.classList.add("message");
      
        elementP.style.backgroundColor = bacgroundColor;
        elementP.style.top = top + "px";
        elementP.style.left = left + "px";
      elementP.style.position = "fixed";
        elementP.innerText = message;
      
        document.body.append(elementP);
      }
      
      let showMessageCount = (function () {
        let count = 0;
        return function showMessage(message, bacgroundColor, top, left) {
          if (count < 3) {
            setElement(message, bacgroundColor, top, left);
            count++;
          } else {
            let firstElem = document.querySelector(".message");
            firstElem.remove();
            setElement(message, bacgroundColor, top, left);
          }
        };
      })();
      showMessageCount("Hello", "yellow", "100", "50");
      showMessageCount("Hello", "yellow", "100", "100");
      showMessageCount("Hello", "yellow", "100", "150");
      showMessageCount("Hello", "yellow", "100", "200");
      
/* 5) Динамическое создание списка:
                - Запрашивайте число у пользователя с помощью prompt.
                - Создавайте элемент <li> и добавляйте его к <ul>.
                - Каждый следующий элемент <li> списка должен должен иметь значение суммы всех предыдущих элементов + 
                  введенного значения
                - Процесс прерывается, когда пользователь нажимает Esc, вводит пустую строку или не числовое значение
                  Все элементы должны создаваться динамически.
                  Например, пользователь ввел 3, затем 5, затем 9, затем 15, затем 1, а затем нажал esc (или ввели не число), 
                  тогда на странице должно быть:
                  <ul>
                    <li>3</li> 3
                    <li>8</li> // 3 + 5
                    <li>20</li> // 3 + 8 + 9
                    <li>46</li> // 3 + 8 + 20 + 15
                    <li>78</li> // 3 + 8 + 20 + 46 + 1
                  </ul> */
      
      let numbers = [];
      let resultNumbers = [];
      
      for (let i = 0; ; i++) {
        let number = prompt("Введите число: ", "");
        if (number === null || number === "" || isNaN(number) === true) {
          break;
        } else {
          numbers.push(Number(number));
        }
      }
      
      function getList(arr) {
        let ul = document.createElement("ul");
        document.body.append(ul);
      
        for (let i = 0; i < arr.length; i++) {
          let sum = resultNumbers.reduce((prev, curr) => prev + curr, 0) + arr[i];
          resultNumbers[i] = sum;
        }
        for (let i = 0; i < resultNumbers.length; i++) {
          let li = document.createElement("li");
          li.innerText = resultNumbers[i];
          ul.append(li);
        }
      }
      
      getList(numbers);







/** 1 ////////////// 7  //////
Создать форму в HTML с 2 полями ввода и кнопкой отправки. Получить эту форму на событие отправки этой формы (т е нажатие кнопки), сделать кнопку неактивной и очистить форму
*/

const form = document.forms["form"];
const button = form.elements["submit"];
const input1 = form.elements["text1"];
const input2 = form.elements["text2"];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(input1.value);
  console.log(input2.value);
  button.disabled = true;
});


/** 2
Создать форму в HTML с полем ввода и кнопкой отправки, на submit формы менять значение поля ввода на произвольное

*/

let form2 = document.forms.form2,
  text2_1 = form2.elements.text2_1,
  submit2 = form2.elements.submit2;

form2.addEventListener("submit", (event) => {
  event.preventDefault;
  text2_1.value = "new text";
});


 
/** 3
Создать форму в HTML с полем ввода, несколькими checkbox и кнопкой отправки. На submit формы вывести значения поля ввода и имена всех отмеченных полей checkbox.
*/

let form3 = document.forms.form3,
  text3_1 = form3.elements.text3_1,
  checkbox3 = form3.elements.checkbox3,
  submit3 = form3.elements.submit3;

form3.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(text3_1.value);
   for (let i = 0; i < checkbox3.length; i++) {
     if (checkbox3[i].checked) {
       console.log(checkbox3[i].value);
     }
   }
});


/** 4
Создать форму в HTML с полем ввода и кнопкой отправки. На submit формы, если поля ввода пустое, делать фокус на поле ввода.

*/

let form4 = document.forms.form4,
  text4_1 = form4.elements.text4_1,
  submit4 = form4.elements.submit4;

form4.addEventListener("submit", (event) => {
  event.preventDefault();
    if (text4_1.value === "") {
      text4_1.focus();
    }
});







/** 1 //////// 8 /////////////
Выводить значения скрола с верху страницы на событие прокрутки страницы.
*/

let div = document.getElementById("div");

div.addEventListener("click", function (event) {
    console.log(this.clienttWidth, this.clientHeight);
    console.log(
        "scroll width",
        this.clienttWidth,
        "scroll height",
        this.clientHeight);
});

window.addEventListener("scroll", function () {
    console.log(window.scrollY);
});

div.addEventListener('click', function () {
    window.scrollBy(0, 40);
});


/** 2
При скроле, в момент активного 2-го экрана покажите фиксированную кнопку внизу страницы, которая до этого будет являться скрытой.
*/

let secondExs = document.querySelector(".secondExs"),
    btnSecondExp = document.querySelector(".btnSecondExp");

window.addEventListener("scroll", function () {
    window.pageYOffset > document.documentElement.clientHeight
    ? btnSecondExp.classList.remove("displayNone")
    : btnSecondExp.classList.add("displayNone")
});

/** 3
Создать страницу с прокруткой. В конце страницы создать кнопку “Перейти в начало страницы”, которая скролит страницу в самое начало.
В середине страницы создать кнопку, по нажатию на которую, страница прокручивается так, чтобы эта кнопка была сверху видимой области.
*/

let btnUp = document.getElementById('btnUp');
let btnMiddle = document.getElementById("btnMiddle");

btnUp.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

btnMiddle.addEventListener("click", function () {
  btnMiddle.scrollIntoView();
});


/** 4
Реализовать TABS-блок.
При клике по по вкладке, должен показываться соответствующий текст:
*/

let tabs = document.querySelectorAll(".tab"),
    texts = document.querySelectorAll(".text");

tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => {
        tabs.forEach((tab, index) => {
            tab.classList.remove("active");
            texts[index].classList.remove("active");
        });
            tabs[i].classList.add("active");
            texts[i].classList.add("active");
    });
});


/** 5
Реализовать подчёркивание пункта меню, соответствующего текущему экрану.
Например, если мы находимся на разделе “контакты”, вкладка конакты в фиксированном меню должна быть активной и т.д.
*/

window.addEventListener("scroll", () => {
    let scrollDistance = window.scrollY;

    document.querySelectorAll(".contentText").forEach((element, index) => {
        if (
            element.offsetTop - document.querySelector(".menu").clientHeight <= scrollDistance
        ) {
            document.querySelectorAll(".menu a").forEach((element) => {
                if (element.classList.contains("active")) {
                    element.classList.remove("active");
                }
            });

            document.querySelectorAll(".menu li")
            [index].querySelector("a").classList.add("active");
        }
    });
});

/** 6
Создать объект человека со свойствами: имя, возраст и методом sayIntro(), в котором Вы скажете (с помощью alert()) как Вас зовут и сколько Вам лет.
*/

let person = {
    name: "Alexander",
    age: 28,
    sayIntro () {
        alert(this.name + " " + this.age);
    }
}

person.sayIntro();


/** 7
Создать объект car с набором свойств по желанию. Вывести в цикле все ключи и значения объекта.
*/

let car = {
    brand: "Honda",
    model: "Civic",
    color: "white",
    age: "12",
};

for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}


/** 8
Создать объект user с свойствами name, email, phone, id. Скопировать этот объект со всеми свойствами в новую переменную newUser.
*/

let user = {
    name: "Alxndr",
    email: "mymail@test.com",
    phone: "+375293434555",
    id: "123",
};

let newUser = {};
Object.assign(newUser, user);


/** 9
Создать объект circle со свойствами: radius, color. 
Также создать в объекте метод   calculateCircumference(), при вызове которого, в консоль выводится длина окружности (2 * число пи * радиус).
*/

let circle = {
    radius: 45,
    color: "red",
    calculateCircumference() {
        let l = 2 * Math.PI * circle.radius;
        console.log(l.toFixed(2));
    },
};
circle.calculateCircumference();









/** 1 ////////// 9 //////////
Напишите функцию printMessage(n), которая выводит сообщения на экран каждые n секунд.
*/

function printMessage(n) {
    setInterval(() =>  {
        console.log("message");
    }, n);
};
printMessage(5000);



/** 2
Напишите функцию, которая выводит через 5 секунд на экран сообщение “прошло 5 секунд”
*/

function printMessage(n) {
    setInterval(() => {
        console.log("kazdue 5 sekund")
    }, 5000);
};
