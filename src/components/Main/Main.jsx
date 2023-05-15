import React from 'react';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import styleMain from './Main.module.css'
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'

function Main({ data }) {

  return (
    <div className={styleMain.main}>

      <BurgerIngredients data={data} />

      <BurgerConstructor data={data} />
    </div>
  );
}

export default Main;