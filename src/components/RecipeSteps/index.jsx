import React from 'react'
import RecipeStep from '../RecipeStep'

export default class RecipeSteps extends React.PureComponent {
    render(){
        const {steps} = this.props
        return(
            <>
                {steps.map((step,i) => <RecipeStep key={i} {...step} index={i}/>)}
                <RecipeStep key={"last"} index={"last"}/>
            </>
        )
    }
}