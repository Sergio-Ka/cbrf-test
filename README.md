# Тестовое задание: Приложение для построения дерева и вывода его в формате JSON.

Проект построен с использованием методологии БЭМ с помощью библиотеки React (Create React App).
GitHubPages: https://sergio-ka.github.io/cbrf-test

## Возможности:
  1. Генерация начальной структуры из файла src/constants.js (переменная initialData).
  2. Возможно добавлять, изменять название, удалять любой узел (корневой нельзя удалить).
  3. Уровень вложенности может быть любой (в рамках разумного, так как используется рекурсивный подход).
  4. При изменении, добавлении, удалении любого узла изменения происходят так же в соседнем окне, где представлен JSON-файл (текст можно скопировать, но не изменять).

## Команды:

### Клонирование репозитория

git clone https://github.com/Sergio-Ka/cbrf-test.git

### Установка зависимостей

npm install

### Скрипты для сборки

#### `npm start`

дев сервер с перезагрузкой на лету по адресу [http://localhost:3000](http://localhost:3000).

#### `npm run build`

прод сборка в папку /build.