import React from "react"
import RecipeSteps from "../../components/RecipeSteps"

export default class Recipe extends React.PureComponent{

    render(){
        const {recipeData} = this.props
        return (
            <section class="timeline-area">
                <RecipeSteps steps={recipeData}/>
            </section>
        )
    }
} 