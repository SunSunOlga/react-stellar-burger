


// const initialState = {
//     bun: null,
//     ingredients: [],
//     }


//  export const fetchPhotos = createAsyncThunk(  //первое -задаем названия для типов экшенов,
//  'burger/fetchBurger', //название редьюсера (база для названия экшена),второе сама асинхронная ф-ция
//   async (_, thunkApi)  => {   // нид ф-ция ассинхронная (нид 2 параметра),первы не важен,тк не работаем с ним,а второй thunkApi позволяет возвращать значение при событии reject (ошибка)
//      try {     
//          const res = await api.getIngredients(); //слово /limit=10 дает ограниченное количество данных
//          const base = await res.json();
//          return base;
//      } catch (err){
//  return thunkApi.rejectWithValue('Произошла ошибка')
//      }
//     }
//   ) 