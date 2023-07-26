


 //       ////  VANUL REDUX 
  
  /// REDUCERS

 // !! НАМ НИД СОЗДАТЬ ХРАНИЛИЩЕ ,В НЕМ  ХРАНИМ ДВА РАЗНЫХ ОБЪЕКТА ->
// -> ОДИН МАССИВ ИНГРЕДИЕНТОВ ДЛЯ ИНГРЕДИЕНТОВ СЛЕВА,ВТОРОЙ-ОБЪЕКТ,В КОТОРОМ ХРАНИТЬСЯ КОНСТРУКТОР И ВКОНСУТРКТОРЕ(СОЗДАЕМ КАК ОБЪЕКТ СО СВ-АМИ:БУЛКА И МАССИВ ИГРЕДИЕНТОВ МЕЖДУ БУЛКАМИ)
// constructor = {
//   bun: null, //если булка,то записываем в бан,если нет,то добавляем к массиву(ingredients)
//   //проверям ,что булка есть?проверяем,если bun === null ,если была ,то замениться,если нет,то перезапишится
//   ingredients: []
//   //сюда будет дополнятся айдишник
// }

// const initialState = {
//     count: 0,
//     reh: 3,
//     isOpen: false,
    
//     changed: ''
//   }
  
//  export const reducer = (state = initialState, action) => {  //редьюс меняет стейты
//     switch (action.type) { //тип экшена ,а в кейс варианты,которые могут быть
//       case REMOVE: //используем константы из экшенов
//    const newCount =  {...state, count: state.count -action.payload}
//    const newState=  {...state, count: newCount, changed: action.payload.changed}
//          return 
//       case ADD:
//            return{...state, count: state.count + action.payload.num, changed: action.payload.changed}
//       default:          //если ни олин из кейсов не совпадет,то defult 
       
//       return state //всегда должен возвращать стейт
//     }
//   };

 ///////   ACTIONS //ВСЕ ИНГРЕДИЕНТЫ КОНСТРУКТОРА ХРАНЯТСЯ В ХРАНИЛИЩЕ -ЭТО STATE,(КАК ТОЛЬКО МАССИВ МЕНЯЕТСЯ-КОМПОНЕНТ ДОЛЖЕН ПЕРИСОВАТЬСЯ),СООТВЕСВЕННО МАССИВ ИНГРЕДИЕНТОВ В КОНСТРУКТОРЕ-СТЕЙТ
//СТЕЙТ МЕНЯЕТСИ В РЕДБЮСЕРЕ (ДОБАВЬ ИНГРЕДИЕНТ-ДОЛЖЕН СТОР ПОМЕНЯТЬ),ДОЛЖЕК К ЭТОМУ ИГРЕДИЕНТУ ЕЩЕ ДОБАВЛЯТЬ НОВЫЙ ID 
//ЭТО ВСЁ ДЕЛАЕТСЯ В  ACTION CREATERE

// export const addNumCounter = (payload) => {  //эта будет функция,которая создает объект экшна
//   const actionObj = {
//       type: ADD,
//            payload: {
//             num: payload,  //в num записываем то,что пришло в параметре (payload)
//             changed:new Date()
//           }
//        }
//      return actionObj         //и этот объект будем из функции возвращать
//   }
  
//   export const removeNumCounter = (payload) => {
//       const actionObj = {
//           type: REMOVE,
//                payload: {
//                 num: payload,  //в num записываем то,что пришло в параметре (payload)
//                 changed:new Date()
//               }
//            }
//            return actionObj  
//   }

 ///////////  API ACTIONS 
 // export function getIngredients() {
//     // Воспользуемся первым аргументом из усилителя redux-thunk - dispatch
//   return function(dispatch) {
//         // Проставим флаг в хранилище о том, что мы начали выполнять запрос
//         // Это нужно, чтоб отрисовать в интерфейсе лоудер или заблокировать 
//         // ввод на время выполнения запроса
//     dispatch({
//       type: GET_ITEMS_REQUEST   // отображается, если запрос отправлен.
//     })
// getItemsRequest().then(res => {
//   if (res && res.success) {
//     dispatch({
//       type: GET_ITEMS_SUCCESS,  // показывается в случае успеха, когда запрос выполнен и данные получены.
//       items: res.data
//     });
//   } else {
//     dispatch({
//         type: GET_ITEMS_FAILED   //используется в случае ошибки.
//         });
//       }
//     });
//   };
// }