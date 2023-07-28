import React from 'react';
import styleConstructor from '../BurgerConstructor/BurgerConstructor.module.css'
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import OrderDetails from '../OrderDetails/OrderDetails';
import PropTypes from "prop-types";
import { ingredientPropType } from '../../utils/prop-types'
import { useDispatch, useSelector } from 'react-redux';

function BurgerConstructor({ data, openModal }) {

// const discount  = useSelector(store => store.cart.promoDiscount ); думаю тут будет ощая стоимость или создам потом отдельно контейнер

 const ingredients = useSelector(store => store.ingredients) //береём из хранлища

  const bunBurger = data.find((item) => item.type === 'bun');
  function onClick() {
    const childModal = <OrderDetails order={'034536'} />;
    openModal(childModal);
  }
  
  return (
    <div className={`${styleConstructor.windowConstructor} mt-25 ml-4`}>
  
      <ConstructorElement
        type="top"
        isLocked={true}
        text="Краторная булка N-200i (верх)"
        price={200}
        thumbnail={bunBurger.image_mobile}
      />
     
      <div className={`${styleConstructor.sectionConstructor} mt-4 mb-4 pr-4`}>
        {ingredients.map(
          (item) => 
          item.type !== 'bun' &&  (
          <div key={item._id} className={`${styleConstructor.burgerData}  pt-4`} >
            <DragIcon type="primary" />

            <ConstructorElement
              text={item.name}
              price={item.price}
              thumbnail={item.image_mobile}
            />
          </div>
        )
        )}
      </div>
      
      <ConstructorElement
        type="bottom"
        isLocked={true}
        text="Краторная булка N-200i (низ)"
        price={200}
        thumbnail={bunBurger.image_mobile}
      />
      
      <div className={`${styleConstructor.footerConstructor} mt-10`}>
        <div className={`${styleConstructor.price} mr-10`}>
          <p className="text text_type_digits-medium pr-3">610</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="medium" onClick={onClick}>
          Оформить заказ
        </Button>
      </div>


    </div>
  );
}

export default BurgerConstructor;

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(ingredientPropType),
  openModal: PropTypes.func,
}