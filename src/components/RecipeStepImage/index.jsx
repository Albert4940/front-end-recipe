import React from "react"

export default class RecipeStepImage extends React.PureComponent {

    render(){
        const {image} = this.props
        return(
            <img src={image} alt="recipe step" style={{width: "100%", borderRadius:"5px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)"}}/>
        )
    }
}