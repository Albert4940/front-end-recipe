import React from "react"

import RecipeSteps from "../../components/RecipeSteps"

import { RecipeType } from "../../propTypes"

export default class Recipe extends React.PureComponent{
    static propTypes = {
        recipeData: RecipeType
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
