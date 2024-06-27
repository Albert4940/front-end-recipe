import React from 'react'
import RecipeStep from '../RecipeStep'

export default class RecipeSteps extends React.PureComponent {
    render(){
        const {recipeSteps} = this.props
        const steps = recipeSteps.steps
        return(
            <>
                {steps.map((step,i) => <RecipeStep key={i} recipeStepData = {step} index={i}/>)}
                <RecipeStep key={steps.length} isLast={true}/>
            </>
        )
    }
}