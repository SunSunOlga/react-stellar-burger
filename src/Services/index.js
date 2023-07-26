import { countMiddleware } from "./MiddleWare/MiddleWare";
import { configureStore } from "@reduxjs/toolkit";
import ingredientsReducer from './Reducers/IngredientsSlice' //импортируем редьюсер


//export const store = createStore(reducer,composeWithDevTools(applyMiddleware (countMiddleware()))); //MIDLLEWARE

   //ТУЛКИТ

// export const store = configureStore({ //в configureStore передаем поции,опции-объект
// //список редьюсеров/можно объеденить в один  (ЭТОТ один редьюсер объединяем в один объект  )
//   //ЗДЕСЬ ФОРМИРУЕТСЯ ТИП ЭКШЕНА reducer: {
// reducer: {   //объект с редьюсерами/создадим новый в папке редьюсеров/slice
//      counter: counterReducer,  //перед тем как передать сюда редьюсер-должны дать ему название и импортированый редьюсер установить в качестве значения
  
//      photos: photoReducer,
//    }, 
//      // middleware: [countMiddleware()]  //подключаем МИДДЛУВАРУ/указываются в массиве
// });

// //ТЕПЕРЬ НИД ИЗМЕНЯТЬ ЗНАЧЕНИЯ ИЗ СТОРА(БУРГЕР КОНСТРУКТ)


export const store = configureStore({ //в configureStore передаем поции,опции-объект
  //список редьюсеров/можно объеденить в один  (ЭТОТ один редьюсер объединяем в один объект  )
    //ЗДЕСЬ ФОРМИРУЕТСЯ ТИП ЭКШЕНА reducer: {
  reducer: {   //объект с редьюсерами/создадим новый в папке редьюсеров/slice
       ingredients: ingredientsReducer,  //перед тем как передать сюда редьюсер-должны дать ему название и импортированый редьюсер установить в качестве значения
     
      }, 
       // middleware: [countMiddleware()]  //подключаем МИДДЛУВАРУ/указываются в массиве
  });
  
  //ТЕПЕРЬ НИД ИЗМЕНЯТЬ ЗНАЧЕНИЯ ИЗ СТОРА(БУРГЕР КОНСТРУКТ)