import React from "react"

export default class RecipeStepTitle extends React.PureComponent {

    render(){
        const {title} = this.props
        return(
            <div className="title">
                <h2>{title}</h2>
            </div> 
        )
    }
}