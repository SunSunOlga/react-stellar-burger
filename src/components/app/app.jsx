import styles from "./app.module.css";

import Preloader from "../Preloader/Preloader";

import React, { useState, useEffect } from 'react';

import api, { configBurger } from '../../Api/Api'

import AppHeader, { Logo, BurgerLink } from '../AppHeader/AppHeader';

import Main from '../Main/Main';

import Modal from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";

import { fetchIngredients } from "../../Services/Reducers/IngredientsSlice"; 

function App() {

  const [data, setIngredients] = useState([]);
//const items = useSelector(store => store.cart.items)//потом меняет из data в items

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [headerModal, setheaderModal] = React.useState('');
  const [childModal, setChildModal] = React.useState('')

  const isLoading = useSelector(store => store.ingredients.isLoading)
  const dispatch = useDispatch();

  //используем встроенную библиотеку THUNT В Тулките/нам нид чистый функционал//СОЗДАЕМ ОТДЕЛЬНЫЙ ФАЙЛ PHOTOQURY

useEffect(() => {
  dispatch(fetchIngredients());// дистпатчим ту самую ассинроную функцию
}, [])

  
   /*   // REDUX
   //const count = useSelector(state => state.count) //хук,позволяет взяьб данные из стора/внутри задается ф-ция/полвчает стейт и возвращает то значение,которое хотим получить
//напрямую к редьюсеру обратиться не можем,потому нид диспетчер
 // const distpatch = useDispatch()// хук useDispatch -ф-ция,которая экшены будет передавать в редьюсер
 // const inputRef = useRef(null);
 */

  function openModal(modalHeaderName = '', mainModal) {
    setheaderModal(modalHeaderName);
    setChildModal(mainModal);
    setIsModalOpen(true);
  }


  function closeModal() {
    setIsModalOpen(false) //ф-ция пойдет в редьюс и больше использоваться не убдет,потому убираем пропсы
  }

/*  REDUX AND OLD ZAPROS

 //меняем данные в хранилище через дистпатч/в параметр толжны передать действие(экшн)
  function closeModal() {
    distpatch({
      type: 'REMOVE' // ЭТОТ экшн он получиьть в редбюсер (const reducer = (state = initialState, action) => {)
    })                  
  }
 // Получаем метод dispatch
  const dispatch = useDispatch();   
    useEffect(()=> {
    // Отправляем экшен-функцию
    dispatch( api
     .getIngredients())
     }, [])

  useEffect(() => {
    setIsLoading(true)
    api
      .getIngredients()
      .then((data) => {
        setIngredients(data.data);
        setIsLoading(false)
        console.log(data.data)
      })
      .catch((err) => console.log(err));
  }, []);
  */

  if (data.length < 1) return null

  if (isLoading) {
    return (
      <Preloader />
    )
  }

  return (
    <div className={styles.app}>
      <AppHeader />
      <Main data={data} openModal={openModal} /> {/*перемееная count передали бы в data={count} count взялся в store(InitialState*/}
      {isModalOpen && (
        <Modal headerModal={headerModal} closeModal={closeModal} >
          {childModal}
        </Modal>
      )}
    </div>
  );
}

export default App;
