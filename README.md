# Itirod_project
Климович Артём 853503
  
Тема 8 (Cocktail database)  

https://cocktail-database-cc73f.web.app

Лаб3  

В данной лабораторной работе реализована SPA implementation с помощью файла [router](project/router.js)  
В качестве web components реализовано 2 элемента, такие как:  
[блок коментария](project/models/CocktailHtml.js)  
[блок коктейля](project/models/CommentHtml.js)  
  
Также используется local Storage для хранения текущего авторизованного пользователя  
  
Из функционала реализовано:  
-[регистрация/авторизация](project/scripts/auth.js)  
-*через почту и пароль  
-*через Google  
-*через Facebook  
-[работа с firestore](project/scripts/storage.js)  
-*получение всех коктейлей  
-*получение коктейля по id  
-*получение отзывово о коктейле  
-*получение отметки пользователя(если такая существует) заданому коктейлю  
-*добавление отметки коктейлю  
-*добавление коктейля  
-*добавление отзыва  
  
Также реализована модель [Cocktail](project/models/Cocktail.js) для упрощения работы в скриптах и при записи/выгрузке в/из firestore
