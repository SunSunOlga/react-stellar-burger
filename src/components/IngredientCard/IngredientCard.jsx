import React, { useState, useEffect } from 'react';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import styleCard from '../IngredientCard/IngredientCard.module.css'
import { Counter, CurrencyIcon, Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import PropTypes from "prop-types";
import { ingredientPropType } from '../../utils/prop-types'
import { clickIngredient } from '../../Services/Reducers/IngredientsSlice';
import { useDispatch, useSelector } from "react-redux";



function IngredientCard({ item }) {
  const dispatch = useDispatch();
  function onClick() {
    const childModal = <IngredientDetails item={item} />;
    dispatch(clickIngredient(item));
  }
  
    return (
      <div className={styleCard.IngredientCard} onClick={onClick}>
        <img src={item.image} alt={item.name} className={`${styleCard.picture} `}></img>
        <div className={styleCard.priceProduct}>
          <p className='text text_type_digits-default  mt-1'>{item.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className='text text_type_main-default mt-1'>{item.name}</p>
        <Counter count={1} size="default" />
      </div>
    );
  }

export default IngredientCard;

IngredientCard.propTypes = {
  item: ingredientPropType,
};