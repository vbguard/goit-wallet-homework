# ТЗ №2 Аутентификация через соц сети facebook и google

Скрипти апки:
базовий порт 5001

- "start": "node app.js",
- "develop": "nodemon app.js",
- "debug": "nodemon --inspect app.js",
- "prod": "NODE_ENV=production node app.js"

---

Добавить аутентификацию для соц. сетей google и facebook.
- Разобраться с протоколом [OAuth2.0](https://auth0.com/docs/protocols/oauth2)
- Для этого Вам понадобится зарегистрировать приложение в самой соц. сети
- Добавить callback uri на странице приложения. 
- Зарегистрировать конфигурации для passport.js
- Реализовать обработчики `/auth/google`, `/auth/google/callback`, `/auth/facebook`', `/auth/facebook/callback`