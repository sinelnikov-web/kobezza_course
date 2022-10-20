

# Односвязные списки

### Однонаправленный список:
```js
const list = new LinkedList();

// Добавление элементов
list.push(1)
list.push(2)
list.push(3)

// Перемещение по элементам
list.first.value // 1
list.first.next.value // 2
list.first.next.next.value // 3

// Поиск элементов
list.find((value, index) => value === 1) // 1
list.find((value, index) => value === 5) // null
list.findIndex(3) // 2
list.findIndex(5) // -1

// Извлечение элементов 
list.pop() // 3
list.shift() // 1

// Итераторы
const items = list.items() // [{next: ..., value: ...}, ...]
const values = list.values() // [1, 2, ...]

// Очистка списка
list.clean()

```