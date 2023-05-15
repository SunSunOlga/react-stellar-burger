import React from 'react';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import styleMain from './Main.module.css'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'

function Main({ data, openModal, setheaderModal }) {

  //setheaderModal('fdsfdsf')

  return (
    <div className={styleMain.main}>

      <BurgerIngredients data={data} openModal={openModal}/>

      <BurgerConstructor data={data} openModal={openModal}/>
    </div>
  );
}

export default Main;