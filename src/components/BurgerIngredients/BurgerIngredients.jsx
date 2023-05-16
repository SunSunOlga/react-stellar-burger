import React, { useState } from 'react';
import ingredientsStyles from '../BurgerIngredients/BurgerIngredients.module.css';
import IngredientCard from '../IngredientCard/IngredientCard'
import { Counter, CurrencyIcon, Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from "prop-types";
import { ingredientPropType } from '../../utils/prop-types'



function BurgerIngredients({ data, openModal }) {

  const buns = data.filter((item) => item.type === "bun");
  const sauces = data.filter((item) => item.type === "sauce");
  const mains = data.filter((item) => item.type === "main");
  const [current, setCurrent] = React.useState('bun');

  return (
    <div className={`${ingredientsStyles.ingredients} pt-10`}>
      <p className='text text_type_main-large mt-10 mb-5'>Соберите бургер</p>

      <div className={`${ingredientsStyles.IngredientsTab}`}>
        <Tab value='bun' active={current === 'bun'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value='sauce' active={current === 'sauce'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value='main' active={current === 'main'} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>

      <section className={ingredientsStyles.IngredientSection}>

        {/*у нас в кардс массив и его надо бработать,возвращаем массив из разметки этих карточке(описываем для каждого элемента).возвращается компонент <IngredientCard /> созданный для каждого элемента(сколько карточек,столько создается и элементов)*/}
        {/*в пропсе свойство data*/}
        {/*атрибут keyб,в который необходимо задать уникальный ключ для каждого элемента массива и,тогда по этому ключу реакт сможет найти у себя в виртуальном domе элемент и в реальном*/}
        <p className='mt-10 text text_type_main-medium'>
          Булки
        </p>
        <div className={ingredientsStyles.cardsList}>
          {buns.map(item => (
            <IngredientCard item={item} key={item._id} openModal={openModal} />
          ))}
        </div>
        <p className='mt-10 text text_type_main-medium'>
          Соусы
        </p>
        <div className={ingredientsStyles.cardsList}>
          {sauces.map(item => (
            <IngredientCard item={item} key={item._id} openModal={openModal}/>
          ))}
        </div>
        <p className='mt-10 text text_type_main-medium'>
          Начинки
        </p>
        <div className={ingredientsStyles.cardsList}>
          {mains.map(item => (
            <IngredientCard item={item} key={item._id} openModal={openModal} />
          ))}
        </div>

      </section>

    </div>
  );
}

export default BurgerIngredients;




