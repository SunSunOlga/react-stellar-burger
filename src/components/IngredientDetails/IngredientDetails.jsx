import styleDetails from './IngredientDetails.module.css'
import React from 'react';

const IngredientDetails = ({ ingredient }) => {
    return (
        <div className={styleDetails.detailsSection}>
            <img className={`${styleDetails.detailsImage} mr-5 ml-5`} src={ingredient.image} alt={ingredient.name} />
            <p className={`${styleDetails.detailsName} text text_type_main-medium mt-4`}>{ingredient.name}</p>

            <div className={`${styleDetails.detailsInfo} text text_type_main-medium mt-4`}>

                <div className={`${styleDetails.ingredientDetail} text_color_inactive`}>
                    <p className={`${styleDetails.ingredientDetailText} text text_type_main-default`}>Калории,ккал</p>
                    <p className={`${styleDetails.ingredientDetailText} text text_type_digits-default`}>{ingredient.calories}</p>
                </div>

                <div className={`${styleDetails.ingredientDetail} text_color_inactive`}>
                    <p className={`${styleDetails.ingredientDetailText} text text_type_main-default`}>Белки, г</p>
                    <p className={`${styleDetails.ingredientDetailText} text text_type_digits-default`}>{ingredient.proteins}</p>
                </div>

                <div className={`${styleDetails.ingredientDetail} text_color_inactive`}>
                    <p className={`${styleDetails.ingredientDetailText} text text_type_main-default`}>Жиры, г</p>
                    <p className={`${styleDetails.ingredientDetailText} text text_type_digits-default`}>{ingredient.fat}</p>
                </div>

                <div className={`${styleDetails.ingredientDetail} text_color_inactive`}>
                    <p className={`${styleDetails.ingredientDetailText} text text_type_main-default`}>Углеводы, г</p>
                    <p className={`${styleDetails.ingredientDetailText} text text_type_digits-default`}>{ingredient.carbohydrates}</p>
                </div>
            </div>
        </div>
    )


}

export default IngredientDetails;