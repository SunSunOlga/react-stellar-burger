import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../Api/Api";

const initialState = {
    ingredients: [],
    isLoading: false,
    error: '',
    }
    
    
 export const fetchIngredients = createAsyncThunk(  //первое -задаем названия для типов экшенов,
    'ingredients/get', //название редьюсера (база для названия экшена),второе сама асинхронная ф-ция
     async ()  => {   // нид ф-ция ассинхронная (нид 2 параметра),первы не важен,тк не работаем с ним,а второй thunkApi позволяет возвращать значение при событии reject (ошибка)
            const res = await api.getIngredients(); //слово /limit=10 дает ограниченное количество данных
    //         const base = await res.json();
    //         return base;
    //     } catch (err){
    // return thunkApi.rejectWithValue('Произошла ошибка')
    //     }
            return res.data
       }
     ) 

 // //вместо отдельных экшенов и редьюсеров/хранилища-теперь слайсы(срезов)
     const ingredientsSlice = createSlice({  //в параметрах первые идут опции
        name: 'ingredients',  //имя и значение/название слайса будет использоваться как основа названий для работы со стором(создание редьюсеров/экшенов и тд)
        initialState,  // это свойство как и name
        /* reducers: { // !! при асинхроне мы не вызваем эти "action creater"  //// ЕСТЬ СВ-ВО reducers,будет описано множество действий ,которые буду воспроизведены
            ingredientUploading(state) {  // если идет загрузка
                state.isLoading = true;
                state.error = '';
            },
            ingredientUpLoad(state, action) {    // загрузилось
                state.isLoading = false;
                state.error= '';
                state.ingredients = action.payload;
            },
            ingredientUpLoadError(state, action) {
                state.isLoading = false;
                state.error = action.payload;  
            }
         },
        */
    
         //оформляем редьюсер для экшенов
         // свойство extraReducers
         extraReducers: {  //прописываем действия
    [fetchIngredients.fulfilled.type] : (state, action) => {  // из асинхроная берём ф-цию и меняем состояния
        state.isLoading = false;
        state.error= '';
        state.ingredients = action.payload;
    },
    [fetchIngredients.pending.type] : (state) => {
        state.isLoading = true;
        state.error = 'loading';
    },
     [fetchIngredients.rejected.type] : (state, action) => {
        state.isLoading = false;
        state.error = action.payload;  
           }
          }
        })
 

export const {ingredientUploading, ingredientUpLoad, ingredientUpLoadError} = ingredientsSlice.actions;

     //экспортируются 2 ф-ции,которые буду являтьcя ACTOIN CREATER
    // export const {addNum, removeNum} = counterSlice.actions //берём наши функции и получаем их из нашего counterSlice и свойства actions
    
 //експортируем редьюсер
export default ingredientsSlice.reducer;