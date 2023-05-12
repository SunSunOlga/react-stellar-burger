import React from 'react';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import styleMain from './Main.module.css'

function Main ({data}) {
  
  return (
      <div className={styleMain.main}>
    
      <BurgerIngredients data={data}/>
      </div>
    );
  }

  export default Main;