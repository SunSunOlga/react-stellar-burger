
export class Api {
  constructor({baseUrl, ingredients, order}) {
    this._baseUrl = baseUrl;
    this._ingredients = ingredients;   
    this._order = order; 
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
    return fetch(`${this._baseUrl}/ingredients`, {
    })
    .then(this._checkResponse);
  }
}

// getOrderDetails = (ingredientsArray) => {
//   return fetch(`${this._baseUrl}/orders`, {
//     method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         ingredients: ingredientsArray,
//       }),
//     }).then(this._checkResponse);
//   };



const configBurger = {
  baseUrl: 'https://norma.nomoreparties.space/api',
  ingredients: '/ingredients',
  order: "/orders",
}


const api = new Api(configBurger)

export default api;
  