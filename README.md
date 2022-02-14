# keyValueDB

```js
import FileKV from '../FileKV.js';
 
const map = new FileKV('/path/to/dbfile');
// Получение значения по ключу
map.get('key'); // 'value'
map.get('unknownkey'); // null
// Получение значения и дефолт
map.get('unknownkey', 'default value'); // 'default value'
// Установка и обновление ключа
map.set('key2', 'value2');
map.get('key2'); // 'value2'
// Удаление ключа
map.unset('key2');
map.get('key2'); // null
map.set('key', 'value');
// Возврат всех данных из базы(возвращается новый объект)
map.toObject(); // { key: 'value' }
```

```js
import InMemoryKV from '../InMemoryKV.js';
 
const map = new InMemoryKV({ key: 10 });
map.get('key'); // 10
```
swapKeyValue — полиморфная функция, она может работать с любой реализацией key-value, имеющей такой же интерфейс.
```js
import InMemoryKV from '../InMemoryKV.js';
 
const map = new InMemoryKV({ key: 10 });
map.get('key'); // 10
```
