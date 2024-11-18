// 1. Написать функцию, которая принимает 2 числа и возвращает - 1, если первое меньше, чем второе; 1 – если первое
// больше, чем второе; и 0 – если числа равны.

// const checkEquality = (firstNum, secondNum) =>
// {
//     if (firstNum > secondNum) {
//         alert(1);
//     }

//     if (firstNum < secondNum) {
//         alert(-1);
//     }

//     if (firstNum === secondNum) {
//         alert(0);
//     }
// }
// const firstNum = prompt("Enter the first number");
// const secondNum = prompt("Enter the second number");

// const res = checkEquality(firstNum, secondNum);
// alert(res);

// 2. Написать функцию, которая вычисляет факториал переданного ей числа.

// const FactFinder = (factNum) =>
// {
//     let factRes = factNum;

//     for (let i = 1; i < factNum; i += 1) {
//         factRes *= i;
//     }
//     return factRes;
// }

// const factNum = prompt("Enter a number");
// factRes = FactFinder(factNum);

// alert(factRes);


// 3. Написать функцию, которая принимает три отдельные
// цифры и превращает их в одно число.Например: цифры
// 1, 4, 9 превратятся в число 149.

// const allDig= (f, s, t) =>
// {
//     const res = f * 100 + s * 10 + t * 1;
//     return res;
// }

// let firstDigit = prompt("Enter the first digit");
// let secondDigit = prompt("Enter the second digit");
// let thirdDigit = prompt("Enter the third digit");

// const res = allDig(firstDigit, secondDigit, thirdDigit);


// alert(res);

// 4. Написать функцию, которая принимает длину и ширину
// прямоугольника и вычисляет его площадь.Если в функцию
// передали 1 параметр, то она вычисляет площадь квадрата.

// const AreaFinder = (l, w) =>
// {
//     let area = l * w;

//     if (w == 0) {
//         area = l * 4;
//     }
//     if (l == 0) {
//         area * w * 4;
//     }
//     return area;

// }

// const length = prompt("length:")
// const width = prompt("width:")

// const area = AreaFinder(length, width);

// alert(area);

// 5. Написать функцию, которая проверяет, является ли переданное ей число совершенным.Совершенное число – это
// число, равное сумме всех своих собственных делителей.

const isPerfNum = (n) => {

    let divisiblesSum = 0;

    for (let i = 0; i < n; i += 1) {
        if (n % i == 0) {
            divisiblesSum += i;
        }
    }
    return divisiblesSum === n;
};

// const num = prompt("is perfect num: ")
// let res = isPerfNum(num);
// alert(res);

// 6. Написать функцию, которая принимает минимальное и
// максимальное значения для диапазона, и выводит только
// те числа из диапазона, которые являются совершенными.
// Используйте написанную ранее функцию, чтобы узнавать,
//     совершенное число или нет.

// const allPerfNums = (s, e) =>
// {
//     s = Number(s);
//     e = Number(e);

//     for (let i = s; i < e; i++) {
//         if (isPerfNum(i))
//             {
//             alert(i);
//         }
//     }

// }

// const startRange = prompt("start");
// const endRange = prompt("end");
// allPerfNums(startRange, endRange);


// 7. Написать функцию, которая принимает время(часы, минуты, секунды) и выводит его на экран в формате «чч: мм: сс».
// Если при вызове функции минуты и / или секунды не были
// переданы, то выводить их как 00.

// const clock = (h, m = 0, s = 0) =>
// {

//     h = Number(h);
//     m = Number(m);
//     s = Number(s);

//     let newM;
//     let newS;

//     if(s >= 60)
//     {
//         newS = s % 60;
//         m += (s - newS) / 60;
//     }

//     if (m >= 60) {
//         newM = m % 60;
//         h += (m - newM) / 60;
//     }



//     let finalHour = h;
//     let finalMinute = newM;
//     let finalSecond = newS;

//     if(h < 10)
//     {
//         finalHour = '0' + h;
//     }
//     else
//     {
//         finalHour = ''+ h;
//     }

//     if (newM < 10) {
//         finalMinute = '0' + newM;
//     }
//     else
//     {
//         finalMinute = '' + newM;
//     }

