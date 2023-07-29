import React from 'react';
import styleDetails from './IngredientDetails.module.css'
import PropTypes from "prop-types";
import { ingredientPropType } from '../../utils/prop-types'
import { useSelector } from 'react-redux';



function IngredientDetails({ ingredient: {
    name,
    image_large,
    calories,
    proteins,
    fat,
    carbohydrates,
  }}) {
    
    return (
        <div className={styleDetails.detailsSection}>
            <p className="text text_type_main-large">Детали ингредиента</p>
            <img src={image_large} alt={name} className={`${styleDetails.detailsImage} mr-5 ml-5`}  />
            <p className={`${styleDetails.detailsName} text text_type_main-medium mt-4`}>{name}</p>

            <div className={`${styleDetails.detailsInfo} text text_type_main-medium mt-4`}>

                <div className={`${styleDetails.ingredientDetail} text_color_inactive`}>
                    <p className="text text_type_main-default">Калории,ккал</p>
                    <p className="text text_type_digits-default">{calories}</p>
                </div>

                <div className={`${styleDetails.ingredientDetail} text_color_inactive`}>
                    <p className="text text_type_main-default">Белки, г</p>
                    <p className="text text_type_digits-default">{proteins}</p>
                </div>

                <div className={`${styleDetails.ingredientDetail} text_color_inactive`}>
                    <p className="text text_type_main-default">Жиры, г</p>
                    <p className="text text_type_digits-default">{fat}</p>
                </div>

                <div className={`${styleDetails.ingredientDetail} text_color_inactive`}>
                    <p className="text text_type_main-default">Углеводы, г</p>
                    <p className="text text_type_digits-default">{carbohydrates}</p>
                </div>
            </div>
        </div>
    )
}

export default IngredientDetails;

IngredientDetails.propTypes = {
    ingredient: ingredientPropType,
}