import React from 'react';
import styleDetails from './IngredientDetails.module.css'


function IngredientDetails({ item }) {
    return (
        <div className={styleDetails.detailsSection}>
            <p className="text text_type_main-large">Детали ингредиента</p>
            <img src={item.image_large} alt={item.name} className={`${styleDetails.detailsImage} mr-5 ml-5`}  />
            <p className={`${styleDetails.detailsName} text text_type_main-medium mt-4`}>{item.name}</p>

            <div className={`${styleDetails.detailsInfo} text text_type_main-medium mt-4`}>

                <div className={`${styleDetails.ingredientDetail} text_color_inactive`}>
                    <p className="text text_type_main-default">Калории,ккал</p>
                    <p className="text text_type_digits-default">{item.calories}</p>
                </div>

                <div className={`${styleDetails.ingredientDetail} text_color_inactive`}>
                    <p className="text text_type_main-default">Белки, г</p>
                    <p className="text text_type_digits-default">{item.proteins}</p>
                </div>

                <div className={`${styleDetails.ingredientDetail} text_color_inactive`}>
                    <p className="text text_type_main-default">Жиры, г</p>
                    <p className="text text_type_digits-default">{item.fat}</p>
                </div>

                <div className={`${styleDetails.ingredientDetail} text_color_inactive`}>
                    <p className="text text_type_main-default">Углеводы, г</p>
                    <p className="text text_type_digits-default">{item.carbohydrates}</p>
                </div>
            </div>
        </div>
    )
}

export default IngredientDetails;