//     if (newS < 10) {
//         finalSecond = '0' + newS;
//     }
//     else
//     {
//         finalSecond = '' + newS;
//     }

//     const res = finalHour + ":" + finalMinute + ":" + finalSecond;
//     return res;
// }

// const h = prompt("hour");
// const m = prompt("minutes");
// const s = prompt("seconds");
// let res = clock(h, m, s);
// alert(res);


// 8. Написать функцию, которая принимает часы, минуты и
// секунды и возвращает это время в секундах.

// const allSeconds = (h, m, s) =>
// {
//     let res = h * 3600 + m * 60 + s* 1;
//     return res;
// }

// const h = prompt("hour");
// const m = prompt("minutes");
// const s = prompt("seconds");
// let res = allSeconds(h, m, s);
// alert(res);

// 9. Написать функцию, которая принимает количество секунд,
//     переводит их в часы, минуты и секунды и возвращает в
// виде строки «чч: мм: сс».


// const clock = (s) =>
// {

//     s = Number(s);
//     let m = 0;
//     let h = 0;
//     let newM;
//     let newS;

//     if(s >= 60)
//     {
//         newS = s % 60;
//         m += (s - newS) / 60;
//     }

//     if (m >= 60) {
//         newM = m % 60;
//         h += (m - newM) / 60;
//     }



//     let finalHour = h;
//     let finalMinute = newM;
//     let finalSecond = newS;

//     if(h < 10)
//     {
//         finalHour = '0' + h;
//     }
//     else
//     {
//         finalHour = ''+ h;
//     }

//     if (newM < 10) {
//         finalMinute = '0' + newM;
//     }
//     else
//     {
//         finalMinute = '' + newM;
//     }

//     if (newS < 10) {
//         finalSecond = '0' + newS;
//     }
//     else
//     {
//         finalSecond = '' + newS;
//     }

//     const res = finalHour + ":" + finalMinute + ":" + finalSecond;
//     return res;
// }

// const s = prompt("seconds");
// let res = clock(s);
// alert(res);

// 10. Написать функцию, которая считает разницу между датами.
// Функция принимает 6 параметров, которые описывают 2
// даты, и возвращает результат в виде строки «чч: мм: сс».При
// выполнении задания используйте функции из предыдущих 2 - х заданий: сначала обе даты переведите в секунды,
//     узнайте разницу в секундах, а потом разницу переведите
// обратно в «чч: мм: сс».


function dateToSeconds(h, m, s) {
    return h * 3600 + m * 60 + s * 1;
}


function timeDifference(h1, m1, s1, h2, m2, s2) {

    const time1S = dateToSeconds(h1, m1, s1);
    const time2InS = dateToSeconds(h2, m2, s2);

    const diff = time1S - time2InS;


    return clock(diff);
}


const clock = (s) => {
    s = Number(s);
    let m = 0;
    let h = 0;
    let newM;
    let newS;

    if (s >= 60) {
        newS = s % 60;
        m += (s - newS) / 60;
    } else {
        newS = s;
    }

    if (m >= 60) {
        newM = m % 60;
        h += (m - newM) / 60;
    } else {
        newM = m;
    }

    let finalHour = h;
    let finalMinute = newM;
    let finalSecond = newS;

    if (h < 10) {
        finalHour = '0' + h;
    } else {
        finalHour = '' + h;
    }

    if (newM < 10) {
        finalMinute = '0' + newM;
    } else {
        finalMinute = '' + newM;
    }

    if (newS < 10) {
        finalSecond = '0' + newS;
    } else {
        finalSecond = '' + newS;
    }

    const res = finalHour + ":" + finalMinute + ":" + finalSecond;
    return res;
}


const h1 = prompt("#1 Enter hours");
const m1 = prompt("#1 Enter minutes ");
const s1 = prompt("#1 Enter seconds");

const h2 = prompt("#2 Enter hours");
const m2 = prompt("#2 Enter minutes");
const s2 = prompt("#2 Enter seconds");


let result = timeDifference(h1, m1, s1, h2, m2, s2);
alert("Difference: " + result);
