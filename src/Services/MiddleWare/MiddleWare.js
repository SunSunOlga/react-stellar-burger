// import { REMOVE } from "../Action";

// export const countMiddleware = () => {
//   return (store) => {
//     //стор перед изменениями
//     return (next) => {
//       // next-ф-ция ,которая пропускает дальше
//       return (action) => {
//         //для обработки экшена,который идёт в стор

//         if (action.type === REMOVE && store.getState().count <= 0) {
//           // обращение к самому стору(ГетСтейт возвращает стор в чистом виде)
//           console.log('счетчик =0')
//           return; //возвращаем
//         }
//         return next(action); // если прошли дальше ,то экшн переправляем дальше
//       };
//     };
//   };
// };

//ЮЗСЕЛЕКТОР НЕ ПОНАДОБИТСЯ ,ТК СДЕАЛИ ЭТУ Ф-ЦИЮ ЗДЕСЬ
//ЗДЕСБ ДОСТУП К САМОМУ СТОРУ ИЗНАЧАЛЬНОМУ

// ТУЛКИТ //

// export const countMiddleware = () => {
//   return (store) => {
   
//     return (next) => {
    
//       return (action) => {
// //НИД ПОНЯТЬ,КАКОЙ ТИП У ЭКШЕНА
//         if (action.type === 'counter/removeNum' && store.getState().count <= 0) { 
        
//           console.log('счетчик =0')
//           return; 
//         }
//         return next(action); 
//       };
//     };
//   };
// };