import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../Api/Api";


 // !! НАМ НИД СОЗДАТЬ ХРАНИЛИЩЕ ,В НЕМ  ХРАНИМ ДВА РАЗНЫХ ОБЪЕКТА ->
// -> ОДИН МАССИВ ИНГРЕДИЕНТОВ ДЛЯ ИНГРЕДИЕНТОВ СЛЕВА,ВТОРОЙ-ОБЪЕКТ,В КОТОРОМ ХРАНИТЬСЯ КОНСТРУКТОР И ВКОНСУТРКТОРЕ(СОЗДАЕМ КАК ОБЪЕКТ СО СВ-АМИ:БУЛКА И МАССИВ ИГРЕДИЕНТОВ МЕЖДУ БУЛКАМИ)
// constructor = {
//   bun: null, //если булка,то записываем в бан,если нет,то добавляем к массиву(ingredients)
//   //проверям ,что булка есть?проверяем,если bun === null ,если была ,то замениться,если нет,то перезапишится
//   ingredients: []
//   //сюда будет дополнятся айдишник
// }


// const initialState = {
//     bun: null,
//     ingredients: [],
//     }

    // export const fetchIngredients = createAsyncThunk(  //первое -задаем названия для типов экшенов,
    // 'ingredientBurger/get', //название редьюсера (база для названия экшена),второе сама асинхронная ф-ция
    //  async ()  => {   // нид ф-ция ассинхронная (нид 2 параметра),первы не важен,тк не работаем с ним,а второй thunkApi позволяет возвращать значение при событии reject (ошибка)
    //         const res = await api.getIngredients(); //слово /limit=10 дает ограниченное количество данных
    // //         const base = await res.json();
    // //         return base;
    // //     } catch (err){
    // // return thunkApi.rejectWithValue('Произошла ошибка')
    // //     }
    //         return res.data
    //    }
    //  ) 


    //  export default ingredientsSlice.reducer;