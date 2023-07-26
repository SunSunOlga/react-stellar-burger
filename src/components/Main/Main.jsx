import React from 'react';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import styleMain from './Main.module.css';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import PropTypes from "prop-types";
import { ingredientPropType } from '../../utils/prop-types'
import { useSelector } from 'react-redux';

function Main({ data, openModal}) {

  
  //const count = useSelector(store => store.count) //взяли из хранилища/также убираем в тегах и пропсах
//  USESELECTOR ПОЗВОЛЯЕТ ПОЛУЧИТЬ ДАННЫЕ ИЗ ХРАНИЛИЩА И ОБРАБАТЫВАТЬ ИХ(ОНА МОЖЕТ БЫТЬ ДЛЯ ВСЕХ ОДИНАКОВА)
  //   const count = useSelector(store => { //если кол-во <1,то открываем модальное окно
// if(store.count < 0) {  / МОЖЕИ ВЫРЕЗАТЬ Ф-ЦИЮ/СОЗДАЕМ ПАПКУ В СТОР(SELECTORS)
//   openModal(true)
//   return 0
//    }
//     return store.count
//   }) //стрелочная ф-ция
//СЛЕДОВАТЕЛЬНО
//const count = useSelector(counterSelector)

  //табы
  //   const currentTab = useSelector(store => store.cart.currentTab);
 
  //const InitiaCards = useSelector(store => store.photos.photos) //береём из хранлища

  return (
    <main className={styleMain.main}>

      <BurgerIngredients data={data} openModal={openModal}/>

      <BurgerConstructor data={data} openModal={openModal}/>
    </main>
  );
}

export default Main;

Main.propTypes = {
  data: PropTypes.arrayOf(ingredientPropType),
  openModal: PropTypes.func,
}