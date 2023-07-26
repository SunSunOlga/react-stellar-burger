import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../Api/Api";


/* /////////////// ТУЛКИТ
// const initialState = {
// count: 0
// }

// //вместо отдельных экшенов и редьюсеров/хранилища-теперь слайсы(срезов)
// export const counterSlice = createSlice({   //в параметрах первые идут опции
//  //тип экшена
//   name: "counter", //имя и значение/название слайса будет использоваться как основа названий для работы со стором(создание редьюсеров/экшенов и тд)

//     initialState,  //2-ым параметром должны дать инициализирующий стор,т.е (создаем наш какой-нить InitialState ,который здесб указываем для инициализации)

//     reducers: {  // ЕСТЬ СВ-ВО reducers,будет описано множество действий ,которые буду воспроизведены

//       addNum: (state, action) => {  //это ф-ция,которая получает в параметры стейт и экшн
//     state.count += action.payload  //будет брать state.count и плюсовать к нему payload из нашего экшена/по сути редьюсер,который меняет состояние стора
//        },
//       removeNum: (state, action) => {  // еще одну ф-цию пропишем
//         state.count -= action.payload 
//        }
//       }
//  });

//  //экспортируются 2 ф-ции,которые буду являтьcя ACTOIN CREATER
//  export const {addNum, removeNum} = counterSlice.actions //берём наши функции и получаем их из нашего counterSlice и свойства actions
// //експортируем редьюсер
//  export default counterSlice.reducer;
*/

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


   /* // CREATESLICE
    // //вместо отдельных экшенов и редьюсеров/хранилища-теперь слайсы(срезов)
    // export const counterSlice = createSlice({   //в параметрах первые идут опции
    //  //тип экшена
    //   name: "ingredients", //имя и значение/название слайса будет использоваться как основа названий для работы со стором(создание редьюсеров/экшенов и тд)
    
    //     initialState,  //2-ым параметром должны дать инициализирующий стор,т.е (создаем наш какой-нить InitialState ,который здесб указываем для инициализации)
    
    //     reducers: {  // ЕСТЬ СВ-ВО reducers,будет описано множество действий ,которые буду воспроизведены
    //    //     setIngredient: (state, action) => { ...
     
    //       }
    //  });
   */

     const ingredientsSlice = createSlice({
        name: 'ingredients',
        initialState,  // это свойство как и name
        /* reducers: { // при синхроне мы не вызваем эти "action creater" 
            photoUploading(state) {  // если будет загрузка
                state.isLoading = true;
                state.error = '';
            },
            photoUpLoad(state, action) {    // загрузилось
                state.isLoading = false;
                state.error= '';
                state.photos = action.payload;
            },
            photoUpLoadError(state, action) {
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
        state.photos = action.payload;
    },
    [fetchIngredients.pending.type] : (state) => {
        state.isLoading = true;
        state.error = '';
    },
     [fetchIngredients.rejected.type] : (state, action) => {
        state.isLoading = false;
        state.error = action.payload;  
           }
          }
        })
 

export const {photoUploading, photoUpLoad, photoUpLoadError} = ingredientsSlice.actions;

     //экспортируются 2 ф-ции,которые буду являтьcя ACTOIN CREATER
    // export const {addNum, removeNum} = counterSlice.actions //берём наши функции и получаем их из нашего counterSlice и свойства actions
    
 //експортируем редьюсер
export default ingredientsSlice.reducer;