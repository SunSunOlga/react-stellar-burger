import React, {useState} from 'react';
import ingredientsStyles from '../BurgerIngredients/BurgerIngredients.module.css';
import IngredientCard from '../IngredientCard/IngredientCard'
import { Counter, CurrencyIcon, Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from "prop-types";





function BurgerIngredients ({data}) {

   

    return (
      <div className={`${ingredientsStyles.ingredients} pt-10`}>
      <p className='text text_type_main-large mt-10 mb-5'>Соберите бургер</p>
      <IngredientsTab />
      <IngredientSection ingredientData={data}/>

      </div>
    );
  }

  const IngredientsTab = () => {
   
   const [current, setCurrent] = React.useState('bun')

   return (
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
   );
  }


  const IngredientSection= ({ingredientData}) => {
   return (
  <section className={ingredientsStyles.IngredientSection}>
  
    {/*у нас в кардс массив и его надо бработать,возвращаем массив из разметки этих карточке(описываем для каждого элемента).возвращается компонент <IngredientCard /> созданный для каждого элемента(сколько карточек,столько создается и элементов)*/}
      {/*в пропсе свойство data*/}
      {/*атрибут keyб,в который необходимо задать уникальный ключ для каждого элемента массива и,тогда по этому ключу реакт сможет найти у себя в виртуальном domе элемент и в реальном*/}
      <div className={ingredientsStyles.cardsList}>
        {ingredientData.map( item => (
          <IngredientCard data={item} key={item._id} header='Булки'/>
        ))}
          
        </div>

  </section>
     )
  }


  export default BurgerIngredients ;



