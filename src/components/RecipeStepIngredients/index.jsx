import React from "react"

export default class RecipeStepIngredients extends React.PureComponent{

    render(){
        const {ingredients} = this.props
        return(
            <>
                <h3>Related Ingredients</h3>
                <ul>
                    {ingredients.map(item => (<li>{item.name} - {item.gram} Gr</li>))}
                </ul>
            </>
        )
    }
}