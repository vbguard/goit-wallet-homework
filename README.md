# ТЗ №1 - CRUD operations for /costs

Скрипти апки:
базовий порт 5001

- "start": "node app.js",
- "develop": "nodemon app.js",
- "debug": "nodemon --inspect app.js",
- "prod": "NODE_ENV=production node app.js"

---

1. Взяти за основу все з папки [demo](https://github.com/vbguard/goit-wallet-homework/tree/hw-01);

2. Потрібно створити роут з CRUD операціями і модель(схему) (в майбутньому створений документ/рядок має бути пов'язаний з відповідним користувачем по ІД, добавити поле - `usedId` ) `transactions`, який буде вертати дані користувача по його `ID`.

request:

```
@method GET /api/v1/transactions/:userId
```

response:
Приклад успішної відповіді:

```json
{
  "status": "OK",
  "transactions": [{}, {}, {}]
}
```

3. Створити роут `operations/costs` - для запису витрат користувача.
   Потрібно записати у колекцію транзакцій цю операцію
   після успішної обробки вернути статус дії і створений "документ";

4. Створити роут `operations/income` - для запису доходів користувача, після успішної обробки вернути статус дії і створений "документ";

===========

Взаємо пов'язання:

- user
  - transaction
    - costs/income
