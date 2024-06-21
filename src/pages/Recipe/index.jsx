import React from "react"

import RecipeSteps from "../../components/RecipeSteps"

import { RecipeStepsType } from "../../propTypes"

export default class Recipe extends React.PureComponent{
    static propTypes = {
        recipeData: RecipeStepsType
    }
    
    render(){
        const {recipeData} = this.props

        return (
            <section className="timeline-area">
                <RecipeSteps recipeSteps={recipeData}/>
            </section>
        )
    }
} 
