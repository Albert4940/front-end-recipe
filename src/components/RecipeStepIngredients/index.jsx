import React from "react"
import { RecipeIngredientsType } from "../../propTypes"
import PropTypes from "prop-types"

export default class RecipeStepIngredients extends React.PureComponent{
    static propTypes = {
        ingredients: PropTypes.arrayOf(RecipeIngredientsType).isRequired
    }
    render(){
        const {ingredients} = this.props
        return(
            <>
                <h3>Related Ingredients</h3>
                <ul>
                    {ingredients.map((item,i) => (<li key={`${i}-${item.name}`}>{item.name} - {item.quantity} {item.metrics}</li>))}
                </ul>
            </>
        )
    }
}