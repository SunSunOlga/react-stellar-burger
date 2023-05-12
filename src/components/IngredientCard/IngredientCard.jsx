import React from 'react';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import styleCard from '../IngredientCard/IngredientCard.module.css'
import { Counter, CurrencyIcon, Tab } from '@ya.praktikum/react-developer-burger-ui-components'

function IngredientCard ({data, header}) {
  
  return (
      <div className={styleCard.IngredientCard}>
        <p className='text text_type_main-medium pt-10 pb-5'>{header}</p>
    <img src={data.image} alt={data.name} className={`${styleCard.picture} `}></img>
    <div className={styleCard.priceProduct}>
    <p className='text text_type_digits-default  mt-1'>{data.price}</p>
    <CurrencyIcon type="primary" />
    </div>
    <p className='text text_type_main-default mt-1'>{data.name}</p>
    <Counter count={1} size="default" />
      </div>
    );
  }

  export default IngredientCard;