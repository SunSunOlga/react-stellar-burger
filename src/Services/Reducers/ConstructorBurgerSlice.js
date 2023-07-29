import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../Api/Api";


 // !! НАМ НИД СОЗДАТЬ ХРАНИЛИЩЕ ,В НЕМ  ХРАНИМ ДВА РАЗНЫХ ОБЪЕКТА ->
// -> ОДИН МАССИВ ИНГРЕДИЕНТОВ ДЛЯ ИНГРЕДИЕНТОВ СЛЕВА,ВТОРОЙ-ОБЪЕКТ,В КОТОРОМ ХРАНИТЬСЯ КОНСТРУКТОР И ВКОНСУТРКТОРЕ(СОЗДАЕМ КАК ОБЪЕКТ СО СВ-АМИ:БУЛКА И МАССИВ ИГРЕДИЕНТОВ МЕЖДУ БУЛКАМИ)
initialState  = {
  constructor: {
  bun: null, //если булка,то записываем в бан,если нет,то добавляем к массиву(ingredients)
  //проверям ,что булка есть?проверяем,если bun === null ,если была ,то замениться,если нет,то перезапишится
  ingredients: []
  //сюда будет дополнятся айдишник
  }
}

  //   export const fetchConstuctor = createAsyncThunk(  //первое -задаем названия для типов экшенов,
  //   'ingredientBurger/get', 
  //   async (ingredients, { rejectWithValue }) => {
  //     try {
  //       const res = await api.getOrderDetails(ingredients);
  //       return res;
  //     } catch (err) {
  //       const { message } = err;
  //       rejectWithValue(message);
  //     }
  //   }
  // );

    //  const constructorSlice = createSlice({  //в параметрах первые идут опции
    //     name: 'constructorBurger',  //имя и значение/название слайса будет использоваться как основа названий для работы со стором(создание редьюсеров/экшенов и тд)
    // //     initialState,  //
    //              reducers: { // !! при асинхроне мы не вызваем эти "action creater"  //// ЕСТЬ СВ-ВО reducers,будет описано множество действий ,которые буду воспроизведены
    //         ingredientUploading(state)  {  // если идет загрузка
    //             state.isLoading = true;
    //             state.error = '';
    //         },
    //         ingredientUpLoad(state, action) {    // загрузилось
    //             state.isLoading = false;
    //             state.error= '';
    //             state.ingredients = action.payload;
    //         },
    //         ingredientUpLoadError(state, action) {
    //             state.isLoading = false;
    //             state.error = action.payload;  
    //             ),
    //         ];
    //       },
    //     },
      
    //   });

     export default ingredientsSlice.reducer;