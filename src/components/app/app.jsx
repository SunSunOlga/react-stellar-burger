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

//  const [data, setIngredients] = useState([]);
//const items = useSelector(store => store.cart.items)//потом меняет из data в items

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [headerModal, setheaderModal] = React.useState('');
  const [childModal, setChildModal] = React.useState('')

  const isLoading = useSelector(store => store.ingredients.isLoading)
  const ingredients = useSelector(store=> store.ingredients.ingredients)
  const dispatch = useDispatch();


  function openModal(modalHeaderName = '', mainModal) {
    setheaderModal(modalHeaderName);
    setChildModal(mainModal);
    setIsModalOpen(true);
  }


  function closeModal() {
    setIsModalOpen(false) //ф-ция пойдет в редьюс и больше использоваться не убдет,потому убираем пропсы
  }
//  function closeModal() { //нид дописать редьюсер в игредиент слайс
 //   dispatch(CloseModal()) 
 // }

  //используем встроенную библиотеку THUNT В Тулките/нам нид чистый функционал
 useEffect(() => {
  dispatch(fetchIngredients());// дистпатчим ту самую ассинроную функцию
}, [])
console.log(useSelector(state=> state.ingredients))


  if (ingredients.length < 1) return null

  if (isLoading) {
    return (
      <Preloader />
    )
  }

  return (
    <div className={styles.app}>
      <AppHeader />
      <Main  openModal={openModal} /> {/*перемееная count передали бы в data={count} count взялся в store(InitialState*/}
      {isModalOpen && (
        <Modal headerModal={headerModal} closeModal={closeModal} >
          {childModal}
        </Modal>
      )}
    </div>
  );
}

export default App;
