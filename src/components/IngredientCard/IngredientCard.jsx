import React from 'react';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import styleCard from '../IngredientCard/IngredientCard.module.css'
import { Counter, CurrencyIcon, Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientDetails from '../IngredientDetails/IngredientDetails';

function IngredientCard({ item, openModal }) {
function onClick() {
  const childModal = <IngredientDetails item={item} />;
  openModal(childModal);
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