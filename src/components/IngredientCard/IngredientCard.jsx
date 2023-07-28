import React from 'react';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import styleCard from '../IngredientCard/IngredientCard.module.css'
import { Counter, CurrencyIcon, Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import PropTypes from "prop-types";
import { ingredientPropType } from '../../utils/prop-types'

function IngredientCard({ ingredient, openModal }) {

  const { image, name, price } = ingredient;
  
//  const dispatch = useDispatch();

function onClick() {
  const childModal = <IngredientDetails ingredient={ingredient} />;
  openModal(childModal);
}

// function onClick() {
//   dispatch(closeModal(ingredient));
// }


  return (
    <div className={styleCard.IngredientCard} onClick={onClick}>
      <img src={image} alt={name} className={`${styleCard.picture} `}></img>
      <div className={styleCard.priceProduct}>
        <p className='text text_type_digits-default  mt-1'>{price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className='text text_type_main-default mt-1'>{name}</p>
      <Counter count={1} size="default" />
    </div>
  );
}

export default IngredientCard;

IngredientCard.propTypes = {
  item: ingredientPropType,
  openModal: PropTypes.func,
};