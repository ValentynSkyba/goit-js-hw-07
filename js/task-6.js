// Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.

// Є input, у який користувач вводить бажану кількість елементів. Після натискання на кнопку Create має рендеритися (додаватися в DOM) колекція з відповідною кількістю елементів і очищатися значення в інпуті. При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова. Після натискання на кнопку Destroy колекція елементів має очищатися.

// Після натискання користувачем на кнопку Create треба провалідувати значення в input, воно має бути в межах від 1 до 100 включно. Тільки якщо воно задоволяє умову, мають додаватися нові <div> елементи в DOM.

// Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка приймає один параметр — число, що зберігає кількість елементів для рендеру.

// Функція має створювати стільки <div> елементів, скільки вказано в параметрі amount і додавати їх у DOM дочірніми елементами для div#boxes.

// Розміри першого <div> елемента мають бути 30px на 30px.
// Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
// Усі елементи повинні мати випадковий колір фону. Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.

// Для очищення колекції після натискання на кнопку Destroy створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector('#controls > input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  box: document.querySelector('#boxes'),
};

refs.createBtn.addEventListener('click', createBtnClick);
refs.destroyBtn.addEventListener('click', onDestroyBtnClick);

function createBtnClick(e) {
  const query = refs.input.value;

  if (query <= 0 || query > 100)
    return alert('Number should be in range from 1 to 100');
  if (query > 7)
    alert(
      "Умовою завдання є зона відображення у ширину 486px з відступом 16px між елементами. Отже, така зона відображення може вмістити лише 6 квадратів без втрати правильної геометричної форми. Все що є понад 7 перетворюється в прямокутники та виходить за зону видимості при встановленні показника в 11 елементів, у подальшому прямокутники перетворюються на лінії. Максимальне можливе відображення елементів - 27 об'єктів, понад 28 виникає критична помилка."
    );
  onDestroyBtnClick();

  const divArr = renderBox(+query);
  refs.box.prepend(...divArr);
}

function renderBox(num) {
  const divArr = [];
  let pixel = 20;

  for (let i = 1; i <= num; i++) {
    pixel += 10;
    const myElem = document.createElement('div');
    myElem.style.backgroundColor = getRandomHexColor();
    myElem.style.width = `${pixel}px`;
    myElem.style.height = `${pixel}px`;
    divArr.push(myElem);
  }
  return divArr;
}

function onDestroyBtnClick() {
  refs.box.innerHTML = '';
  refs.input.value = '';
}
