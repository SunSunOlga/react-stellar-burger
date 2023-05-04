
export class Api {
  constructor({baseUrl, ingredients}) {
    this._baseUrl = baseUrl;
    this._ingredients = ingredients;   
 }

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
    return fetch(`${this.baseUrl}/ingredients`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(this.checkResponse);
  }
}

const configBurger = {
  baseUrl: 'ttps://norma.nohmoreparties.space/api',
  ingredients: '/ingredients',
}


const api = new Api(configBurger)

export default api;
  