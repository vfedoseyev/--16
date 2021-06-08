const add = function (a, b) {
    return +a + +b;
}
/*
    Измените функцию add таким образом, чтобы
    все условия ниже вывели в консоль true
*/
console.log(add(1, 2) === 3);
console.log(add(1, '2') === 3);
console.log(add('1', 3) === 4);
console.log(add('2', '2') === 4);
console.log(add(NaN, 2) === 0);
console.log(add('', 2) === 2);
console.log(add() === 0);
console.log(add(true, true) === 2);

const arr = [{
    rating: "96%",
    cost: 41.3,
    name: "Дюна"
},
{
    rating: "96%",
    cost: 32.4,
    name: "Звёздный путь 4"
},
{
    rating: "96%",
    cost: 39.6,
    name: "Доктор Стрэндж и мультивселенная безумия"
},
{
    rating: "96%",
    cost: 33.7,
    name: "Круэлла"
},
{
    rating: "96%",
    cost: 33.0,
    name: "Смерть на Ниле"
},
{
    rating: "95%",
    cost: 38.3,
    name: "Вечные"
},
{
    rating: "94%",
    cost: 39.2,
    name: "Матрица 4"
},
{
    rating: "94%",
    cost: 40.8,
    name: "Главный герой"
},
{
    rating: "94%",
    cost: 41.2,
    name: "Морбиус"
},
{
    rating: "93%",
    cost: 32.1,
    name: "Веном 2"
},
{
    rating: "93%",
    cost: 38.7,
    name: "Джон Уик 4"
},
{
    rating: "92%",
    cost: 38.2,
    name: "Бэтмен"
},
{
    rating: "92%",
    cost: 38.3,
    name: "Тихое место 2"
},
{
    rating: "92%",
    cost: 36.0,
    name: "Не время умирать"
},
{
    rating: "91%",
    cost: 41.5,
    name: "Заклятие 3: По воле дьявола"
},
{
    rating: "90%",
    cost: 34.8,
    name: "Чёрная Вдова"
},
{
    rating: "90%",
    cost: 39.0,
    name: "Охотники за привидениями: Наследники"
},
{
    rating: "90%",
    cost: 34.0,
    name: "Аватар 2"
},
{
    rating: "88%",
    cost: 37.6,
    name: "Неизведанное: Удача Дрейка"
},
{
    rating: "88%",
    cost: 36.5,
    name: "Топ Ган: Мэверик"
},
];

const toNumber = function (film) {
    return Number(film.rating.slice(0, -1))
}
const newFilms = arr.map(function (film) {
    if (toNumber(film) >= 92)
        return {
            rating: film.rating,
            cost: film.cost * 2,
            name: film.name,
        }
    return film
});

console.log(newFilms);


/**
 * Отфильтруйте фильмы с рейтингом ниже 90%.
 * Почитать про фильтр можно тут - https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 */

const filteredFilms = arr.filter(function (film) {
    return toNumber(film) <= 90

});
console.log(filteredFilms);