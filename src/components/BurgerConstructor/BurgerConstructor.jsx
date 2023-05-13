import React from 'react';
import styleConstructor from '../BurgerConstructor/BurgerConstructor.module.css'
import { ConstructorElement, DragIcon, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

function BurgerConstructor({data}) {

  const bunBurger =data.find((item) => item.type === 'bun');

    return (
      <div className="mt-25 ml-4">
           <ConstructorElement
        type="top"
        isLocked={true}
        text="Краторная булка N-200i (верх)"
        price={200}
        thumbnail={bunBurger.img}
      />
      
      <div className={styleConstructor.sectionConstructor} >
{data.map((item) => (
<div className={styleConstructor.burgerData} key={item._id}>
<DragIcon type="primary" />

      <ConstructorElement
         text={item.name}
         price={item.price}
        thumbnail={item.img}
      />
</div>
))}
      </div>


      <ConstructorElement
        type="bottom"
        isLocked={true}
        text="Краторная булка N-200i (низ)"
        price={200}
        thumbnail={bunBurger.img}
      />
<div className={`${styleConstructor.footerConstructor} mt-10`}>
  <div className={`${styleConstructor.price} mr-10`}>
<p className="text text_type_digits-medium pr-3">610</p>
<CurrencyIcon type="primary"  />
</div>
<Button htmlType="button" type="primary" size="medium">
  Оформить заказ
</Button>
</div>

   
      </div>
    );
  }
  
  export default BurgerConstructor ;