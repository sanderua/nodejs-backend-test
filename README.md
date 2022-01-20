## Вводные

* Необходимо написать сервис, который генерирует карточки для пользователя.

* Каждая карточка имеет свой ID и состоит из 9-ти тайлов, у каждого из которых свой индекс от 0 до 8.

* Карточки описаны в файле app/settings/cards.js.

* Сервис принимает параметры userId и tilesNumber, где tilesNumber это количество тайлов, которые должны быть сгенерированы.

* Сервис возвращает массив объектов вида { id, index }, где id - ID карточки, index - индекс тайла.

* По сути сервис генерирует тайлы карточек.

* Один и тот же тайл может выпадать множество раз.

* Сервис должен сохранять информацию о том сколько тайлов, каких карточек есть у пользователя.

* Когда тайл выпадет впервые пользователь получает за него очки (user.score += tile.score).

* Пользователю доступен ограниченный набор карточек (поле availableCardsIds в таблице users).

* Поле availableCardsIds представляет из себя массив ID карточек в произвольном порядке, например [1, 5, 3, 7].

* availableCardsIds - это те карточки, тайлы которых могут выпадать пользователю.

* У каждой карточки и каждого тайла в карточках есть свой вес (поле weight).

* По весам карточек сервис рандомно определяет карточку, тайл которой должен выпасть.

* По весам тайла определяется конкретный тайл внутри выбранной карточки.

* Сервису доступно два хранилища данных: MySql 8.0 и Redis 6.2.

* Сервис предполагает высокие нагрузки. Производительность и используемый объем памяти в хранилищах имеют значение.

* Структура файла app/settings/cards.js может быть изменена под нужды алгоритма.

## Задача

В местах todo вставить необхидимый код

## Перед началом работы

1. Включить pre-commit hook:
```sh
$ npm run prepare
```

2. Скопировать .env.default в .env и прописать доступ к базам

3. Создать таблицу пользователей
```sh
$ npx knex migrate:up
```