import React from "react"

export default class RecipeStepDescription extends React.PureComponent {

    render(){
        const {description} = this.props

        return(
            <>
                <h3 className="sub-title">Description</h3>
                <p className="description">
                    {description} 
                </p>
            </>
        )
    }
}