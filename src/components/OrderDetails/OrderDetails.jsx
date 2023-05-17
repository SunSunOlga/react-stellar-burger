import React from 'react';
import stylesOrderDetails from '../OrderDetails/OrderDetails.module.css'
import done from '../../images/done.svg'
import PropTypes from "prop-types";

function OrderDetails({ order }) {
    return (
        <div className={`${stylesOrderDetails.section} `}>
            <p className={`${stylesOrderDetails.number} text_type_digits-large `}>{order}</p>
            <p className="text text_type_main-medium mt-8">идентификатор заказа</p>
            <img src={done} className={`${stylesOrderDetails.done}  mt-15`}></img>
            <p className="text text_type_main-default mt-15">
                Ваш заказ начали готовить
            </p>
            <p className="text text_type_main-default text_color_inactive mt-2 mb-15">Дождитесь готовности на орбитальной станции</p>
        </div>
    )

}
export default OrderDetails;

OrderDetails.propTypes = {
    order: PropTypes.number.isRequired
  };
