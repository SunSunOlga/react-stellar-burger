const baseUrl = 'https://norma.nomoreparties.space/api/ingredients';

class Api {

_checkResponse(res) {
    if (res.ok) {
       return res.json();
   };
  /* Если мы попали сюда, значит ответ сервера не ОК */
  // Объект ошибки  так же json-ом приходит
   return res.json()
     .then((err) => {
       // Добавим туда код ошибки, его нет в ответе сервера
       err.statusCode = res.status;
      // И вернём отклонённый промис с объектом ошибки внутри
      return Promise.reject(err);
     });
 }

getIngredients = () => {
    return fetch(`${baseUrl}/ingredients`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(this.checkResponse);
  }
}

export default Api;
  