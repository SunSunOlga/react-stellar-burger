import React from 'react';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import styleMain from './Main.module.css';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import PropTypes from "prop-types";
import { ingredientPropType } from '../../utils/prop-types'

function Main({ data, openModal, setheaderModal }) {

  //setheaderModal('fdsfdsf')

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